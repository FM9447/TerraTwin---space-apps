import React, { useState, useEffect, useCallback } from 'react';
import { API_BASE } from '../content';

function formatCoordinates(coords) {
  if (!coords) return '';
  if (Array.isArray(coords) && coords.length >= 2) {
    const c0 = typeof coords[0] === 'number' ? coords[0].toFixed(2) : coords[0];
    const c1 = typeof coords[1] === 'number' ? coords[1].toFixed(2) : coords[1];
    return ` · [${c0}°, ${c1}°]`;
  }
  if (typeof coords === 'object') {
    const lat = typeof coords.lat === 'number' ? coords.lat.toFixed(2) : (coords.latitude ?? coords.lat);
    const lon = typeof coords.lon === 'number' ? coords.lon.toFixed(2) : (coords.longitude ?? coords.lon);
    if (lat !== undefined && lon !== undefined) {
      return ` · [${lat}°, ${lon}°]`;
    }
  }
  return '';
}

const PROFILES = [
  { id: 'permanent_base', label: 'Permanent Base', target: 'Moon', desc: 'Cryogenic cold survival, solar grazing, slope safety, basalt shielding.' },
  { id: 'robotic_landing', label: 'Robotic Landing', target: 'Mars', desc: 'Low hazard roughness, gentle terrain, hyperarid dust trafficability.' },
  { id: 'surface_exploration', label: 'Surface Traverse', target: 'Mars', desc: 'Varied relief, boulder fields, long-range mobility navigation.' },
  { id: 'scientific_habitability', label: 'Habitability & Astrobio', target: 'Both', desc: 'Hyperarid nitrate soils, extreme UV, endolithic micro-habitats.' }
];

const SLIDERS = [
  { id: 'roughness', group: 'Geography', label: 'Terrain Roughness (TRI)', source: 'NASADEM / LOLA 30m' },
  { id: 'relief', group: 'Geography', label: 'Elevation Relief Range', source: 'NASADEM / MOLA 10km' },
  { id: 'slope', group: 'Geography', label: 'Slope Gradient Steepness', source: 'NASADEM / LOLA GDR' },
  { id: 'aridity', group: 'Environment', label: 'Hyper-Aridity (Inverse Rain)', source: 'NASA GPM IMERG 0.1°' },
  { id: 'thermal', group: 'Environment', label: 'Thermal Extremes (ΔT Swing)', source: 'MODIS MOD11A2 1km' },
  { id: 'volcanic', group: 'Environment', label: 'Basaltic Volcanism Fraction', source: 'ASTER GED AG100m' },
  { id: 'access', group: 'Environment', label: 'Operational Remoteness', source: 'NASA SEDAC GPWv4' }
];

export default function ParametricDiscoverySection() {
  const [activeProfile, setActiveProfile] = useState('permanent_base');
  const [targetPlanet, setTargetPlanet] = useState('all'); // 'all' | 'mars' | 'moon'
  const [criteria, setCriteria] = useState({
    roughness: 82,
    relief: 88,
    slope: 78,
    aridity: 100,
    thermal: 98,
    volcanic: 45,
    access: 95
  });
  const [rankedResults, setRankedResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnalog, setSelectedAnalog] = useState(null);

  const fetchDiscovery = useCallback(async (currentCriteria, profileId, planet) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/analog/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          input_criteria: currentCriteria,
          mission_profile_id: profileId,
          target_planet: planet
        })
      });

      if (res.ok) {
        const data = await res.json();
        setRankedResults(data.ranked_analogs || []);
        if (data.ranked_analogs?.length > 0) {
          setSelectedAnalog(data.ranked_analogs[0]);
        }
      }
    } catch {
      // Offline fallback
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDiscovery(criteria, activeProfile, targetPlanet);
  }, [criteria, activeProfile, targetPlanet, fetchDiscovery]);

  const handleSliderChange = (id, val) => {
    setCriteria(prev => ({
      ...prev,
      [id]: Number(val)
    }));
  };

  const handleSelectProfile = (p) => {
    setActiveProfile(p.id);
    if (p.id === 'permanent_base') {
      setCriteria({ roughness: 85, relief: 90, slope: 80, aridity: 100, thermal: 95, volcanic: 35, access: 95 });
    } else if (p.id === 'robotic_landing') {
      setCriteria({ roughness: 45, relief: 40, slope: 30, aridity: 98, thermal: 85, volcanic: 60, access: 80 });
    } else if (p.id === 'surface_exploration') {
      setCriteria({ roughness: 80, relief: 85, slope: 75, aridity: 90, thermal: 88, volcanic: 85, access: 90 });
    } else {
      setCriteria({ roughness: 70, relief: 75, slope: 60, aridity: 100, thermal: 98, volcanic: 75, access: 95 });
    }
  };

  return (
    <section className="section" id="finder" style={{ position: 'relative' }}>
      <div className="ghost" aria-hidden="true">06</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />ANALOG FINDER · 06 — GEOGRAPHY & ENVIRONMENT MODEL</p>
        <h2 className="section__title">
          Input geography & environment. <span className="grad grad--fire">Discover matching twins.</span>
        </h2>
        <p className="section__lede">
          As specified in PRD Section 8, adjust terrain roughness, relief, slope, aridity, thermal extremes,
          and volcanism. The model calculates the hybrid similarity score (S_overall), data coverage %, and data confidence %,
          pointing directly to verified Earth analogues.
        </p>
      </div>

      {/* Target Body & Profile Filter Bar */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
          TARGET DESTINATION:
        </span>
        {[
          { id: 'all', label: 'All Destinations' },
          { id: 'moon', label: 'Moon Base Analogs' },
          { id: 'mars', label: 'Mars Surface Analogs' }
        ].map(p => (
          <button
            key={p.id}
            type="button"
            onClick={() => setTargetPlanet(p.id)}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              background: targetPlanet === p.id ? 'rgba(214, 226, 240, 0.12)' : 'rgba(214, 226, 240, 0.03)',
              border: targetPlanet === p.id ? '1px solid var(--sun)' : '1px solid var(--line)',
              color: targetPlanet === p.id ? '#fff' : 'var(--muted)',
              cursor: 'pointer'
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Mission Profile Chips */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', marginBottom: '2.5rem' }}>
        {PROFILES.map(p => (
          <button
            key={p.id}
            type="button"
            onClick={() => handleSelectProfile(p)}
            style={{
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              background: activeProfile === p.id ? 'rgba(217, 164, 91, 0.12)' : 'var(--panel)',
              border: activeProfile === p.id ? '1px solid var(--signal)' : '1px solid var(--line)',
              cursor: 'pointer',
              transition: 'all 0.2s var(--ease-out)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: activeProfile === p.id ? 'var(--sun)' : 'var(--text)' }}>
                {p.label}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--faint)' }}>
                {p.target}
              </span>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: '1.4' }}>
              {p.desc}
            </p>
          </button>
        ))}
      </div>

      {/* Two Column Grid: Sliders on Left, Ranked Analogs on Right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        alignItems: 'start'
      }}>
        {/* Sliders Box */}
        <div style={{
          background: 'var(--panel)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--sun)', letterSpacing: '0.1em' }}>
              PARAMETRIC CRITERIA (NASA DAAC & PDS METRICS)
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--faint)' }}>
              PRD SECTION 8
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {SLIDERS.map(s => (
              <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)' }}>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>
                    {s.label}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--earth-hot)' }}>
                    {criteria[s.id]} / 100
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={criteria[s.id]}
                  onChange={(e) => handleSliderChange(s.id, e.target.value)}
                  style={{
                    width: '100%',
                    accentColor: 'var(--signal)',
                    cursor: 'pointer'
                  }}
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--faint)' }}>
                  Dataset: {s.source}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ranked Earth Analogs Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--earth)', letterSpacing: '0.1em' }}>
              RANKED EARTH ANALOG DISCOVERIES ({rankedResults.length} CANDIDATES)
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--faint)' }}>
              HYBRID SIMILARITY RANKING
            </span>
          </div>

          {rankedResults.map((analog, idx) => (
            <div
              key={analog.id || idx}
              onClick={() => setSelectedAnalog(analog)}
              style={{
                background: selectedAnalog?.id === analog.id ? 'var(--panel-2)' : 'var(--panel)',
                border: selectedAnalog?.id === analog.id ? '1px solid var(--sun)' : '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                padding: '1.25rem',
                cursor: 'pointer',
                transition: 'all 0.2s var(--ease-out)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <div>
                  <h3 style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--text)' }}>
                    {analog.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--muted)' }}>
                    {analog.country} · {analog.geographic_context?.elevation || analog.elevation_m || analog.elevation}
                    {formatCoordinates(analog.coordinates || analog.geographic_context?.coordinates || analog.location?.coordinates)}
                  </p>
                </div>

                {/* Score Pill */}
                <div style={{
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: 'rgba(217, 164, 91, 0.15)',
                  border: '1px solid var(--signal)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  color: 'var(--sun)',
                  textAlign: 'right'
                }}>
                  {analog.calculated_similarity}% SIMILARITY
                </div>
              </div>

              {/* Trio of Metrics Bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                padding: '0.6rem 0.8rem',
                borderRadius: '6px',
                background: 'rgba(214, 226, 240, 0.02)',
                border: '1px solid var(--line)',
                marginBottom: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-micro)'
              }}>
                <div>
                  <span style={{ color: 'var(--faint)' }}>Coverage: </span>
                  <span style={{ color: 'var(--text)' }}>{analog.data_coverage}%</span>
                </div>
                <div>
                  <span style={{ color: 'var(--faint)' }}>Confidence: </span>
                  <span style={{ color: 'var(--success)' }}>{analog.data_confidence}%</span>
                </div>
                <div>
                  <span style={{ color: 'var(--faint)' }}>Analog to: </span>
                  <span style={{ color: 'var(--earth-hot)' }}>
                    {Array.isArray(analog.planetary_analogy) ? analog.planetary_analogy.join(', ') : 'Moon/Mars'}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: '1.5', marginBottom: '0.6rem' }}>
                {analog.scientific_honesty?.why_analog || analog.scientific_breakdown?.why_analog}
              </p>

              {/* Limitations Notice */}
              <div style={{
                padding: '0.5rem 0.8rem',
                borderRadius: '4px',
                background: 'rgba(217, 122, 122, 0.08)',
                border: '1px solid rgba(217, 122, 122, 0.25)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-micro)',
                color: '#e8b07e'
              }}>
                <span style={{ color: 'var(--danger)', fontWeight: 600 }}>WHERE ANALOGY BREAKS DOWN: </span>
                <span>
                  {analog.scientific_honesty?.limitations?.[0] || 'Atmosphere 101 kPa vs vacuum/thin CO2; Earth gravity 1.0g.'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
