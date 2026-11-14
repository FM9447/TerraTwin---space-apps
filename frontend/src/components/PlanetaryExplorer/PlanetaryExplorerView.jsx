import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Orbit, Compass, Eye, MapPin, Layers, Info } from 'lucide-react';
import { NASA_PLANETARY_TARGETS, NASA_EARTH_ANALOGS } from '../../data/nasaDataCatalog';

export default function PlanetaryExplorerView() {
  const mountRef = useRef(null);
  const [selectedPlanet, setSelectedPlanet] = useState('earth'); // 'earth' | 'moon' | 'mars'
  const [selectedPin, setSelectedPin] = useState(NASA_EARTH_ANALOGS[0]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Create planetary sphere
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Procedural color scheme depending on planet
    let sphereColor = 0x1E3A8A; // Earth blue
    let wireColor = 0x06B6D4;
    if (selectedPlanet === 'moon') {
      sphereColor = 0x334155;
      wireColor = 0x94A3B8;
    } else if (selectedPlanet === 'mars') {
      sphereColor = 0x7F1D1D;
      wireColor = 0xF87171;
    }

    const material = new THREE.MeshPhongMaterial({
      color: sphereColor,
      specular: 0x222222,
      shininess: 15,
      wireframe: false
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Subtle atmospheric wireframe grid
    const wireGeo = new THREE.SphereGeometry(1.015, 32, 32);
    const wireMat = new THREE.MeshBasicMaterial({
      color: wireColor,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.002;
      wireMesh.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [selectedPlanet]);

  return (
    <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-56px)] w-full overflow-hidden bg-[#04070D]">
      {/* 3D WebGL Viewport */}
      <div className="flex-1 relative h-64 lg:h-full flex items-center justify-center bg-radial from-slate-900 to-[#04070D]">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Planet Toggle Pill */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-[#070A10]/90 backdrop-blur-md p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setSelectedPlanet('earth')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedPlanet === 'earth' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'text-slate-400 hover:text-white'
            }`}
          >
            🌍 Earth (Analogs)
          </button>
          <button
            onClick={() => setSelectedPlanet('moon')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedPlanet === 'moon' ? 'bg-slate-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            🌕 Moon (Artemis)
          </button>
          <button
            onClick={() => setSelectedPlanet('mars')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedPlanet === 'mars' ? 'bg-red-700 text-white shadow-md shadow-red-500/20' : 'text-slate-400 hover:text-white'
            }`}
          >
            🔴 Mars (Exploration)
          </button>
        </div>

        {/* Telemetry banner */}
        <div className="absolute bottom-4 left-4 z-10 bg-[#070A10]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] font-mono text-slate-400">
          WebGL ACES-Filmic Tone-mapped 3D Planetary Simulation
        </div>
      </div>

      {/* Right Drawer: Selected Site Card (380px) */}
      <aside className="w-full lg:w-96 bg-[#070A10] border-t lg:border-t-0 lg:border-l border-[#1E293B] p-4 lg:p-6 overflow-y-auto flex flex-col gap-4">
        <div>
          <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
            ACTIVE PLANETARY BODY: {selectedPlanet.toUpperCase()}
          </span>
          <h2 className="text-base font-bold text-white mt-2">
            {selectedPlanet === 'earth' ? 'Terrestrial Analogs Catalog' : 'Extraterrestrial Base Locations'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {selectedPlanet === 'earth'
              ? 'Earth locations identified as structural, environmental, and thermal twins to lunar and Martian sites.'
              : 'Candidate lunar base locations (Artemis zone) and Martian landing sites.'}
          </p>
        </div>

        {/* List of Sites */}
        <div className="flex flex-col gap-2 mt-2">
          {(selectedPlanet === 'earth' ? NASA_EARTH_ANALOGS : NASA_PLANETARY_TARGETS.filter(t => t.planet.toLowerCase() === selectedPlanet)).map(site => {
            const isSelected = selectedPin.id === site.id;
            return (
              <div
                key={site.id}
                onClick={() => setSelectedPin(site)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  isSelected ? 'bg-[#0E1422] border-cyan-500 shadow-md shadow-cyan-500/10' : 'bg-[#0B101B] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-bold text-white truncate">{site.name}</h4>
                  <span className="text-[10px] font-mono text-cyan-400">{site.elevation}</span>
                </div>
                <p className="text-[10px] text-slate-400 truncate">{site.country || site.mission_profile}</p>
              </div>
            );
          })}
        </div>

        {/* Selected Site Detail */}
        {selectedPin && (
          <div className="bg-[#0B101B] border border-slate-800 rounded-xl p-4 mt-2 flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden h-36 relative">
              <img src={selectedPin.image} alt={selectedPin.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white">
                {selectedPin.country || selectedPin.planet}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">{selectedPin.name}</h3>
              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                {selectedPin.description || selectedPin.scientific_breakdown?.why_analog}
              </p>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
