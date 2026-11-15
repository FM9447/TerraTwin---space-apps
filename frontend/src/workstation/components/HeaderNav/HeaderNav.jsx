import React from 'react';
import { Compass, Camera, Gamepad2, Globe2, Database, Orbit } from 'lucide-react';

export default function HeaderNav({ activeTab, setActiveTab, activeProfile, setActiveProfile, missionProfiles = [] }) {
  const tabs = [
    { id: 'discovery', label: 'Parametric Discovery', icon: Compass },
    { id: 'photo_matcher', label: 'Visual Photo Matcher', icon: Camera },
    { id: 'cosmic_game', label: '100-Level B&W Game', icon: Gamepad2, badge: '100 LVLS' },
    { id: 'explorer', label: '3D Orbit Explorer', icon: Globe2 },
    { id: 'nasa_catalog', label: 'NASA Datasets & PRD', icon: Database }
  ];

  return (
    <header className="h-14 bg-[#070A10]/90 backdrop-blur-md border-b border-[#1E293B] px-4 flex items-center justify-between z-30 sticky top-0">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <Orbit className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-white font-mono text-sm">TERRATWIN</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
              NASA CHALLENGE
            </span>
          </div>
          <p className="text-[10px] text-slate-400 hidden sm:block">Planetary Analog Scientific Intelligence</p>
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex items-center gap-1 sm:gap-2">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                isActive
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{tab.label}</span>
              {tab.badge && (
                <span className="hidden lg:inline text-[9px] font-mono px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Mission Profile Quick Selector */}
      <div className="hidden xl:flex items-center gap-2">
        <span className="text-[11px] font-mono text-slate-400">Profile:</span>
        <select
          value={activeProfile}
          onChange={(e) => setActiveProfile(e.target.value)}
          className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded px-2 py-1 font-mono focus:outline-none focus:border-cyan-500"
        >
          {missionProfiles.map(p => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
