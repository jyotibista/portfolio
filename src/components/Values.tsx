// components/Values.tsx

import React from "react";
import { values } from "../data/portfolioData";
import type { Tokens } from "../types";

interface ValuesProps {
  t: Tokens;
}

export default function Values({ t }: ValuesProps) {
  return (
    <section>
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3 ${t.heading}`}>
        <span>✨</span> Why You'll Love Working With Me
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border-2 shadow-lg relative overflow-hidden group lift ${t.card}`}
          >
            <div className="absolute top-3 right-4 text-5xl opacity-15 group-hover:opacity-30 transition-opacity">
              {v.icon}
            </div>
            <h3 className={`serif text-lg font-bold mb-4 ${t.heading}`}>{v.title}</h3>
            <blockquote className={`italic text-sm leading-relaxed border-l-4 pl-4 ${t.subtext} ${t.quoteBar}`}>
              "{v.quote}"
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
