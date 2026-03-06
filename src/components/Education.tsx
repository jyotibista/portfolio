// components/Education.tsx

import React from "react";
import { education } from "../data/portfolioData";
import type { Tokens } from "../types";

interface EducationProps {
  t: Tokens;
}

export default function Education({ t }: EducationProps) {
  return (
    <section id="education">
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3 ${t.heading}`}>
        <span>🎓</span> Where I Learned the Ropes
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <div
            key={i}
            className={`p-7 rounded-3xl border-2 shadow-lg lift relative overflow-hidden ${t.card}`}
          >
            <div className="absolute top-3 right-4 text-4xl opacity-15">{e.icon}</div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${t.muted}`}>
              {e.period}
            </p>
            <h3 className={`serif text-xl font-bold mb-1 ${t.heading}`}>{e.degree}</h3>
            <p className={`font-semibold text-sm mb-3 ${t.muted}`}>{e.school}</p>
            <p className={`text-sm leading-relaxed ${t.subtext}`}>{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
