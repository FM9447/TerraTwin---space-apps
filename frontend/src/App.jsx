import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import ParametricDiscoveryView from './components/ParametricDiscovery/ParametricDiscoveryView';
import PhotoMatcherView from './components/PhotoMatcher/PhotoMatcherView';
import CosmicGameView from './components/CosmicGame/CosmicGameView';
import PlanetaryExplorerView from './components/PlanetaryExplorer/PlanetaryExplorerView';
import NasaCatalogView from './components/NasaCatalog/NasaCatalogView';
import { NASA_PRD_MISSION_PROFILES } from './data/nasaDataCatalog';

export default function App() {
  const [activeTab, setActiveTab] = useState('discovery');
  const [activeProfile, setActiveProfile] = useState('permanent_base');

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#04070D] text-slate-100 overflow-hidden">
      {/* Top Navigation */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        missionProfiles={NASA_PRD_MISSION_PROFILES}
      />

      {/* Main View Router */}
      <div className="flex-1 flex overflow-hidden">
        {activeTab === 'discovery' && (
          <ParametricDiscoveryView
            activeProfile={activeProfile}
            setActiveProfile={setActiveProfile}
            missionProfiles={NASA_PRD_MISSION_PROFILES}
          />
        )}

        {activeTab === 'photo_matcher' && (
          <PhotoMatcherView />
        )}

        {activeTab === 'cosmic_game' && (
          <CosmicGameView />
        )}

        {activeTab === 'explorer' && (
          <PlanetaryExplorerView />
        )}

        {activeTab === 'nasa_catalog' && (
          <NasaCatalogView />
        )}
      </div>
    </div>
  );
}
