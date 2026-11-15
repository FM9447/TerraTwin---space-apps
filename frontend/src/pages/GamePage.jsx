import { useCallback, useEffect, useRef, useState } from "react";
import ReconImage from "../components/game/ReconImage.jsx";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import CosmicGameView from "../workstation/components/CosmicGame/CosmicGameView.jsx";
import { CHOICES, ROUNDS, verdict } from "../data/game.js";
import { useReducedMotion } from "../hooks/useMediaQuery.js";
import { cx } from "../lib/cx.js";
import { confettiBurst } from "../lib/fx.js";
import { pad2 } from "../lib/format.js";
import s from "./GamePage.module.css";
import page from "./Page.module.css";

const TOTAL = ROUNDS.length;
const BEST_KEY = "tw:best";
const WORLD = { earth: "Earth", mars: "Mars", moon: "Moon" };

function readBest() {
  try {
    const stored = Number(window.localStorage.getItem(BEST_KEY));
    if (!Number.isFinite(stored)) return 0;
    return Math.min(Math.max(Math.round(stored), 0), TOTAL);
  } catch {
    return 0;
  }
}

export default function GamePage() {
  const [mode, setMode] = useState("signal");
  const [phase, setPhase] = useState("intro");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [picked, setPicked] = useState(null);
  const [picks, setPicks] = useState([]);
  const [fact, setFact] = useState("");
  const [best, setBest] = useState(readBest);
  const [newBest, setNewBest] = useState(false);
  const reduced = useReducedMotion();
  const bodyRef = useRef(null);
  const resultsRef = useRef(null);

  const round = ROUNDS[index];
  const [verdictTitle, verdictLine] = verdict(score, TOTAL);

  // The board changes size between phases, so each one starts at its own top
  // rather than wherever the previous one happened to leave the page.
  useEffect(() => {
    if (phase === "intro" || !bodyRef.current) return;
    bodyRef.current.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, [phase, reduced]);

  // The replay control unmounts with the board, so focus would fall to the
  // body. The verdict heading takes it instead and announces the result.
  useEffect(() => {
    if (phase !== "end") return;
    resultsRef.current?.focus({ preventScroll: true });
  }, [phase]);

  const start = useCallback(() => {
    // Preload every frame so the reveal never waits on the network.
    ROUNDS.forEach((item) => {
      const image = new Image();
      image.src = item.src;
    });
    setIndex(0);
    setScore(0);
    setAnswered(false);
    setPicked(null);
    setPicks([]);
    setFact("");
    setNewBest(false);
    setPhase("play");
  }, []);

  const onChoice = useCallback(
    (pick) => {
      if (answered) return;
      const correct = pick === round.answer;
      setAnswered(true);
      setPicked(pick);
      setPicks((current) => {
        const next = current.slice();
        next[index] = pick;
        return next;
      });
      if (correct) setScore((value) => value + 1);
      setFact((correct ? "✦ Correct — " : "✖ Not quite — ") + round.fact);
    },
    [answered, index, round]
  );

  const finish = useCallback(() => {
    setPhase("end");
    if (score > best) {
      setBest(score);
      setNewBest(true);
      try {
        window.localStorage.setItem(BEST_KEY, String(score));
      } catch {
        // Private mode and blocked storage simply leave the best unremembered.
      }
    }
    if (score >= TOTAL - 2) confettiBurst(110, reduced);
  }, [score, best, reduced]);

  const onNext = useCallback(() => {
    if (index === TOTAL - 1) {
      finish();
      return;
    }
    setIndex((value) => value + 1);
    setAnswered(false);
    setPicked(null);
    setFact("");
  }, [index, finish]);

  // Digits answer; Enter or Space advances only when the focus is not on a
  // control, so a focused button keeps its own activation.
  useEffect(() => {
    if (phase !== "play") return undefined;

    const onKeyDown = (event) => {
      if (event.defaultPrevented || event.repeat) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;

      if (!answered && (event.key === "1" || event.key === "2" || event.key === "3")) {
        const choice = CHOICES[Number(event.key) - 1];
        if (choice) {
          event.preventDefault();
          onChoice(choice.pick);
        }
        return;
      }

      if (answered && (event.key === "Enter" || event.key === " " || event.key === "Spacebar")) {
        if (target?.closest("button, a, input, select, textarea, [role='button']")) return;
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, answered, onChoice, onNext]);

  return (
    <main id="main" className={page.page}>
      <section className={cx("section", page.head)} aria-labelledby="game-title">
        <div className={s.headInner}>
          <p className="kicker">TRAINING SIMULATION · {TOTAL} FRAMES</p>
          <h1 className="section__title" id="game-title">
            Signal test
          </h1>
          <p className="section__lede">
            Colour and resolution have been stripped from twelve frames. Name the world from
            the terrain alone.
          </p>
          <p className={s.specs}>
            <span>{TOTAL} frames</span>
            <span>480 × 270</span>
            <span>8-bit grey</span>
            <span>One guess each</span>
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setMode("signal")}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "4px",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: mode === "signal" ? "rgba(217, 164, 91, 0.2)" : "rgba(255, 255, 255, 0.04)",
                border: mode === "signal" ? "1px solid var(--signal)" : "1px solid rgba(255, 255, 255, 0.12)",
                color: mode === "signal" ? "#ffd9a0" : "#a8b1c2"
              }}
            >
              Signal Test (12 Frames)
            </button>
            <button
              type="button"
              onClick={() => setMode("100levels")}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "4px",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: mode === "100levels" ? "rgba(106, 168, 255, 0.2)" : "rgba(255, 255, 255, 0.04)",
                border: mode === "100levels" ? "1px solid var(--earth)" : "1px solid rgba(255, 255, 255, 0.12)",
                color: mode === "100levels" ? "#cfe4ff" : "#a8b1c2"
              }}
            >
              NASA 100-Level Deep Space Arena ↗
            </button>
          </div>
        </div>
      </section>

      {mode === "100levels" ? (
        <div style={{ minHeight: "80vh", paddingBottom: "4rem" }}>
          <CosmicGameView />
        </div>
      ) : (
      <section ref={bodyRef} className={s.body}>
        {phase === "intro" ? (
          <Reveal className={s.briefing}>
            <div className={s.briefTop}>
              <p className={s.briefLabel}>Mission briefing</p>
              {best > 0 ? (
                <p className={s.best}>
                  Best {best} / {TOTAL}
                </p>
              ) : null}
            </div>

            <ol className={s.rules} role="list">
              <li className={s.rule}>
                <span className={s.ruleNum}>01</span>
                <p className={s.ruleTitle}>Twelve frames</p>
                <p className={s.ruleText}>One photograph each, no second chances.</p>
              </li>
              <li className={s.rule}>
                <span className={s.ruleNum}>02</span>
                <p className={s.ruleTitle}>Three worlds</p>
                <p className={s.ruleText}>
                  Earth, Mars, the Moon, and Earth keeps pretending.
                </p>
              </li>
              <li className={s.rule}>
                <span className={s.ruleNum}>03</span>
                <p className={s.ruleTitle}>Read the rock</p>
                <p className={s.ruleText}>Shape, tone and texture are all you get.</p>
              </li>
            </ol>

            <div className={s.briefFoot}>
              <p className={s.stamp}>
                480 × 270 · 8-bit grey · {TOTAL} frames
              </p>
              <Button size="big" magnetic onClick={start} id="gameStart">
                ▶ Start the test
              </Button>
            </div>
          </Reveal>
        ) : null}

        {phase === "play" ? (
          <div className={s.play}>
            <div className={s.hud}>
              <span className={s.hudRound}>
                Round {pad2(index + 1)} / {TOTAL}
              </span>
              <div className={s.meter} aria-hidden="true">
                {ROUNDS.map((item, slot) => (
                  <span
                    key={item.src}
                    className={s.seg}
                    data-done={
                      slot < index || (slot === index && answered) ? "true" : undefined
                    }
                    data-current={slot === index ? "true" : undefined}
                  />
                ))}
              </div>
              <span className={s.hudScore}>Score {score}</span>
            </div>

            <ReconImage
              key={index}
              src={round.src}
              alt={answered ? round.altRevealed : round.alt}
              frame={index + 1}
              total={TOTAL}
              className={s.stage}
            />

            <h2 className={s.question} id="round-question">
              Which world is this?
            </h2>
            <div className={s.choices} role="group" aria-labelledby="round-question">
              {CHOICES.map((choice) => {
                const correct = answered && choice.pick === round.answer;
                const wrong = answered && choice.pick === picked && picked !== round.answer;
                return (
                  <button
                    key={choice.pick}
                    type="button"
                    data-pick={choice.pick}
                    disabled={answered}
                    className={cx(correct && s.isCorrect, wrong && s.isWrong)}
                    onClick={() => onChoice(choice.pick)}
                  >
                    {choice.label}
                  </button>
                );
              })}
            </div>

            <p className={s.fact} data-on={answered ? "true" : undefined} aria-live="polite">
              {fact}
            </p>

            {answered ? (
              <Button className={s.next} magnetic onClick={onNext} id="gameNext">
                {index === TOTAL - 1 ? "See results →" : "Next →"}
              </Button>
            ) : null}
          </div>
        ) : null}

        {phase === "end" ? (
          <div className={s.results}>
            <div className={s.resultsHead}>
              <h2 ref={resultsRef} className="section__title" tabIndex={-1}>
                {verdictTitle}
              </h2>
              <p className={s.finalScore} aria-live="polite">
                <span>{score}</span>
                <span className={s.scoreOf}> / {TOTAL}</span>
              </p>
              <p className={s.bestLine}>
                {newBest ? (
                  <>
                    <span className={s.newBest}>New best</span>{" "}
                    <span>
                      {best} / {TOTAL}
                    </span>
                  </>
                ) : (
                  <span>
                    Best {best} / {TOTAL}
                  </span>
                )}
              </p>
              <p className={s.verdictLine}>{verdictLine}</p>
              <Button magnetic onClick={start} id="gameReplay">
                ↻ Play again
              </Button>
            </div>

            <ol className={s.review} role="list">
              {ROUNDS.map((item, slot) => {
                const ok = picks[slot] === item.answer;
                return (
                  <li key={item.src}>
                    <figure className={s.cell} data-ok={ok ? "true" : "false"}>
                      <div className={s.cellMedia}>
                        <ReconImage
                          src={item.src}
                          alt={item.altRevealed}
                          frame={slot + 1}
                          compact
                        />
                        <span className={s.cellMark}>
                          <span aria-hidden="true">{ok ? "✓" : "✗"}</span>
                          <span className="visually-hidden">{ok ? "Correct" : "Missed"}</span>
                        </span>
                      </div>
                      <figcaption className={s.cellCap}>
                        <span className={s.cellNum}>Frame {pad2(slot + 1)}</span>
                        <span className={s.cellWorld}>{WORLD[item.answer]}</span>
                        <span className={s.cellSite}>{item.site}</span>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ol>

            <p className={s.reviewNote}>Every frame, in the order you saw them.</p>
          </div>
        ) : null}
      </section>
      )}
    </main>
  );
}
