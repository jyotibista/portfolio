// Portfolio.tsx — root orchestrator

import React from "react";

import { useDarkMode, useLoader, useVibe } from "../hooks/hooks";
import { getTokens } from "../styles/theme";

import LoadingScreen from "../components/LoadingScreen";
import Nav           from "../components/Nav";
import VibeWidget    from "../components/VibeWidget";
import Hero          from "../components/Hero";
import Skills        from "../components/Skills";
import Projects      from "../components/Projects";
import Experience    from "../components/Experience";
import Education     from "../components/Education";
import Values        from "../components/Values";
import CommitGarden  from "../components/CommitGarden";
import Blogs         from "../components/Blogs";

export default function Portfolio() {
  const [isDark, toggleDark] = useDarkMode(false);
  const isLoading             = useLoader(2000);
  const currentVibe           = useVibe();
  const t                     = getTokens(isDark);

  if (isLoading) return <LoadingScreen bg={t.bg} muted={t.muted} />;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${t.bg}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap');
        * { font-family: 'Inter', sans-serif; box-sizing: border-box; }
        .serif { font-family: 'Playfair Display', serif !important; }
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes floatA  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes floatB  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(14px)} }
        @keyframes fadePop { 0%,100%{opacity:.12} 50%{opacity:.25} }
        .fa  { animation: floatA  7s ease-in-out infinite; }
        .fb  { animation: floatB  9s ease-in-out infinite; }
        .fp  { animation: fadePop 6s ease-in-out infinite; }
        .lift { transition: transform .22s ease, box-shadow .22s ease; }
        .lift:hover { transform: translateY(-6px); box-shadow: 0 18px 38px rgba(0,0,0,.16); }
        .tape-top::before {
          content:''; position:absolute; top:-11px; left:50%;
          transform:translateX(-50%) rotate(3deg);
          width:52px; height:18px;
          background:${t.tape}; border-radius:3px;
        }
      ` }} />

      {/* Floating blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-14 right-14 text-5xl opacity-20 fa">✨</div>
        <div className="absolute bottom-28 left-10 text-4xl opacity-20 fb">💖</div>
        <div className="absolute top-1/2 right-1/3 text-3xl opacity-10 fp">🌸</div>
      </div>

      <Nav isDark={isDark} onToggleDark={toggleDark} t={t} />
      <VibeWidget currentVibe={currentVibe} t={t} />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-32">
        <Hero         t={t} />
        <Skills       t={t} />
        <Projects     t={t} />
        <Experience   t={t} />
        <Education    t={t} />
        <Values       t={t} />
        <CommitGarden t={t} />
        <Blogs        t={t} />
        <section className="text-center">
          <p className={`serif text-sm ${t.muted}`}>Made with 💖 and ☕ by Jyoti</p>
        </section>
      </div>
    </div>
  );
}
