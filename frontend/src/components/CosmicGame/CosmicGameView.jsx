import React, { useState } from 'react';
import { Gamepad2, Trophy, HelpCircle, Eye, ArrowRight, RotateCcw, CheckCircle2, XCircle, Sparkles, AlertCircle, Compass, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GAME_LEVELS_100 } from '../../data/gameLevelsData';

const DIFFICULTY_TIERS = [
  { id: 'all', label: 'All Levels (1-100)' },
  { id: 'novice', label: 'Novice (1–25)', color: 'text-emerald-400 border-emerald-800' },
  { id: 'explorer', label: 'Explorer (26–50)', color: 'text-cyan-400 border-cyan-800' },
  { id: 'specialist', label: 'Specialist (51–75)', color: 'text-amber-400 border-amber-800' },
  { id: 'commander', label: 'Commander (76–100)', color: 'text-rose-400 border-rose-800' }
];

export default function CosmicGameView() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0); // 0-based index for level 1
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [hasGuessed, setHasGuessed] = useState(false);
  const [userGuess, setUserGuess] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showClues, setShowClues] = useState(false);

  // Scoreboard stats
  const [stats, setStats] = useState({
    totalGuesses: 0,
    correctGuesses: 0,
    streak: 0,
    bestStreak: 0,
    score: 0
  });

  const currentLevel = GAME_LEVELS_100[currentLevelIndex] || GAME_LEVELS_100[0];

  const handleMakeGuess = (guessType) => {
    if (hasGuessed) return;

    setUserGuess(guessType);
    const correct = currentLevel.target_type === guessType;
    setIsCorrect(correct);
    setHasGuessed(true);

    if (correct) {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 }
      });
    }

    setStats(prev => {
      const newTotal = prev.totalGuesses + 1;
      const newCorrect = correct ? prev.correctGuesses + 1 : prev.correctGuesses;
      const newStreak = correct ? prev.streak + 1 : 0;
      const newBestStreak = Math.max(prev.bestStreak, newStreak);
      const points = correct ? 100 * (1 + newStreak * 0.2) : 0;

      return {
        totalGuesses: newTotal,
        correctGuesses: newCorrect,
        streak: newStreak,
        bestStreak: newBestStreak,
        score: Math.round(prev.score + points)
      };
    });
  };

  const handleNextLevel = () => {
    setHasGuessed(false);
    setUserGuess(null);
    setIsCorrect(false);
    setShowClues(false);
    setCurrentLevelIndex((prev) => (prev + 1) % GAME_LEVELS_100.length);
  };

  const handleLevelSelect = (lvlNum) => {
    setHasGuessed(false);
    setUserGuess(null);
    setIsCorrect(false);
    setShowClues(false);
    setCurrentLevelIndex(lvlNum - 1);
  };

  const accuracy = stats.totalGuesses > 0 ? Math.round((stats.correctGuesses / stats.totalGuesses) * 100) : 100;

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-56px)] w-full overflow-hidden bg-[#04070D]">
      {/* Top Bar: Title & Stats */}
      <div className="h-14 bg-[#070A10] border-b border-[#1E293B] px-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-amber-400" />
            <h2 className="text-sm font-mono font-bold text-slate-100 uppercase tracking-wider">
              Cosmic Detective: Blind Spectral Arena
            </h2>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono bg-amber-950/80 text-amber-300 border border-amber-800 px-2 py-0.5 rounded">
            100 PROGRESSIVE LEVELS
          </span>
        </div>

        {/* Stats Pill */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Score: <strong className="text-white">{stats.score}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Streak: <strong className="text-cyan-400">{stats.streak}</strong></span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <span>Accuracy: <strong className="text-emerald-400">{accuracy}%</strong></span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Level Selector Drawer (280px) */}
        <aside className="w-full lg:w-72 bg-[#070A10] border-r border-[#1E293B] p-3 flex flex-col gap-3 overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-slate-200 uppercase">Mission Level Selector</span>
            <span className="text-[10px] font-mono text-cyan-400">LVL {currentLevel.level_number} / 100</span>
          </div>

          {/* Difficulty Tier Filters */}
          <div className="flex flex-wrap gap-1">
            {DIFFICULTY_TIERS.map(tier => (
              <button
                key={tier.id}
                onClick={() => setSelectedDifficulty(tier.id)}
                className={`text-[10px] font-mono px-2 py-1 rounded border transition-all ${
                  selectedDifficulty === tier.id
                    ? 'bg-cyan-950 border-cyan-500 text-cyan-200'
                    : 'bg-[#0E1422] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>

          {/* 100 Levels Grid */}
          <div className="grid grid-cols-5 gap-1.5 max-h-72 lg:max-h-none overflow-y-auto pr-1">
            {GAME_LEVELS_100.filter(l => selectedDifficulty === 'all' || l.difficulty_id === selectedDifficulty).map(l => {
              const isActive = l.level_number === currentLevel.level_number;
              return (
                <button
                  key={l.level_number}
                  onClick={() => handleLevelSelect(l.level_number)}
                  className={`h-9 rounded font-mono text-xs font-bold transition-all border flex items-center justify-center ${
                    isActive
                      ? 'bg-amber-500 text-black border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-[#0B101B] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  {l.level_number}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Center Game Arena */}
        <main className="flex-1 flex flex-col p-4 lg:p-6 overflow-y-auto gap-4 items-center justify-between">
          <div className="w-full max-w-4xl flex flex-col gap-4">
            {/* Level Title Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700 font-bold">
                  LEVEL {currentLevel.level_number} OF 100
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  {currentLevel.difficulty.toUpperCase()} TIER
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  {currentLevel.frame_code}
                </span>
              </div>

              <button
                onClick={() => setShowClues(!showClues)}
                className="flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 bg-amber-950/50 border border-amber-800/80 px-2.5 py-1 rounded transition-all"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showClues ? 'Hide Scientific Clues' : 'Reveal NASA Clues'}</span>
              </button>
            </div>

            {/* Black & White Optical Frame Card */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-black shadow-2xl flex items-center justify-center min-h-[320px] max-h-[460px]">
              <img
                src={currentLevel.image_url}
                alt="Blind Satellite Frame"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hasGuessed ? 'grayscale-0' : 'grayscale contrast-125 brightness-95'
                }`}
              />

              {/* Watermark / B&W badge */}
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold border border-slate-700 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${hasGuessed ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
                <span className={hasGuessed ? 'text-emerald-400' : 'text-slate-200'}>
                  {hasGuessed ? 'TRUE-COLOR REVEAL' : 'PANCHROMATIC MONOCHROME (B&W)'}
                </span>
              </div>

              {/* Revealed overlay after guessing */}
              {hasGuessed && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 text-left border-t border-slate-700/60">
                  <div className="flex items-center gap-2 mb-1">
                    {isCorrect ? (
                      <span className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-sm bg-emerald-950/90 px-3 py-1 rounded border border-emerald-700">
                        <CheckCircle2 className="w-4 h-4" /> CORRECT IDENTIFICATION! (+100 PTS)
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-rose-400 font-mono font-bold text-sm bg-rose-950/90 px-3 py-1 rounded border border-rose-700">
                        <XCircle className="w-4 h-4" /> MISIDENTIFIED! (CORRECT: {currentLevel.target_type.toUpperCase().replace('_', ' ')})
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mt-2">{currentLevel.target_name}</h3>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">{currentLevel.location_context}</p>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <strong>NASA Science Note:</strong> {currentLevel.scientific_rationale}
                  </p>
                </div>
              )}
            </div>

            {/* Scientific Clues Dropdown */}
            {showClues && (
              <div className="bg-[#0B101B] border border-amber-800/60 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono animate-fadeIn">
                <div className="bg-[#070A10] p-2.5 rounded border border-slate-800">
                  <span className="text-[10px] text-amber-400 font-bold block mb-0.5">NASA INSTRUMENT</span>
                  <span className="text-slate-200">{currentLevel.clues.instrument}</span>
                </div>
                <div className="bg-[#070A10] p-2.5 rounded border border-slate-800">
                  <span className="text-[10px] text-amber-400 font-bold block mb-0.5">MINERALOGY & COMPOSITION</span>
                  <span className="text-slate-200">{currentLevel.clues.mineralogy}</span>
                </div>
                <div className="bg-[#070A10] p-2.5 rounded border border-slate-800">
                  <span className="text-[10px] text-amber-400 font-bold block mb-0.5">TERRAIN & SLOPE METRICS</span>
                  <span className="text-slate-200">{currentLevel.clues.terrain_metrics}</span>
                </div>
                <div className="bg-[#070A10] p-2.5 rounded border border-slate-800">
                  <span className="text-[10px] text-amber-400 font-bold block mb-0.5">ENVIRONMENT & ATMOSPHERE</span>
                  <span className="text-slate-200">{currentLevel.clues.thermal_environment}</span>
                </div>
              </div>
            )}

            {/* Guess Action Buttons */}
            {!hasGuessed ? (
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-semibold text-slate-400 text-center uppercase tracking-wider">
                  Identify the Surface Body Under Black & White Reconnaissance:
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleMakeGuess('earth_analog')}
                    className="py-3 px-4 rounded-xl bg-blue-950/70 hover:bg-blue-900 border border-blue-700 text-blue-200 font-mono font-bold text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-950/30"
                  >
                    <span>🌍</span>
                    <span>Earth Analog</span>
                  </button>

                  <button
                    onClick={() => handleMakeGuess('moon')}
                    className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-600 text-slate-200 font-mono font-bold text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-slate-900/30"
                  >
                    <span>🌕</span>
                    <span>The Moon</span>
                  </button>

                  <button
                    onClick={() => handleMakeGuess('mars')}
                    className="py-3 px-4 rounded-xl bg-red-950/70 hover:bg-red-900 border border-red-700 text-red-200 font-mono font-bold text-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-red-950/30"
                  >
                    <span>🔴</span>
                    <span>Mars</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleNextLevel}
                  className="py-3 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-bold text-sm transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/25 animate-bounce"
                >
                  <span>Advance to Level {currentLevel.level_number === 100 ? 1 : currentLevel.level_number + 1}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
