import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGameApi, API_BASE } from './useGameApi';
import { useProgress } from './useProgress';
import { confettiBurst } from './confetti';
import { QUESTIONS_PER_LEVEL } from './campaign';

const CLUE_LABELS = [
  { key: 'instrument', label: 'NASA instrument' },
  { key: 'mineralogy', label: 'Mineralogy & composition' },
  { key: 'terrain_metrics', label: 'Terrain & slope metrics' },
  { key: 'thermal_environment', label: 'Environment & atmosphere' }
];

const TARGET_LABELS = {
  earth_analog: 'Earth analogue',
  moon: 'Moon',
  mars: 'Mars'
};

function Stars({ count = 0, big = false }) {
  return (
    <span
      className={`tw-stars${big ? ' tw-stars--big' : ''}`}
      role="img"
      aria-label={`${count} of 3 stars`}
    >
      {[0, 1, 2].map(index => (
        <span key={index} className={index < count ? 'is-on' : ''} aria-hidden="true">★</span>
      ))}
    </span>
  );
}

function emptyRun() {
  return {
    index: 0,
    score: 0,
    clean: 0,
    streak: 0,
    results: [],
    cluesRevealed: 0,
    guess: null,
    result: null,
    submitting: false,
    error: null,
    imageState: 'loading'
  };
}

export default function GameSection() {
  const { campaign, status, error, reload, submitGuess } = useGameApi();
  const { progress, recordRun, reset, isUnlocked, starsFor, stats } = useProgress();

  const [view, setView] = useState('intro'); // intro | map | run | result
  const [levelNumber, setLevelNumber] = useState(1);
  const [run, setRun] = useState(null);
  const [summary, setSummary] = useState(null);
  const sectionRef = useRef(null);

  const level = useMemo(
    () => campaign?.levels.find(item => item.level_number === levelNumber) || null,
    [campaign, levelNumber]
  );
  const question = run && level ? level.questions[run.index] : null;
  const imageUrl = question ? `${API_BASE}${question.image_url}` : null;

  useEffect(() => {
    if (!imageUrl) return undefined;
    let alive = true;
    setRun(current => (current ? { ...current, imageState: 'loading' } : current));
    const img = new Image();
    img.onload = () => { if (alive) setRun(current => (current ? { ...current, imageState: 'ready' } : current)); };
    img.onerror = () => { if (alive) setRun(current => (current ? { ...current, imageState: 'error' } : current)); };
    img.src = imageUrl;
    return () => { alive = false; };
  }, [imageUrl]);

  /* Warm the next frame so a run never stalls between questions. */
  useEffect(() => {
    if (!level || !run) return;
    const next = level.questions[run.index + 1];
    if (next) {
      const img = new Image();
      img.src = `${API_BASE}${next.image_url}`;
    }
  }, [level, run?.index]);

  /* Keep the console in view whenever the player changes screen or question. */
  useEffect(() => {
    if (!['map', 'run', 'result'].includes(view)) return;
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, [view, run?.index]);

  const startLevel = useCallback((number) => {
    if (!campaign) return;
    const target = campaign.levels.find(item => item.level_number === number);
    if (!target) return;
    setLevelNumber(number);
    setSummary(null);
    setRun(emptyRun());
    setView('run');
  }, [campaign]);

  const unlockClue = () => {
    setRun(current => {
      if (!current || current.result || current.cluesRevealed >= 4) return current;
      return { ...current, cluesRevealed: current.cluesRevealed + 1 };
    });
  };

  const makeGuess = async (value) => {
    if (!run || !question || run.submitting || run.result) return;

    const cluesUsed = run.cluesRevealed;
    const streak = run.streak;
    setRun(current => ({ ...current, submitting: true, guess: value, error: null }));

    try {
      const res = await submitGuess({
        levelNumber: question.level_number,
        guess: value,
        cluesUsed,
        streak
      });

      const cleanPoints = res.is_correct
        ? Math.max(0, (res.scoring?.base_points || 0) - (res.scoring?.clue_penalty || 0))
        : 0;

      setRun(current => {
        if (!current) return current;
        return {
          ...current,
          submitting: false,
          result: res,
          score: current.score + (res.points_awarded || 0),
          clean: current.clean + cleanPoints,
          streak: res.is_correct ? Math.min(5, current.streak + 1) : 0,
          results: [...current.results, { correct: res.is_correct, points: res.points_awarded || 0, cleanPoints }]
        };
      });
    } catch (err) {
      setRun(current => (current ? { ...current, submitting: false, error: err.message } : current));
    }
  };

  const finishLevel = () => {
    if (!run || !level) return;
    const correct = run.results.filter(entry => entry.correct).length;
    const ratio = level.total_points > 0 ? run.clean / level.total_points : 0;
    const stars = ratio >= 0.85 ? 3 : ratio >= 0.65 ? 2 : ratio >= 0.45 ? 1 : 0;

    recordRun({
      levelNumber: level.level_number,
      stars,
      score: run.score,
      correct,
      questionCount: level.questions.length
    });

    setSummary({ stars, score: run.score, clean: run.clean, correct, ratio, total: level.total_points });
    setView('result');
    if (stars === 3) confettiBurst(110);
  };

  const nextQuestion = () => {
    if (!run || !level) return;
    if (run.index >= level.questions.length - 1) {
      finishLevel();
      return;
    }
    setRun(current => ({
      ...current,
      index: current.index + 1,
      cluesRevealed: 0,
      guess: null,
      result: null,
      error: null,
      imageState: 'loading'
    }));
  };

  if (status === 'loading') {
    return (
      <section className="section game" id="game" ref={sectionRef}>
        <div className="ghost" aria-hidden="true">08</div>
        <div className="game__panel">
          <div className="game__halo" aria-hidden="true" />
          <div className="game__intro">
            <p className="eyebrow">✦ Mission telemetry</p>
            <h2 className="section__title">Acquiring <span className="grad grad--hyper">frames.</span></h2>
            <p className="section__lede">Linking to the campaign server…</p>
          </div>
        </div>
      </section>
    );
  }

  if (status === 'offline') {
    return (
      <section className="section game" id="game" ref={sectionRef}>
        <div className="ghost" aria-hidden="true">08</div>
        <div className="game__panel">
          <div className="game__halo" aria-hidden="true" />
          <div className="game__intro">
            <p className="eyebrow" style={{ color: 'var(--danger)' }}>⚠ Signal lost</p>
            <h2 className="section__title">Mission telemetry <span className="grad grad--fire">offline.</span></h2>
            <p className="section__lede">{error || 'The campaign server did not answer.'}</p>
            <button className="btn btn--solid magnetic btn--big" type="button" onClick={reload}>
              <span className="btn__flare" />↻ Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section game" id="game" ref={sectionRef}>
      <div className="ghost" aria-hidden="true">08</div>

      <div className={`game__panel${view === 'run' ? ' is-run' : ''}`}>
        <div className="game__halo" aria-hidden="true" />

        {view === 'intro' ? (
          <div className="game__intro">
            <p className="eyebrow">✦ Guess the planet · mission briefing ✦</p>
            <h2 className="section__title">
              Can you tell Earth from <span className="grad grad--hyper">its twins?</span>
            </h2>
            <p className="section__lede">
              One hundred frames. Three worlds. Ten levels that get harder every time.
              Some of these are Earth in disguise.
            </p>

            <div className="tw-intro__actions">
              <button
                className="btn btn--solid magnetic btn--big"
                type="button"
                onClick={() => setView('map')}
              >
                <span className="btn__flare" />▶ Start the campaign
              </button>
              {progress.highestUnlocked > 1 ? (
                <button
                  className="btn btn--brass magnetic btn--big"
                  type="button"
                  onClick={() => startLevel(progress.highestUnlocked)}
                >
                  <span className="btn__flare" />Resume level {progress.highestUnlocked}
                </button>
              ) : null}
            </div>

            {stats.cleared > 0 ? (
              <p className="tw-intro__progress">
                {stats.cleared} / 10 levels cleared · {stats.stars} / {stats.maxStars} stars ·{' '}
                {progress.totals.points} career points
              </p>
            ) : null}

            <p className="game__hint">
              +BASE POINTS PER CORRECT · STREAK BONUS · CLUES COST 20 PTS · 1★ UNLOCKS THE NEXT LEVEL
            </p>
          </div>
        ) : null}

        {view === 'map' ? (
          <div className="game__map">
            <p className="eyebrow">✦ Campaign map · 10 levels</p>
            <h2 className="section__title">Choose your <span className="grad grad--hyper">descent.</span></h2>
            <p className="section__lede">
              Every level holds ten frames — Earth, Mars and the Moon. Score at least one star
              to unlock the next level.
            </p>

            <div className="tw-levels">
              {campaign.levels.map(item => {
                const unlocked = isUnlocked(item.level_number);
                const stars = starsFor(item.level_number);
                const cleared = progress.levels[item.level_number]?.cleared;
                const isCurrent = item.level_number === progress.highestUnlocked;

                return (
                  <button
                    key={item.level_number}
                    type="button"
                    className={`tw-level${unlocked ? '' : ' is-locked'}${isCurrent ? ' is-current' : ''}${cleared ? ' is-cleared' : ''}`}
                    disabled={!unlocked}
                    onClick={() => startLevel(item.level_number)}
                    aria-label={`Level ${item.level_number}, ${item.difficulty_label}${unlocked ? '' : ', locked'}`}
                  >
                    <span className="tw-level__num">{String(item.level_number).padStart(2, '0')}</span>
                    <span className="tw-level__label">{item.difficulty_label}</span>
                    <Stars count={stars} />
                    <span className="tw-level__mix" aria-hidden="true">
                      {item.mix.earth_analog}◉ · {item.mix.mars}✦ · {item.mix.moon}◐
                    </span>
                    <span className="tw-level__meter" aria-hidden="true">
                      {Array.from({ length: 10 }, (_, i) => (
                        <i key={i} className={i < item.difficulty_meter ? 'is-on' : ''} />
                      ))}
                    </span>
                    {!unlocked ? <span className="tw-level__lock" aria-hidden="true">🔒</span> : null}
                  </button>
                );
              })}
            </div>

            <div className="tw-map__actions">
              <button
                className="btn btn--solid magnetic"
                type="button"
                onClick={() => startLevel(progress.highestUnlocked)}
              >
                <span className="btn__flare" />▶ Continue level {progress.highestUnlocked}
              </button>
              <button className="btn btn--ghost magnetic" type="button" onClick={() => setView('intro')}>
                <span className="btn__flare" />← Briefing
              </button>
            </div>

            <p className="game__hint">
              {stats.cleared} / 10 CLEARED · {stats.stars} STARS · {progress.totals.points} CAREER POINTS
            </p>
            <button
              className="tw-reset"
              type="button"
              onClick={() => {
                if (window.confirm('Reset campaign progress on this device?')) {
                  reset();
                  setView('intro');
                }
              }}
            >
              Reset progress
            </button>
          </div>
        ) : null}

        {view === 'run' && run && level && question ? (
          <div className="game__play">
            <div className="game__hud">
              <span className="game__round">
                L{String(level.level_number).padStart(2, '0')} · {run.index + 1} / {QUESTIONS_PER_LEVEL}
              </span>
              <span className="game__meter">
                <i style={{ width: `${((run.index + (run.result ? 1 : 0)) / QUESTIONS_PER_LEVEL) * 100}%` }} />
              </span>
              <span className="game__score">Score {run.score}</span>
            </div>

            <div className="game__stage">
              <img
                className={run.result ? 'is-revealed' : ''}
                src={imageUrl}
                alt="A mystery landscape to identify"
                draggable="false"
              />
              <span className="game__scan" aria-hidden="true" />
              {run.imageState === 'loading' ? <span className="tw-frame-state">ACQUIRING FRAME…</span> : null}
              {run.imageState === 'error' ? <span className="tw-frame-state is-error">FRAME UNAVAILABLE</span> : null}
              {!run.result ? <span className="tw-bw-tag">MONOCHROME · TRUE COLOUR AFTER GUESS</span> : null}
            </div>

            <div className="tw-run__meta">
              <span>{level.difficulty_label} sector</span>
              <span>{question.frame_code}</span>
              <span>Streak ×{(1 + Math.min(5, run.streak) * 0.2).toFixed(1)}</span>
            </div>

            <div className="tw-clues">
              {CLUE_LABELS.map((clue, index) => {
                const open = run.cluesRevealed > index;
                const isNext = run.cluesRevealed === index;
                const cost = index === 0 ? 'free' : '−20 pts';

                return (
                  <div className={`tw-clue${open ? ' is-open' : ''}`} key={clue.key}>
                    <span className="tw-clue__label">
                      {clue.label}
                      {open ? null : isNext ? <em>{cost}</em> : null}
                    </span>
                    {open ? (
                      <p className="tw-clue__text">{question.clues?.[clue.key]}</p>
                    ) : (
                      <button
                        type="button"
                        className="tw-clue__btn"
                        disabled={!isNext || Boolean(run.result)}
                        onClick={unlockClue}
                      >
                        {isNext ? `Reveal clue 0${index + 1} · ${cost}` : `Clue 0${index + 1} sealed`}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="game__question">Which world is this?</p>

            <div className="game__choices">
              {[
                { value: 'earth_analog', label: '◉ Earth' },
                { value: 'mars', label: '✦ Mars' },
                { value: 'moon', label: '◐ Moon' }
              ].map(choice => {
                let state = '';
                if (run.result) {
                  if (choice.value === run.result.correct_target_type) state = 'is-correct';
                  else if (choice.value === run.guess) state = 'is-wrong';
                }
                return (
                  <button
                    key={choice.value}
                    type="button"
                    className={state}
                    disabled={Boolean(run.result) || run.submitting}
                    onClick={() => makeGuess(choice.value)}
                  >
                    {choice.label}
                  </button>
                );
              })}
            </div>

            {run.error ? <p className="tw-game-error">⚠ {run.error}</p> : null}

            {run.result ? (
              <div className="tw-reveal" aria-live="polite">
                <p className="tw-reveal__verdict">
                  {run.result.is_correct ? '✦ Correct' : '✖ Not quite'} —{' '}
                  <b>{TARGET_LABELS[run.result.correct_target_type]}</b>
                  {run.result.is_correct ? <span>+{run.result.points_awarded}</span> : <span>+0</span>}
                </p>
                <p className="tw-reveal__name">
                  {run.result.revealed_details?.target_name}
                  <span>{run.result.revealed_details?.location_context}</span>
                </p>
                <p className="game__fact">{run.result.revealed_details?.scientific_rationale}</p>
                <p className="tw-reveal__credit">
                  {run.result.revealed_details?.image_credit} · {run.result.revealed_details?.image_license}
                </p>
              </div>
            ) : null}

            <div className="tw-run__actions">
              <button className="btn btn--ghost magnetic" type="button" onClick={() => setView('map')}>
                <span className="btn__flare" />Abort
              </button>
              {run.result ? (
                <button className="btn btn--solid game__next magnetic" type="button" onClick={nextQuestion}>
                  <span className="btn__flare" />
                  {run.index === QUESTIONS_PER_LEVEL - 1 ? 'See level result →' : 'Next frame →'}
                </button>
              ) : null}
            </div>
          </div>
        ) : null}

        {view === 'result' && summary && level ? (
          <div className="game__end">
            <p className="eyebrow">✦ Level {level.level_number} complete</p>
            <Stars count={summary.stars} big />
            <h2 className="section__title">
              {summary.stars === 3 ? 'Flawless sweep.' : summary.stars === 2 ? 'Good signal.' : summary.stars === 1 ? 'Level cleared.' : 'Signal lost.'}
            </h2>
            <p className="game__final-score">{summary.score} pts</p>
            <p className="section__lede">
              {summary.correct} / {QUESTIONS_PER_LEVEL} correct · {Math.round(summary.ratio * 100)}% of the
              clean score · {summary.stars === 0 ? 'no star earned, try again' : 'next level unlocked'}
            </p>

            <div className="tw-result__actions">
              {summary.stars >= 1 && level.level_number < 10 ? (
                <button
                  className="btn btn--solid magnetic"
                  type="button"
                  onClick={() => startLevel(level.level_number + 1)}
                >
                  <span className="btn__flare" />Next level →
                </button>
              ) : null}
              <button
                className="btn btn--brass magnetic"
                type="button"
                onClick={() => startLevel(level.level_number)}
              >
                <span className="btn__flare" />↻ Replay level {level.level_number}
              </button>
              <button className="btn btn--ghost magnetic" type="button" onClick={() => setView('map')}>
                <span className="btn__flare" />Mission map
              </button>
            </div>

            <p className="game__hint">
              {stats.cleared} / 10 CLEARED · {stats.stars} STARS · BEST {progress.levels[level.level_number]?.bestScore || 0} PTS
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
