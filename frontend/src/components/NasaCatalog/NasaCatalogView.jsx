import React from 'react';
import { Database, CheckCircle2, ExternalLink, ShieldCheck, FileText, Layers, Orbit } from 'lucide-react';
import { NASA_DATASET_SOURCES, NASA_PRD_MISSION_PROFILES } from '../../data/nasaDataCatalog';

export default function NasaCatalogView() {
  const datasetEntries = Object.entries(NASA_DATASET_SOURCES);

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-56px)] w-full overflow-y-auto bg-[#04070D] p-4 lg:p-8 gap-8">
      {/* Header */}
      <div className="pb-4 border-b border-[#1E293B]">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg font-mono font-bold text-white uppercase tracking-wider">
            100% NASA Scientific Dataset Architecture & PRD Alignment
          </h2>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
            VERIFIED NASA SOURCES
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
          In strict compliance with the project guidelines, every parameter, metric, and satellite observation in TerraTwin is derived exclusively from NASA Distributed Active Archive Centers (DAACs), NASA PDS Geosciences, and NASA Planetary Missions.
        </p>
      </div>

      {/* PRD Requirements Alignment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#0B101B] border border-cyan-500/30 p-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
            <Orbit className="w-4 h-4" />
            <span>4 PRD Mission Profiles</span>
          </div>
          <p className="text-xs text-slate-300">
            Implements independent weighting for Moon Permanent Base, Moon Robotic Landing, Mars Surface Exploration, and Mars Scientific Habitability.
          </p>
        </div>

        <div className="bg-[#0B101B] border border-emerald-500/30 p-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
            <Layers className="w-4 h-4" />
            <span>5 Core Scientific Dimensions</span>
          </div>
          <p className="text-xs text-slate-300">
            Terrain & Topography (NASADEM/LOLA), Geology & Materials (ASTER/CRISM), Thermal Extremes (MODIS/Diviner), Aridity/Ice (GPM IMERG), and Solar Illumination.
          </p>
        </div>

        <div className="bg-[#0B101B] border border-amber-500/30 p-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Trio of Independent Metrics</span>
          </div>
          <p className="text-xs text-slate-300">
            Never collapses results into a single score: reports Scientific Similarity (S_overall), Usable Data Coverage (%), and Data Confidence (%) separately.
          </p>
        </div>
      </div>

      {/* 100% NASA Master Datasets Table */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
            Verified NASA Scientific Dataset Catalog (10 Sources)
          </h3>
          <span className="text-[10px] font-mono text-slate-400">Strictly 100% NASA Verified</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {datasetEntries.map(([key, ds]) => (
            <div
              key={key}
              className="bg-[#0B101B] border border-slate-800 hover:border-slate-700 p-4 rounded-xl flex flex-col md:flex-row justify-between gap-4 transition-all"
            >
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {ds.id}
                  </span>
                  <h4 className="text-sm font-bold text-white">{ds.name}</h4>
                </div>

                <div className="text-xs text-slate-300 flex items-center gap-4 flex-wrap mt-1">
                  <span><strong>Provider:</strong> {ds.provider}</span>
                  <span><strong>Instrument:</strong> {ds.instrument}</span>
                  <span><strong>Resolution:</strong> {ds.spatial_resolution}</span>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap mt-2">
                  <span className="text-[10px] font-mono text-slate-400">Extracted Attributes:</span>
                  {ds.parameters.map((param, pIdx) => (
                    <span key={pIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#070A10] text-slate-300 border border-slate-800">
                      {param}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex md:flex-col justify-end items-end gap-2 min-w-[140px]">
                <a
                  href={ds.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 hover:bg-cyan-950 border border-cyan-800/80 px-3 py-1.5 rounded-lg transition-all"
                >
                  <span>NASA Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[9px] font-mono text-slate-400 truncate max-w-[140px] text-right">
                  DOI: {ds.doi}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
