// components/Nav.tsx

import { Moon, Sun } from "lucide-react";
import type { Tokens } from "../types";

interface NavProps {
  isDark: boolean;
  onToggleDark: () => void;
  t: Tokens;
}

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "My Stack", href: "#skills" },
  { label: "What I Built", href: "#projects" },
  { label: "Work History", href: "#experience" },
  { label: "Learning", href: "#education" },
  { label: "Blog", href: "#blogs" },
];

export default function Nav({ isDark, onToggleDark, t }: NavProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b ${t.navBg}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="serif text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          JB ✨
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={`${t.muted} hover:text-rose-500 transition-colors`}>
              {label}
            </a>
          ))}
        </div>
        <button
          onClick={onToggleDark}
          className={`p-3 rounded-2xl backdrop-blur-sm transition-all hover:scale-110 active:scale-95 ${t.btnIcon}`}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}
