// components/VibeWidget.tsx

import React from "react";
import type { Tokens } from "../types";

interface VibeWidgetProps {
  currentVibe: string;
  t: Tokens;
}

export default function VibeWidget({ currentVibe, t }: VibeWidgetProps) {
  return (
    <div className={`fixed top-[5rem] right-5 z-40 px-5 py-3 rounded-2xl backdrop-blur-lg border-2 shadow-lg ${t.vibeBg}`}>
      <div className="flex items-center gap-2">
        <span className="text-xl">☕</span>
        <div>
          <p className="text-xs opacity-60">coding with</p>
          <p className="serif text-xs font-bold">{currentVibe}</p>
        </div>
      </div>
      <p className="text-xs mt-1 opacity-50">🎵 lo-fi beats</p>
    </div>
  );
}
