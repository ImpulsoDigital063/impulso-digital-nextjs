"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(raw) {
  const str = String(raw);
  const match = str.match(/([^\d]*)([\d.,]+)(.*)/);
  if (!match) return { prefix: "", number: 0, suffix: str, decimals: 0, fixed: true };
  const [, prefix, numStr, suffix] = match;
  const hasDecimal = numStr.includes(",") || numStr.includes(".");
  const normalized = numStr.replace(",", ".");
  const number = parseFloat(normalized);
  const decimals = hasDecimal ? (normalized.split(".")[1]?.length || 0) : 0;
  return { prefix, number, suffix, decimals, fixed: isNaN(number) };
}

function formatValue({ prefix, number, suffix, decimals, fixed, current }) {
  if (fixed) return `${prefix}${suffix}`;
  const shown = current.toFixed(decimals);
  return `${prefix}${shown}${suffix}`;
}

/**
 * Anima um número de 0 até o valor final quando o elemento entra na viewport.
 * Aceita string crua ("60+", "R$0", "7 dias") — extrai o número, anima, mantém o resto.
 */
export function useCounterOnView(rawValue, { duration = 1400 } = {}) {
  const ref = useRef(null);
  const parsed = useRef(parseValue(rawValue));
  const [display, setDisplay] = useState(() =>
    formatValue({ ...parsed.current, current: parsed.current.fixed ? 0 : 0 })
  );

  useEffect(() => {
    parsed.current = parseValue(rawValue);
    setDisplay(formatValue({ ...parsed.current, current: 0 }));
  }, [rawValue]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const p = parsed.current;
    if (p.fixed || p.number === 0) {
      setDisplay(formatValue({ ...p, current: p.number }));
      return;
    }

    let rafId;
    let started = false;

    const animate = (startTs) => {
      const tick = (ts) => {
        const elapsed = ts - startTs;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = p.number * eased;
        setDisplay(formatValue({ ...p, current }));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animate(performance.now());
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [rawValue, duration]);

  return { ref, display };
}
