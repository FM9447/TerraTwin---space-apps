import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'terratwin.game.progress.v2';
const TOTAL_LEVELS = 10;

const EMPTY_STATE = {
  highestUnlocked: 1,
  levels: {},
  totals: {
    points: 0,
    correct: 0,
    questions: 0
  }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STATE, levels: {}, totals: { ...EMPTY_STATE.totals } };
    const parsed = JSON.parse(raw);
    return {
      ...EMPTY_STATE,
      ...parsed,
      highestUnlocked: Math.min(
        TOTAL_LEVELS,
        Math.max(1, Number(parsed.highestUnlocked) || 1)
      ),
      levels: parsed.levels || {},
      totals: { ...EMPTY_STATE.totals, ...(parsed.totals || {}) }
    };
  } catch {
    return { ...EMPTY_STATE, levels: {}, totals: { ...EMPTY_STATE.totals } };
  }
}

/**
 * Campaign progress lives entirely in the browser so a returning player can
 * continue exactly where they stopped. Levels unlock at one star or better.
 */
export function useProgress() {
  const [progress, setProgress] = useState(loadState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Private mode or a full quota: the run still works in memory.
    }
  }, [progress]);

  const recordRun = useCallback(({ levelNumber, stars, score, correct, questionCount }) => {
    setProgress(prev => {
      const existing = prev.levels[levelNumber] || {
        stars: 0,
        bestScore: 0,
        cleared: false,
        attempts: 0,
        bestCorrect: 0
      };

      const cleared = existing.cleared || stars >= 1;
      const highestUnlocked = stars >= 1
        ? Math.min(TOTAL_LEVELS, Math.max(prev.highestUnlocked, levelNumber + 1))
        : prev.highestUnlocked;

      return {
        ...prev,
        highestUnlocked,
        levels: {
          ...prev.levels,
          [levelNumber]: {
            stars: Math.max(existing.stars || 0, stars),
            bestScore: Math.max(existing.bestScore || 0, score),
            bestCorrect: Math.max(existing.bestCorrect || 0, correct),
            cleared,
            attempts: (existing.attempts || 0) + 1,
            lastPlayed: Date.now()
          }
        },
        totals: {
          points: prev.totals.points + score,
          correct: prev.totals.correct + correct,
          questions: prev.totals.questions + questionCount
        }
      };
    });
  }, []);

  const reset = useCallback(() => {
    setProgress({ ...EMPTY_STATE, levels: {}, totals: { ...EMPTY_STATE.totals } });
  }, []);

  const isUnlocked = useCallback(
    levelNumber => levelNumber <= progress.highestUnlocked || Boolean(progress.levels[levelNumber]?.cleared),
    [progress]
  );

  const starsFor = useCallback(
    levelNumber => progress.levels[levelNumber]?.stars || 0,
    [progress]
  );

  const stats = useMemo(() => {
    const values = Object.values(progress.levels);
    return {
      cleared: values.filter(level => level.cleared).length,
      stars: values.reduce((sum, level) => sum + (level.stars || 0), 0),
      maxStars: TOTAL_LEVELS * 3
    };
  }, [progress.levels]);

  return { progress, recordRun, reset, isUnlocked, starsFor, stats };
}
