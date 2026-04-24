"use client";

const parceiros = [
  {
    nome: "Shopify",
    cor: "#95BF47",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.75c-.018-.136-.136-.226-.254-.226s-2.405-.163-2.405-.163-.905-.996-1.268-1.313v20.996c.045.003.09.01.136.017zM10.686.513S9.491 1.01 8.76 1.24c-.046-.163-.118-.344-.209-.534C8.225.18 7.707-.127 7.093.053c-.018.009-.045.018-.063.027C6.956.035 6.84 0 6.713 0c-.489 0-.978.371-1.368.994-.271.435-.489.979-.616 1.558L3.03 3.037c-.633.199-.652.218-.734.815C2.251 4.302 0 21.67 0 21.67l15.219 2.309V.49c-.163-.01-.417.002-.533.023zM8.922 2.152c-.009.036-.571.172-1.232.371C7.889 1.703 8.197.96 8.524.78c.118.354.281.87.398 1.372zm-1.794.544c-.498.154-.96.3-1.467.453.145-.58.416-1.159.769-1.54.127.271.272.634.317 1.06zM6.94 0c.263 0 .489.073.679.209C7.337.253 7.065.4 6.849.633 6.523.969 6.243 1.531 6.089 2.11L4.758 2.52C5.083 1.323 5.908 0 6.94 0z"/>
      </svg>
    ),
  },
  {
    nome: "Yampi",
    cor: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    nome: "Melhor Envio",
    cor: "#3B82F6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    nome: "Next.js",
    cor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.088.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.573 4.714 20.366.92 15.9.288c-.317-.04-.649-.07-1.002-.088-.106-.007-.597-.012-1.326-.012zm3.843 7.237c.554 0 .98.013 1.067.035a1.67 1.67 0 01.842.517 1.68 1.68 0 01.364.842c.03.147.033.352.033 2.033 0 1.66-.003 1.886-.033 2.033-.07.35-.226.619-.47.84-.14.125-.28.215-.449.27-.162.052-.22.057-1.354.062l-1.165.006V7.237h1.165z"/>
      </svg>
    ),
  },
  {
    nome: "Vercel",
    cor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    ),
  },
  {
    nome: "Motoboy",
    cor: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a5 5 0 015 5v2H7V7a5 5 0 015-5z"/>
        <path d="M5 9h14l1 9H4l1-9z"/>
        <circle cx="8.5" cy="20.5" r="1.5"/>
        <circle cx="15.5" cy="20.5" r="1.5"/>
      </svg>
    ),
  },
  {
    nome: "Pix",
    cor: "#32BCAD",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.047 4.298a3.27 3.27 0 00-2.316.959l-3.11 3.109a1.05 1.05 0 01-1.482 0L7.03 5.257a3.27 3.27 0 00-2.317-.959H3.8l4.15 4.148a3.135 3.135 0 004.44 0l4.15-4.148h-.493zm-13.248.96a3.27 3.27 0 00-.959 2.316v.493l3.109 3.11a1.05 1.05 0 010 1.481l-3.11 3.11v.493a3.27 3.27 0 00.96 2.316l.124.124 4.386-4.387a3.135 3.135 0 000-4.44L3.924 5.134l-.125.124zm17.398 0l-.124-.124L16.686 9.52a3.135 3.135 0 000 4.44l4.387 4.387.124-.124a3.27 3.27 0 00.959-2.316v-.493l-3.11-3.11a1.05 1.05 0 010-1.481l3.11-3.11v-.493a3.27 3.27 0 00-.96-2.316zm-4.074 9.114a1.05 1.05 0 01-1.482 0l-3.11-3.11a1.05 1.05 0 00-1.481 0l-3.11 3.11a1.05 1.05 0 01-1.482 0l-.124.124 4.15 4.148a3.27 3.27 0 002.317.959h.493l4.149-4.148-.124-.124-.196.041z"/>
      </svg>
    ),
  },
  {
    nome: "Google",
    cor: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
];

export default function ParceirosBanner() {
  const items = [...parceiros, ...parceiros];

  return (
    <section className="py-8 md:py-12 bg-dark-card border-y border-dark-border overflow-hidden">
      <p className="text-center text-gray-600 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 md:mb-10 px-5">
        Tecnologias que integram nossos projetos
      </p>

      <div className="relative">
        {/* Gradient fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex" style={{ animation: "marquee 30s linear infinite" }}>
          {items.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 mx-6 sm:mx-10 flex-shrink-0 group cursor-default"
            >
              {/* Ícone */}
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: p.cor + "15",
                  border: `1px solid ${p.cor}25`,
                  boxShadow: `0 0 20px ${p.cor}10`,
                }}
              >
                <span style={{ color: p.cor }}>{p.icon}</span>
              </div>
              {/* Nome */}
              <span className="text-gray-500 font-semibold text-xs sm:text-sm group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {p.nome}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
