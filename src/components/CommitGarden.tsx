// components/CommitGarden.tsx

import { useMemo } from "react";
import { Github } from "lucide-react";
import { personaldescription } from "../data/portfolioData";
import type { Tokens } from "../types";

interface CommitGardenProps {
  t: Tokens;
}

export default function CommitGarden({ t }: CommitGardenProps) {
  const cells = useMemo<number[]>(() => Array.from({ length: 52 }, () => Math.random()), []);

  const fill = (v: number): string => {
    if (v > 0.75) return t.commitHigh;
    if (v > 0.5) return t.commitMid;
    if (v > 0.25) return t.commitLow;
    return t.commitEmpty;
  };

  return (
    <section>
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-10 flex items-center gap-3 ${t.heading}`}>
        <span>🌸</span> My Commit Garden
      </h2>

      <div className={`p-10 rounded-3xl border-2 shadow-xl text-center lift ${t.card}`}>
        <div
          className="mb-6 max-w-2xl mx-auto"
          style={{ display: "grid", gridTemplateColumns: "repeat(26, 1fr)", gap: 5 }}
        >
          {cells.map((v, i) => (
            <div
              key={i}
              style={{
                background: fill(v),
                borderRadius: 3,
                aspectRatio: "1",
                transition: "transform .15s ease",
              }}
              className="hover:scale-125 cursor-pointer"
            />
          ))}
        </div>

        <p className={`text-sm mb-5 ${t.subtext}`}>Every commit is like planting a flower 🌱</p>

        <a
          href={personaldescription.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all ${t.accent}`}
        >
          <Github size={20} /> Visit My Garden
        </a>
      </div>
    </section>
  );
}
