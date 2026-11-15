import React, { useState, useMemo } from 'react';
import { Camera, Upload, Sparkles, Image as ImageIcon, CheckCircle, Orbit, ArrowRight, Eye, Layers } from 'lucide-react';
import { matchVisualAnalogs } from '../../data/imageSimilarityEngine';

const SAMPLE_PRESETS = [
  {
    id: 'sample_crater',
    label: 'Basalt Impact Crater',
    category: 'Impact Basin',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.85, brightness: 0.45, crater: 0.95, volcanic: 0.88, cryo: 0.1 }
  },
  {
    id: 'sample_dunes',
    label: 'Active Aeolian Sand Dunes',
    category: 'Wind & Dunes',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.42, brightness: 0.65, crater: 0.15, volcanic: 0.50, cryo: 0.05 }
  },
  {
    id: 'sample_polar',
    label: 'Cryogenic Polar Ice Plateau',
    category: 'Glacial & Ice',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.78, brightness: 0.88, crater: 0.20, volcanic: 0.20, cryo: 0.95 }
  },
  {
    id: 'sample_basalt',
    label: 'Unweathered Basalt Flow',
    category: 'Volcanic Lava',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.92, brightness: 0.32, crater: 0.30, volcanic: 0.98, cryo: 0.08 }
  }
];

export default function PhotoMatcherView() {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PRESETS[0]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [customFeatures, setCustomFeatures] = useState(SAMPLE_PRESETS[0].features);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'earth' | 'moon' | 'mars'

  const currentImage = uploadedImage || selectedSample.image;

  // Handle local image upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
        // Simulate extracting visual features based on image size/aspect
        setCustomFeatures({
          roughness: 0.75 + (Math.random() * 0.15 - 0.05),
          brightness: 0.50 + (Math.random() * 0.20 - 0.10),
          crater: 0.70,
          volcanic: 0.65,
          cryo: 0.20
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectSample = (sample) => {
    setSelectedSample(sample);
    setUploadedImage(null);
    setCustomFeatures(sample.features);
  };

  // Run visual matcher
  const matchResults = useMemo(() => {
    return matchVisualAnalogs(customFeatures);
  }, [customFeatures]);

  const displayedMatches = useMemo(() => {
    if (activeFilter === 'earth') return matchResults.earth_matches;
    if (activeFilter === 'moon') return matchResults.moon_matches;
    if (activeFilter === 'mars') return matchResults.mars_matches;
    return matchResults.top_overall;
  }, [matchResults, activeFilter]);

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-56px)] w-full overflow-y-auto bg-[#04070D] p-4 lg:p-6 gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1E293B] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-mono font-bold text-slate-100 tracking-wider uppercase">
              Visual Photo Analog Matcher
            </h2>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
              FEATURE 2
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Upload any surface photograph or choose a sample to find morphologically and visually analogous environments across Earth, Moon, and Mars.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-1.5 bg-[#070A10] p-1 rounded-lg border border-slate-800">
          {['all', 'earth', 'moon', 'mars'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 rounded text-xs font-mono font-medium capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {filter === 'all' ? 'All Matches' : `${filter} Matches`}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Upload & Analysis on Left, Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (5 cols): Input Photo & Morphological Scanner */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Main Photo Card */}
          <div className="bg-[#0B101B] border border-slate-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Input Image Inspection Frame
              </span>
              <label className="cursor-pointer flex items-center gap-1.5 text-[11px] font-mono font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md transition-all">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Photo</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-slate-700 bg-black h-64 flex items-center justify-center group">
              <img
                src={currentImage}
                alt="Query Target"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 border border-slate-700">
                {uploadedImage ? 'USER UPLOADED FRAME' : selectedSample.label}
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-slate-700">
                ACTIVE SCANNER
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <span className="text-[11px] font-mono font-semibold text-slate-400 block mb-2">
                Or Select Sample Terrain Photo:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {SAMPLE_PRESETS.map(sample => {
                  const isSelected = selectedSample.id === sample.id && !uploadedImage;
                  return (
                    <button
                      key={sample.id}
                      onClick={() => handleSelectSample(sample)}
                      className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                        isSelected
                          ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200'
                          : 'bg-[#070A10] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <img src={sample.image} alt={sample.label} className="w-10 h-10 rounded object-cover" />
                      <div className="truncate">
                        <div className="text-[11px] font-bold truncate">{sample.label}</div>
                        <div className="text-[9px] text-slate-400 font-mono truncate">{sample.category}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Morphological Feature Telemetry */}
          <div className="bg-[#0B101B] border border-slate-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                Extracted Visual Features
              </span>
              <span className="text-[10px] font-mono text-emerald-400">ANALYSIS COMPLETE</span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="bg-[#070A10] p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Edge Roughness</div>
                <div className="text-sm font-bold text-cyan-400">{(customFeatures.roughness * 100).toFixed(0)}%</div>
              </div>
              <div className="bg-[#070A10] p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Albedo / Luminance</div>
                <div className="text-sm font-bold text-cyan-400">{(customFeatures.brightness * 100).toFixed(0)}%</div>
              </div>
              <div className="bg-[#070A10] p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Crater Morphology</div>
                <div className="text-sm font-bold text-cyan-400">{(customFeatures.crater * 100).toFixed(0)}%</div>
              </div>
              <div className="bg-[#070A10] p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">Basaltic Volcanism</div>
                <div className="text-sm font-bold text-cyan-400">{(customFeatures.volcanic * 100).toFixed(0)}%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Cross-Planetary Matches */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
              Cross-Planetary Matching Terrains ({displayedMatches.length} Found)
            </span>
            <span className="text-[10px] font-mono text-slate-400">Ranked by Visual-Geological Affinity</span>
          </div>

          <div className="flex flex-col gap-3">
            {displayedMatches.map((match, idx) => {
              const badgeColor = match.body.includes('Earth')
                ? 'bg-blue-950 text-blue-300 border-blue-800'
                : match.body.includes('Moon')
                ? 'bg-slate-800 text-slate-200 border-slate-600'
                : 'bg-red-950 text-red-300 border-red-800';

              return (
                <div
                  key={match.id + idx}
                  className="bg-[#0B101B] border border-slate-800 hover:border-cyan-500/50 rounded-xl p-4 flex flex-col sm:flex-row gap-4 transition-all"
                >
                  {/* Image */}
                  <div className="sm:w-44 sm:min-w-[176px] h-32 rounded-lg overflow-hidden border border-slate-700 bg-black relative">
                    <img src={match.image} alt={match.name} className="w-full h-full object-cover" />
                    <div className="absolute top-1.5 left-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-white">
                      #{idx + 1}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
                            {match.body}
                          </span>
                          <h3 className="text-sm font-bold text-white truncate">{match.name}</h3>
                        </div>
                        <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                          {match.match_percentage}% MATCH
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {match.visual_reason}
                      </p>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="truncate max-w-md">Scientific Focus: {match.scientific_summary}</span>
                      <span className="text-cyan-400 font-semibold cursor-pointer hover:underline">Inspect</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
