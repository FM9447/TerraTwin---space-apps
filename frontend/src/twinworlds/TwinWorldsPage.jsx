import React, { useRef } from 'react';
import Preloader, { CursorLayer } from './components/Preloader';
import FxLayers from './components/FxLayers';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import WorldsSection from './components/WorldsSection';
import FidelitySection from './components/FidelitySection';
import AnalogsSection from './components/AnalogsSection';
import CompareSection from './components/CompareSection';
import LookalikesSection from './components/LookalikesSection';
import GallerySection from './components/GallerySection';
import GameSection from './game/GameSection';
import SourcesSection from './components/SourcesSection';
import { Footer, ToTop } from './components/Footer';
import { useTwinEffects } from './hooks/useTwinEffects';
import { MARS_PILLS, MARS_SITES, MOON_PILLS, MOON_SITES } from './content';

export default function TwinWorldsPage() {
  const rootRef = useRef(null);
  useTwinEffects(rootRef);

  return (
    <div ref={rootRef}>
      <Preloader />
      <CursorLayer />
      <FxLayers />
      <Nav />

      <main>
        <Hero />
        <Ticker />
        <WorldsSection />

        <div className="divider" aria-hidden="true">
          <span /><em>✦ TRANSMISSION 01 · STABLE ✦</em><span />
        </div>

        <FidelitySection />

        <AnalogsSection
          id="mars"
          ghost="03"
          kickerClass="kicker--mars"
          kicker="RED ZONE · 03 — MARS ON EARTH"
          title={<>Mars, <span className="grad grad--fire">already on Earth.</span></>}
          lede="Six places where the ground, the chemistry or the isolation rehearses the Red Planet."
          sites={MARS_SITES}
          pills={MARS_PILLS}
          pillsAria="More Mars analogues"
        />

        <AnalogsSection
          id="moon"
          ghost="04"
          strip
          kickerClass="kicker--moon"
          kicker="GREY ZONE · 04 — MOON ON EARTH"
          title={<>Moon, <span className="grad grad--moon">rehearsed on Earth.</span></>}
          lede={<>Grey lava, cinder and impact craters, the ground astronauts walked before they ever left orbit. <span className="drag-hint">⟵ drag sideways ⟶</span></>}
          sites={MOON_SITES}
          pills={MOON_PILLS}
          pillsAria="More Moon analogues"
        />

        <CompareSection />
        <LookalikesSection />
        <GallerySection />

        <div className="divider" aria-hidden="true">
          <span /><em>✦ FINAL TEST · DO YOU TRUST YOUR EYES? ✦</em><span />
        </div>

        <GameSection />
        <SourcesSection />
      </main>

      <Footer />
      <ToTop />
    </div>
  );
}
