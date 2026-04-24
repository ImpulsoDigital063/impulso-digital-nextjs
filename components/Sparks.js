"use client";

/**
 * Sparks verticais — 5 linhas luminosas subindo no fundo (técnica Gravyx).
 * Paleta híbrida Impulso: verde esmeralda + cyan accent.
 * Desabilitado em mobile via CSS (max-width: 640px).
 */
export default function Sparks() {
  const sparks = [
    { width: 1, height: "15vh", left: "7%",  delay: 0,   duration: 4,   color: "#10b981", opacity: 1,   shadow: "#10b981" },
    { width: 2, height: "10vh", left: "25%", delay: 2,   duration: 5,   color: "#22D3EE", opacity: 0.7, shadow: "#22D3EE" },
    { width: 2, height: "12vh", left: "46%", delay: 0.5, duration: 4.5, color: "#34d399", opacity: 1,   shadow: "#34d399" },
    { width: 1, height: "18vh", left: "65%", delay: 3,   duration: 6,   color: "#0EA5E9", opacity: 0.8, shadow: "#0EA5E9" },
    { width: 2, height: "8vh",  left: "85%", delay: 1.8, duration: 4.2, color: "#22D3EE", opacity: 0.6, shadow: "#22D3EE" },
  ];

  return (
    <div
      className="sparks-container"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        mixBlendMode: "screen",
        opacity: 0.55,
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      {sparks.map((s, i) => (
        <div
          key={i}
          className="animate-spark-rise"
          style={{
            position: "absolute",
            bottom: "-25%",
            left: s.left,
            width: `${s.width}px`,
            height: s.height,
            background: `linear-gradient(to top, transparent, ${s.color}, #fff)`,
            boxShadow: `0 0 10px ${s.shadow}`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
