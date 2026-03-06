// components/Projects.tsx

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { professionalProjects, personalProjects } from "../data/portfolioData";
import type { Tokens } from "../types";

interface ProjectsProps {
  t: Tokens;
}

type ProjectTab = "professional" | "personal";

export default function Projects({ t }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<ProjectTab>("professional");

  const projects = activeTab === "professional" ? professionalProjects : personalProjects;

  return (
    <section id="projects">
      <h2 className={`serif text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3 ${t.heading}`}>
        <span>🚀</span> Stuff I've Shipped
      </h2>

      <div className={`inline-flex rounded-2xl p-1 mb-8 gap-1 ${t.isDark ? "bg-[#221619]/80" : "bg-pink-100/80"}`}>
        {(["professional", "personal"] as ProjectTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${activeTab === tab ? t.tabActive : t.tabIdle
              }`}
          >
            {tab === "professional" ? "💼 Professional" : "🌱 Personal"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={`${activeTab}-${i}`}
            className={`relative group ${p.size === "large" ? "md:col-span-2" : ""}`}
          >
            <div className={`p-8 rounded-3xl border-2 shadow-xl overflow-hidden lift ${t.card}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={`serif text-2xl font-bold mb-1 ${t.heading}`}>{p.title}</h3>
                  <p className={`text-sm font-medium ${t.muted}`}>{p.company}</p>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl transition-all hover:scale-110 ${t.tag}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className={`mb-5 leading-relaxed text-sm ${t.subtext}`}>{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span key={j} className={`px-3 py-1.5 rounded-full text-xs font-semibold ${t.tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
