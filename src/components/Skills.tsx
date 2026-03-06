// components/Skills.tsx — grouped clusters, all using pill tags

import { useState } from "react";
import type { Tokens } from "../types";
import { SKILL_GROUPS } from "../data/portfolioData";

interface SkillsProps {
  t: Tokens;
}

export default function Skills({ t }: SkillsProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills">
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3 ${t.heading}`}>
        <span>⚡</span> Tech I Vibe With
      </h2>
      <p className={`text-sm mb-10 ${t.muted}`}>
        Grouped by what I actually use them for — not just a list of buzzwords.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            onMouseEnter={() => setHovered(group.label)}
            onMouseLeave={() => setHovered(null)}
            className={`
              p-6 rounded-3xl border-2 shadow-lg transition-all duration-200
              ${group.colSpan}
              ${hovered === group.label ? "shadow-xl -translate-y-1" : ""}
              ${t.card}
            `}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">{group.emoji}</span>
              <h3 className={`serif text-lg font-bold ${t.heading}`}>{group.label}</h3>
            </div>
            <p className={`text-xs mb-3 ${t.muted} opacity-70`}>{group.description}</p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${t.tag}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}