export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 cursor-pointer select-none ${className}`}>
      {/* Ícone SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Fundo verde */}
        <rect width="40" height="40" rx="8" fill="#10b981" />
        {/* Seta branca para cima-direita */}
        <path
          d="M12 28 L28 12 M18 12 H28 V22"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Texto */}
      <div className="flex flex-col leading-none">
        <span className="text-white font-extrabold text-lg tracking-widest uppercase">
          IMPULSO
        </span>
        {/* Linha verde separadora */}
        <div className="h-[2px] w-full bg-emerald-400 my-[3px]" />
        <span className="text-emerald-400 font-semibold text-sm tracking-[0.3em] uppercase">
          DIGITAL
        </span>
      </div>
    </div>
  );
}
