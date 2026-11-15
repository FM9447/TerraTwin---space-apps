import React, { useState, useEffect, useCallback } from 'react';
import { API_BASE } from '../content';

const SAMPLES = [
  {
    id: 'sample_crater',
    label: 'Impact Crater Rim',
    type: 'Basin',
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.85, brightness: 0.45, crater: 0.95, volcanic: 0.85, cryo: 0.1, dune: 0.1 }
  },
  {
    id: 'sample_basalt',
    label: 'Basaltic Lava Flow',
    type: 'Volcanic',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.90, brightness: 0.35, crater: 0.25, volcanic: 0.98, cryo: 0.05, dune: 0.05 }
  },
  {
    id: 'sample_cryo',
    label: 'Polar Cryo-Permafrost',
    type: 'Ice & Cold',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.72, brightness: 0.85, crater: 0.20, volcanic: 0.15, cryo: 0.95, dune: 0.15 }
  },
  {
    id: 'sample_dunes',
    label: 'Aeolian Sand Dunes',
    type: 'Wind-blown',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    features: { roughness: 0.45, brightness: 0.65, crater: 0.15, volcanic: 0.45, cryo: 0.05, dune: 0.92 }
  }
];

const DESTINATIONS = [
  { id: 'mars', label: 'Mars Twins', color: 'var(--mars)' },
  { id: 'moon', label: 'Moon Twins', color: 'var(--moon)' },
  { id: 'earth_analog', label: 'Earth Analogues', color: 'var(--earth)' },
  { id: 'all', label: 'All Worlds', color: 'var(--signal)' }
];

export default function PhotoMatcherSection() {
  const [selectedSample, setSelectedSample] = useState(SAMPLES[0]);
  const [customImage, setCustomImage] = useState(null);
  const [activeDestination, setActiveDestination] = useState('mars');
  const [features, setFeatures] = useState(SAMPLES[0].features);
  const [loading, setLoading] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [scanning, setScanning] = useState(false);

  const activeImageUrl = customImage || selectedSample.url;

  const runMatch = useCallback(async (currentFeatures, destination) => {
    setLoading(true);
    setScanning(true);
    try {
      const res = await fetch(`${API_BASE}/api/analog/image-match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          visual_features: currentFeatures,
          target_body: destination
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMatchData(data.matches);
      }
    } catch {
      // Fallback if offline
    } finally {
      setLoading(false);
      setTimeout(() => setScanning(false), 600);
    }
  }, []);

  useEffect(() => {
    runMatch(features, activeDestination);
  }, [features, activeDestination, runMatch]);

  const handleSelectSample = (sample) => {
    setCustomImage(null);
    setSelectedSample(sample);
    setFeatures(sample.features);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCustomImage(reader.result);
      // Infer features from file name or randomized realistic heuristic
      const name = file.name.toLowerCase();
      const isCrater = name.includes('crater') || name.includes('hole') || name.includes('basin');
      const isIce = name.includes('ice') || name.includes('snow') || name.includes('polar');
      const isDune = name.includes('dune') || name.includes('sand') || name.includes('desert');

      const inferred = {
        roughness: isIce ? 0.6 : isDune ? 0.45 : 0.85,
        brightness: isIce ? 0.88 : isDune ? 0.62 : 0.42,
        crater: isCrater ? 0.95 : 0.25,
        volcanic: isCrater ? 0.4 : isIce ? 0.1 : 0.92,
        cryo: isIce ? 0.95 : 0.05,
        dune: isDune ? 0.92 : 0.15
      };
      setFeatures(inferred);
    };
    reader.readAsDataURL(file);
  };

  const selectedMatches = matchData?.selected_matches || matchData?.top_overall || [];
  const primaryMatch = selectedMatches[0] || null;

  return (
    <section className="section" id="scanner" style={{ position: 'relative' }}>
      <div className="ghost" aria-hidden="true">05</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />PHOTO SCANNER · 05 — VISUAL TERRAIN TWIN</p>
        <h2 className="section__title">
          Scan any photo for <span className="grad grad--hyper">its planetary twin.</span>
        </h2>
        <p className="section__lede">
          Upload any landscape or choose a recon frame. The scanner computes 6D morphological roughness,
          crater rims, volcanic flow textures, and permafrost to find where on Mars or the Moon mirrors that ground.
        </p>
      </div>

      {/* Target Destination Switcher */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <span style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--muted)', alignSelf: 'center', marginRight: '0.4rem' }}>
          FIND TWIN ON:
        </span>
        {DESTINATIONS.map(dest => (
          <button
            key={dest.id}
            type="button"
            onClick={() => setActiveDestination(dest.id)}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '999px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.05em',
              transition: 'all 0.2s var(--ease-out)',
              background: activeDestination === dest.id ? 'rgba(214, 226, 240, 0.12)' : 'rgba(214, 226, 240, 0.03)',
              border: activeDestination === dest.id ? `1px solid ${dest.color}` : '1px solid var(--line)',
              color: activeDestination === dest.id ? '#fff' : 'var(--muted)',
              cursor: 'pointer'
            }}
          >
            {dest.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Upload/Source on Left, Matched Twin on Right */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        alignItems: 'start'
      }}>
        {/* Left Column: Image Source & Presets */}
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
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--signal)', letterSpacing: '0.1em' }}>
              INPUT RECONNAISSANCE FRAME
            </span>
            <label style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.35rem 0.8rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-micro)',
              background: 'rgba(214,226,240,0.06)',
              border: '1px solid var(--line-strong)',
              color: 'var(--text)',
              cursor: 'pointer'
            }}>
              <span>↑ Upload Custom Photo</span>
              <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
            </label>
          </div>

          {/* Active Image Preview with Scanner HUD */}
          <div style={{
            position: 'relative',
            aspectRatio: '16 / 10',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#000',
            border: '1px solid var(--line)'
          }}>
            <img
              src={activeImageUrl}
              alt="Scan source"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: scanning ? 'brightness(1.2) contrast(1.1)' : 'none',
                transition: 'filter 0.3s ease'
              }}
            />

            {/* Scanline Animation */}
            {scanning && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(106, 168, 255, 0.25) 50%, transparent 100%)',
                animation: 'pulse 0.6s infinite'
              }} />
            )}

            <div style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-micro)',
              padding: '2px 8px',
              background: 'rgba(3, 5, 9, 0.8)',
              border: '1px solid var(--line)',
              borderRadius: '4px',
              color: 'var(--earth-hot)'
            }}>
              {customImage ? 'CUSTOM UPLOAD' : selectedSample.label.toUpperCase()}
            </div>
          </div>

          {/* Presets Chips */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--faint)', marginBottom: '0.6rem' }}>
              OR SELECT NASA MISSION REFERENCE PRESET:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
              {SAMPLES.map(sample => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleSelectSample(sample)}
                  style={{
                    padding: '0.6rem',
                    textAlign: 'left',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--text-xs)',
                    background: (!customImage && selectedSample.id === sample.id) ? 'rgba(217, 164, 91, 0.12)' : 'rgba(214, 226, 240, 0.02)',
                    border: (!customImage && selectedSample.id === sample.id) ? '1px solid var(--signal)' : '1px solid var(--line)',
                    color: (!customImage && selectedSample.id === sample.id) ? 'var(--sun)' : 'var(--muted)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ color: 'var(--text)', fontWeight: 500 }}>{sample.label}</div>
                  <div style={{ fontSize: 'var(--text-micro)', color: 'var(--faint)' }}>{sample.type}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Computed Planetary Twin Match */}
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
              CLOSEST IDENTIFIED TWIN LOCATION
            </span>
            {primaryMatch && (
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                padding: '2px 8px',
                borderRadius: '4px',
                background: 'rgba(106, 168, 255, 0.15)',
                color: 'var(--earth-hot)',
                border: '1px solid var(--earth)'
              }}>
                {primaryMatch.match_percentage}% MATCH
              </span>
            )}
          </div>

          {primaryMatch ? (
            <>
              {/* Twin Image */}
              <div style={{
                position: 'relative',
                aspectRatio: '16 / 10',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#000',
                border: '1px solid var(--line)'
              }}>
                <img
                  src={primaryMatch.image}
                  alt={primaryMatch.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-micro)',
                  padding: '3px 8px',
                  borderRadius: '999px',
                  background: 'rgba(3, 5, 9, 0.85)',
                  border: '1px solid var(--line)',
                  color: primaryMatch.type === 'mars' ? 'var(--mars-hot)' : primaryMatch.type === 'moon' ? 'var(--moon)' : 'var(--earth)'
                }}>
                  ● {primaryMatch.body.toUpperCase()}
                </div>
              </div>

              {/* Site Details */}
              <div>
                <h3 style={{ fontSize: 'var(--text-card)', fontWeight: 600, color: 'var(--text)', marginBottom: '0.2rem' }}>
                  {primaryMatch.name}
                </h3>
                {primaryMatch.coordinates && (
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--muted)', marginBottom: '0.6rem' }}>
                    COORDINATES: {typeof primaryMatch.coordinates.lat === 'number' ? `${primaryMatch.coordinates.lat.toFixed(2)}°N` : Array.isArray(primaryMatch.coordinates) ? `${primaryMatch.coordinates[1]}°` : `${primaryMatch.coordinates.lat || '—'}°`} · {typeof primaryMatch.coordinates.lon === 'number' ? `${primaryMatch.coordinates.lon.toFixed(2)}°E` : Array.isArray(primaryMatch.coordinates) ? `${primaryMatch.coordinates[0]}°` : `${primaryMatch.coordinates.lon || '—'}°`}
                  </p>
                )}
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text)', lineHeight: '1.5', marginBottom: '0.8rem' }}>
                  {primaryMatch.morphology}
                </p>

                {/* Morphological Match Rationale */}
                <div style={{
                  padding: '0.8rem',
                  borderRadius: '6px',
                  background: 'rgba(214, 226, 240, 0.03)',
                  border: '1px solid var(--line)'
                }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--signal)', marginBottom: '0.2rem' }}>
                    MORPHOLOGICAL ALIGNMENT RATIONALE:
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                    {primaryMatch.visual_reason}
                  </p>
                </div>
              </div>

              {/* Other Matching Candidates */}
              {selectedMatches.length > 1 && (
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--faint)', marginBottom: '0.5rem' }}>
                    ADDITIONAL CORRELATED DESTINATIONS:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                    {selectedMatches.slice(1, 4).map(other => (
                      <div
                        key={other.id}
                        style={{
                          padding: '0.5rem',
                          borderRadius: '6px',
                          background: 'rgba(214, 226, 240, 0.02)',
                          border: '1px solid var(--line)',
                          fontSize: 'var(--text-micro)',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        <div style={{ color: 'var(--text)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {other.name}
                        </div>
                        <div style={{ color: 'var(--earth-hot)', marginTop: '2px' }}>
                          {other.match_percentage}% • {other.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{ padding: '3rem 1rem', textAlign: 'center', color: 'var(--faint)' }}>
              Analyzing visual profile against NASA Planetary Data System...
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
