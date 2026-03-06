// components/Hero.tsx

import { Github, Linkedin, Mail, Zap, type LucideIcon } from "lucide-react";
import { personaldescription } from "../data/portfolioData";
import type { Tokens } from "../types";

interface HeroProps {
  t: Tokens;
}

interface SocialLink {
  Icon: LucideIcon;
  href: string;
}

export default function Hero({ t }: HeroProps) {
  const d = t.isDark;

  const socials: SocialLink[] = [
    { Icon: Github, href: personaldescription.github },
    { Icon: Linkedin, href: personaldescription.linkedin },
    { Icon: Mail, href: `mailto:${personaldescription.email}` },
  ];

  return (
    <section id="hero" className="text-center">
      <div
        className={`w-36 h-36 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl shadow-2xl border-4 hover:scale-105 transition-transform
          ${d
            ? "border-rose-900/50 bg-gradient-to-br from-rose-900 to-stone-900"
            : "border-white/50 bg-gradient-to-br from-pink-300 to-rose-400"
          }`}
      >
        👩‍💻
      </div>

      <h1 className={`serif text-6xl md:text-7xl font-bold mb-4 ${t.heading}`}>
        Hey, I'm {personaldescription.name}
      </h1>
      <p className={`text-xl md:text-2xl mb-4 font-light ${t.subtext}`}>
        {personaldescription.tagline}
      </p>
      <p className={`text-base md:text-lg mb-8 font-medium ${t.muted}`}>
        <span className={d ? "text-rose-300" : "text-rose-600"}>Frontend dev by day ☀️</span>
        {" · "}
        <span className={d ? "text-rose-300" : "text-rose-600"}>Data science enthusiast by night 🌙</span>
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <div className={`flex items-center gap-2 px-5 py-4 rounded-full border-2 font-semibold text-lg shadow-md ${t.accentOutline}`}>
          <Zap size={22} className="text-yellow-400" />
          {personaldescription.yearsExp} Years Crafting Fast &amp; Pretty Interfaces
        </div>
        <div
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-medium text-base shadow-md
            ${d ? "bg-[#2a1f22]/70 text-rose-300 border-[#4a2833]/60" : "bg-pink-100/80 text-rose-700 border-pink-300/50"}`}
        >
          <span className="text-xl">📊</span>
          Data Science Enthusiast — currently learning Python, Stats, AI &amp; ML
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {socials.map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-2xl backdrop-blur-sm transition-all shadow-md hover:scale-110 active:scale-95 ${t.cardSoft}`}
          >
            <Icon size={22} className={t.muted} />
          </a>
        ))}
      </div>
    </section>
  );
}
