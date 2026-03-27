"use client";

const clientes = [
  { iniciais: "GB", nome: "GB Nutrition", cor: "#10b981" },
  { iniciais: "EV", nome: "EV Suplementos", cor: "#f59e0b" },
  { iniciais: "RM", nome: "R&M Moda", cor: "#8b5cf6" },
  { iniciais: "FS", nome: "FS Estética", cor: "#ec4899" },
  { iniciais: "AT", nome: "AT Fitness", cor: "#3b82f6" },
  { iniciais: "DP", nome: "D&P Confeitaria", cor: "#f97316" },
  { iniciais: "LC", nome: "LC Beleza", cor: "#a855f7" },
  { iniciais: "BR", nome: "BR Sports", cor: "#10b981" },
  { iniciais: "JP", nome: "JP Modas", cor: "#06b6d4" },
  { iniciais: "CN", nome: "CN Nutrition", cor: "#84cc16" },
  { iniciais: "VT", nome: "VT Cosméticos", cor: "#f43f5e" },
  { iniciais: "MK", nome: "MK Store", cor: "#eab308" },
];

export default function LogosClientes() {
  const items = [...clientes, ...clientes];

  return (
    <section className="py-14 bg-dark-card border-y border-dark-border overflow-hidden">
      <p className="text-center text-gray-600 text-xs uppercase tracking-[0.2em] mb-10">
        Negócios que já deram o impulso
      </p>

      <div className="relative">
        {/* Gradient fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />

        {/* Marquee — direção oposta ao de parceiros */}
        <div
          className="flex"
          style={{ animation: "marqueeReverse 35s linear infinite" }}
        >
          {items.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-4 mx-8 flex-shrink-0 group cursor-default"
            >
              {/* Monograma */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: c.cor + "12",
                  border: `1px solid ${c.cor}30`,
                  boxShadow: `0 0 16px ${c.cor}08`,
                }}
              >
                <span
                  className="text-base font-black tracking-tight leading-none"
                  style={{ color: c.cor }}
                >
                  {c.iniciais}
                </span>
              </div>

              {/* Nome */}
              <span className="text-gray-600 font-semibold text-sm group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {c.nome}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
