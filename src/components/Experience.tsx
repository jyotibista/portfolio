// components/Experience.tsx

import { experiences } from "../data/portfolioData";
import type { Tokens } from "../types";

interface ExperienceProps {
  t: Tokens;
}

export default function Experience({ t }: ExperienceProps) {
  return (
    <section id="experience">
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3 ${t.heading}`}>
        <span>💼</span> Where I've Been Coding
      </h2>

      <div className="relative">
        <div className={`absolute left-7 top-0 bottom-0 w-0.5 rounded-full ${t.tlLine}`} />

        {experiences.map((ex, i) => (
          <div key={i} className="relative pl-20 pb-14 last:pb-0">
            <div
              className={`absolute left-3 top-5 w-8 h-8 rounded-full border-4 shadow-lg flex items-center justify-center text-sm z-10 bg-gradient-to-br ${t.tlDot}`}
            >
              ⭐
            </div>

            <div className={`p-7 rounded-3xl border-2 shadow-lg lift ${t.card}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className={`serif text-xl font-bold mb-0.5 ${t.heading}`}>{ex.role}</h3>
                  <p className={`font-semibold text-sm ${t.muted}`}>{ex.company}</p>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${t.tag}`}>
                  {ex.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-4">
                {ex.highlights.map((h, j) => (
                  <li key={j} className={`flex items-start gap-3 text-sm ${t.subtext}`}>
                    <span className="mt-0.5 shrink-0">✨</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <p className={`text-xs font-mono ${t.muted} opacity-70 border-t pt-3 ${t.divider}`}>
                {ex.stack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
