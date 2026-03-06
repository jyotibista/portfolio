// components/Blogs.tsx

import { BookOpen } from "lucide-react";
import { blogs } from "../data/portfolioData";
import type { Tokens } from "../types";

interface BlogsProps {
  t: Tokens;
}

export default function Blogs({ t }: BlogsProps) {
  return (
    <section id="blogs">
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3 ${t.heading}`}>
        <span>📝</span> Thoughts I'll Write Down Eventually
      </h2>
      <p className={`text-sm mb-10 ${t.muted}`}>
        Blog is a work in progress — ideas are brewing ☕ watch this space.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b, i) => (
          <div
            key={i}
            className={`p-7 rounded-3xl border-2 shadow-lg lift group relative overflow-hidden ${t.blogCard}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${t.tag}`}>{b.tag}</span>
              <span className={`text-xs ${t.muted}`}>Coming soon</span>
            </div>
            <h3 className={`serif text-lg font-bold mb-3 leading-snug ${t.heading}`}>{b.title}</h3>
            <p className={`text-sm leading-relaxed mb-5 ${t.subtext}`}>{b.snippet}</p>
            <div className={`flex items-center gap-1 text-xs font-medium ${t.muted} opacity-60`}>
              <BookOpen size={13} /> Coming soon
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
