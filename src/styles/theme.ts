// styles/theme.ts — typed colour token factory

import type { Tokens } from "../types";

export function getTokens(isDark: boolean): Tokens {
  const d = isDark;
  return {
    isDark,
    bg:          d ? "bg-gradient-to-br from-stone-950 via-zinc-950 to-neutral-950"
                   : "bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50",
    card:        d ? "bg-[#221619]/90 border-[#4a2833]/70"
                   : "bg-white/80 border-pink-200/60",
    cardSoft:    d ? "bg-[#221619]/60 border-[#4a2833]/50"
                   : "bg-white/60 border-pink-200/40",
    blogCard:    d ? "bg-[#221619]/70 border-[#4a2833]/50"
                   : "bg-white/70 border-pink-200/50",
    heading:     d ? "text-rose-100"    : "text-rose-900",
    subtext:     d ? "text-rose-300/90" : "text-rose-700",
    muted:       d ? "text-rose-400/80" : "text-rose-500",
    tag:         d ? "bg-[#3a2028]/90 text-rose-300"
                   : "bg-pink-200/80 text-rose-800",
    navBg:       d ? "bg-[#160e10]/80 border-[#4a2833]/40"
                   : "bg-white/30 border-pink-200/30",
    btnIcon:     d ? "bg-[#3a2028]/80 text-rose-300"
                   : "bg-pink-200/60 text-rose-700",
    accent:      d ? "bg-rose-900 hover:bg-rose-800 text-rose-100"
                   : "bg-rose-500 hover:bg-rose-600 text-white",
    accentOutline: d ? "bg-[#3a2028]/70 text-rose-200 border-[#4a2833]/70"
                     : "bg-pink-200/60 text-rose-800 border-pink-300/60",
    vibeBg:      d ? "bg-[#221619]/95 border-[#4a2833]/60 text-rose-300"
                   : "bg-white/60 border-pink-200/60 text-rose-700",
    tlLine:      d ? "bg-[#4a2833]/60" : "bg-pink-300/50",
    tlDot:       d ? "from-rose-800 to-rose-950 border-stone-950"
                   : "from-pink-300 to-rose-400 border-pink-50",
    quoteBar:    d ? "border-rose-800" : "border-pink-400",
    tabActive:   d ? "bg-rose-900 text-rose-100 shadow" : "bg-rose-500 text-white shadow",
    tabIdle:     d ? "text-rose-400 hover:bg-[#3a2028]/60" : "text-rose-600 hover:bg-pink-100",
    tape:        d ? "rgba(80,35,48,0.65)" : "rgba(251,207,232,0.65)",
    commitHigh:  d ? "#7c2d3e" : "#f43f5e",
    commitMid:   d ? "#5e2230" : "#fb7185",
    commitLow:   d ? "#431a24" : "#fda4af",
    commitEmpty: d ? "#2e1620" : "#fce7f3",
    divider:     d ? "border-[#4a2833]/40" : "border-pink-200/40",
  };
}
