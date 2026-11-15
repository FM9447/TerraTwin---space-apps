import React, { useState, useMemo } from 'react';
import { Sliders, Search, ArrowRight, ShieldCheck, Database, Info, ExternalLink, Globe, Layers, AlertTriangle } from 'lucide-react';
import { NASA_PLANETARY_TARGETS } from '../../data/nasaDataCatalog';
import { calculateAnalogDiscoveries } from '../../data/similarityEngine';

const CRITERIA_SLIDERS = [
  { id: 'roughness', label: 'Terrain Roughness (TRI)', desc: 'From NASADEM / LOLA 30m metric', unit: 'Index (0-100)' },
  { id: 'relief', label: 'Elevation Relief', desc: '10km spatial window elevation delta', unit: 'Index (0-100)' },
  { id: 'slope', label: 'Slope Gradient', desc: '90th percentile gradient steepness', unit: 'Degrees proxy' },
  { id: 'aridity', label: 'Hyper-Aridity', desc: 'GPM IMERG inverse precipitation rate', unit: 'mm/yr proxy' },
  { id: 'thermal', label: 'Thermal Extremes (ΔT)', desc: 'MODIS MOD11A2 day/night surface swing', unit: 'Kelvin proxy' },
  { id: 'rockiness', label: 'Rock & Boulder Abundance', desc: 'ASTER GED thermal inertia & OLI bands', unit: 'Fraction' },
  { id: 'volcanic', label: 'Basaltic Volcanism', desc: 'Tholeiitic basalt composition & flow morphology', unit: 'Basalt %' },
  { id: 'access', label: 'Operational Remoteness', desc: 'NASA SEDAC GPWv4 human isolation score', unit: 'Remoteness' }
];

export default function ParametricDiscoveryView({ activeProfile, setActiveProfile, missionProfiles = [] }) {
  const [selectedTargetId, setSelectedTargetId] = useState('moon_south_pole');
  const selectedTarget = NASA_PLANETARY_TARGETS.find(t => t.id === selectedTargetId) || NASA_PLANETARY_TARGETS[0];

  // User input criteria sliders
  const [criteria, setCriteria] = useState({
    roughness: 82,
    relief: 88,
    slope: 78,
    aridity: 100,
    thermal: 98,
    rockiness: 76,
    volcanic: 45,
    access: 95
  });

  // When user clicks a preset target, sync sliders to target's signature
  const handleSelectTarget = (target) => {
    setSelectedTargetId(target.id);
    if (target.criteria_signature) {
      setCriteria({ ...target.criteria_signature });
    }
  };

  const handleSliderChange = (id, value) => {
    setCriteria(prev => ({
      ...prev,
      [id]: Number(value)
    }));
  };

  // Run scientific similarity calculation
  const discoveryResults = useMemo(() => {
    return calculateAnalogDiscoveries(criteria, activeProfile);
  }, [criteria, activeProfile]);

  const [activeAnalogId, setActiveAnalogId] = useState(null);
  const activeAnalog = discoveryResults.ranked_analogs.find(a => a.id === activeAnalogId) || discoveryResults.ranked_analogs[0];

  return (
    <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-56px)] w-full overflow-hidden bg-[#04070D]">
      {/* Left Sidebar: Controls & Input Sliders (360px) */}
      <aside className="w-full lg:w-[380px] lg:min-w-[380px] bg-[#070A10] border-r border-[#1E293B] p-4 overflow-y-auto flex flex-col gap-5 z-10">
        <div>
          <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <h2 className="text-xs font-mono font-bold tracking-wider text-slate-100 uppercase">Input Discovery Parameters</h2>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
              PRD SEC 8.3
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            Adjust parametric criteria sliders or choose a reference target to discover scientifically matching Earth analog sites.
          </p>
        </div>

        {/* Preset Target Cards */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
            Quick Preset: Planetary Target
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {NASA_PLANETARY_TARGETS.map(t => {
              const isSelected = t.id === selectedTargetId;
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelectTarget(t)}
                  className={`text-left p-2 rounded-lg text-xs font-mono transition-all border ${
                    isSelected
                      ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200 shadow-sm shadow-cyan-500/20'
                      : 'bg-[#0E1422] border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[11px] truncate">{t.name.split(' (')[0]}</span>
                    <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${t.planet === 'Moon' ? 'bg-slate-700 text-slate-200' : 'bg-red-950 text-red-300'}`}>
                      {t.planet}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5">{t.elevation}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Criteria Sliders */}
        <div className="flex flex-col gap-3 pt-2 border-t border-[#1E293B]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Parametric Criteria Sliders
            </span>
            <span className="text-[10px] font-mono text-slate-400">NASA Multi-Criteria</span>
          </div>

          <div className="flex flex-col gap-3">
            {CRITERIA_SLIDERS.map(slider => {
              const val = criteria[slider.id] || 50;
              return (
                <div key={slider.id} className="bg-[#0B101B] p-2.5 rounded-lg border border-slate-800/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-200">{slider.label}</span>
                    <span className="font-mono text-xs font-bold text-cyan-400">{val}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={val}
                    onChange={(e) => handleSliderChange(slider.id, e.target.value)}
                    className="w-full accent-cyan-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[10px] text-slate-400">{slider.desc}</span>
                    <span className="text-[9px] font-mono text-slate-400">{slider.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content: Comparative Imagery & Discovery Results */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto p-4 lg:p-6 gap-6">
        {/* Top Header Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#1E293B]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                ACTIVE TARGET: {selectedTarget.name}
              </span>
              <span className="text-xs font-mono text-slate-400">
                ({selectedTarget.planet} • {selectedTarget.elevation})
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">{selectedTarget.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] font-mono text-slate-400">Screened Candidates</div>
              <div className="text-base font-mono font-bold text-slate-100">{discoveryResults.total_candidates_screened} Sites</div>
            </div>
          </div>
        </div>

        {/* Feature Focus: Side-by-Side High-Res Satellite Imagery */}
        <div className="bg-[#0B101B] border border-cyan-500/30 rounded-xl p-4 shadow-xl shadow-cyan-950/10">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold text-slate-100 tracking-wider uppercase">
                Comparative High-Resolution Planetary Imagery
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
              MATCH: {activeAnalog.calculated_similarity}% SCIENTIFIC SIMILARITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Earth Analog Satellite Photo */}
            <div className="relative rounded-lg overflow-hidden border border-slate-700/80 bg-black group">
              <img
                src={activeAnalog.image}
                alt={activeAnalog.name}
                className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-2 left-2 bg-blue-950/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-bold text-blue-300 border border-blue-700">
                🌍 EARTH ANALOG: {activeAnalog.country}
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h4 className="text-sm font-bold text-white drop-shadow-md">{activeAnalog.name}</h4>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mt-1">
                  <span>Elev: {activeAnalog.elevation}</span>
                  <span>{activeAnalog.coordinates.lat}°, {activeAnalog.coordinates.lon}°</span>
                </div>
              </div>
            </div>

            {/* Right: Moon/Mars Planetary Target Imagery */}
            <div className="relative rounded-lg overflow-hidden border border-slate-700/80 bg-black group">
              <img
                src={selectedTarget.image}
                alt={selectedTarget.name}
                className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-2 left-2 bg-purple-950/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-bold text-purple-300 border border-purple-700">
                {selectedTarget.planet === 'Moon' ? '🌕 LUNAR TARGET' : '🔴 MARTIAN TARGET'}: {selectedTarget.name.split(' (')[0]}
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h4 className="text-sm font-bold text-white drop-shadow-md">{selectedTarget.name}</h4>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mt-1">
                  <span>Sensor: {selectedTarget.nasa_primary_source}</span>
                  <span>{selectedTarget.coordinates.lat}°, {selectedTarget.coordinates.lon}°</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific Rationale & Limits (PRD Section 16) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-800">
            <div className="bg-[#070A10] p-3 rounded-lg border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Why This Is Analogous</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {activeAnalog.scientific_breakdown.why_analog}
              </p>
            </div>

            <div className="bg-[#070A10] p-3 rounded-lg border border-amber-900/40">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 mb-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Where Analogy Breaks Down</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {activeAnalog.scientific_breakdown.breakdown_limits}
              </p>
            </div>

            <div className="bg-[#070A10] p-3 rounded-lg border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 mb-1">
                <Database className="w-3.5 h-3.5" />
                <span>NASA Datasets Applied</span>
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {activeAnalog.nasa_datasets_used.map((ds, idx) => (
                  <span key={idx} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {ds}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-2 font-mono">
                Field Utility: {activeAnalog.scientific_breakdown.field_test_utility}
              </p>
            </div>
          </div>
        </div>

        {/* Ranked Earth Analogs Table */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-bold text-slate-200 tracking-wider uppercase">
              Ranked Earth Analog Discoveries (PRD Metric Trio)
            </h3>
            <span className="text-[10px] font-mono text-slate-400">Click any card to load side-by-side view</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {discoveryResults.ranked_analogs.map((analog, idx) => {
              const isSelected = analog.id === activeAnalog.id;
              return (
                <div
                  key={analog.id}
                  onClick={() => setActiveAnalogId(analog.id)}
                  className={`cursor-pointer rounded-xl p-3 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0E1422] border-cyan-500 shadow-md shadow-cyan-500/10'
                      : 'bg-[#070A10] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="relative rounded-lg overflow-hidden h-28 mb-2">
                      <img src={analog.image} alt={analog.name} className="w-full h-full object-cover" />
                      <div className="absolute top-1.5 left-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-white">
                        #{idx + 1}
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 bg-cyan-950/90 text-cyan-300 font-mono font-bold px-2 py-0.5 rounded text-xs border border-cyan-800">
                        {analog.calculated_similarity}%
                      </div>
                    </div>

                    <h4 className="text-xs font-bold text-slate-100 truncate">{analog.name}</h4>
                    <p className="text-[10px] text-slate-400 truncate">{analog.country} • {analog.elevation}</p>
                    <p className="text-[10px] text-cyan-400 font-mono mt-1 truncate">{analog.morphology}</p>
                  </div>

                  {/* Independent 3 Metrics (PRD 8.4) */}
                  <div className="grid grid-cols-3 gap-1 pt-2 mt-2 border-t border-slate-800 text-center font-mono">
                    <div className="bg-slate-900/60 p-1 rounded">
                      <div className="text-[9px] text-slate-400">Similarity</div>
                      <div className="text-xs font-bold text-cyan-400">{analog.calculated_similarity}%</div>
                    </div>
                    <div className="bg-slate-900/60 p-1 rounded">
                      <div className="text-[9px] text-slate-400">Coverage</div>
                      <div className="text-xs font-bold text-emerald-400">{analog.data_coverage}%</div>
                    </div>
                    <div className="bg-slate-900/60 p-1 rounded">
                      <div className="text-[9px] text-slate-400">Confidence</div>
                      <div className="text-xs font-bold text-amber-400">{analog.data_confidence}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
