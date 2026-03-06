// hooks/hooks.ts — typed custom React hooks

import { useState, useEffect } from "react";
import { vibes } from "../data/portfolioData";

/** Rotating "coding with …" vibe label */
export function useVibe(): string {
  const [vibe, setVibe] = useState<string>(vibes[0]);
  useEffect(() => {
    const id = setInterval(() => {
      setVibe(vibes[Math.floor(Math.random() * vibes.length)]);
    }, 8000);
    return () => clearInterval(id);
  }, []);
  return vibe;
}

/** Initial loading splash */
export function useLoader(ms: number = 2000): boolean {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), ms);
    return () => clearTimeout(id);
  }, [ms]);
  return loading;
}

/** Dark-mode toggle — returns [isDark, toggleFn] */
export function useDarkMode(initial: boolean = false): [boolean, () => void] {
  const [isDark, setIsDark] = useState<boolean>(initial);
  const toggle = () => setIsDark((v) => !v);
  return [isDark, toggle];
}
