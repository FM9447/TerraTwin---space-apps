import { useCallback, useEffect, useState } from 'react';

const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '');

async function getJSON(path) {
  const res = await fetch(`${API_BASE}${path}`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

export function useGameApi() {
  const [campaign, setCampaign] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | offline
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const data = await getJSON('/api/game/campaign');
      if (!Array.isArray(data.levels) || data.levels.length === 0) {
        throw new Error('The campaign API returned no levels');
      }
      setCampaign(data);
      setStatus('ready');
    } catch (err) {
      setError(err.message);
      setStatus('offline');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const submitGuess = useCallback(async ({ levelNumber, guess, cluesUsed, streak }) => {
    const res = await fetch(`${API_BASE}/api/game/guess`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        level_number: levelNumber,
        user_guess: guess,
        clues_used: cluesUsed,
        streak
      })
    });

    if (!res.ok) {
      const payload = await res.json().catch(() => ({}));
      throw new Error(payload.message || `Guess failed (${res.status})`);
    }

    return res.json();
  }, []);

  return { campaign, status, error, reload: load, submitGuess };
}

export { API_BASE };
