/**
 * ╔══════════════════════════════════════════════════════╗
 * ║         IMPULSO DIGITAL — CONFIG DO CLIENTE          ║
 * ║   Edite apenas este arquivo para cada novo projeto   ║
 * ╚══════════════════════════════════════════════════════╝
 */

const cliente = {
  // ─── IDENTIDADE ───────────────────────────────────────
  nome:        "[NOME DO NEGÓCIO]",          // ex: "GB Nutrition"
  slogan:      "[SLOGAN DO NEGÓCIO]",         // ex: "Suplementos de qualidade"
  segmento:    "[SEGMENTO]",                  // ex: "Suplementos", "Moda", "Pet"
  cidade:      "[CIDADE — UF]",               // ex: "Palmas — TO"

  // ─── CONTATO ──────────────────────────────────────────
  whatsapp:    "[55 + DDD + NÚMERO]",         // ex: "5599991234567"
  instagram:   "[@ DO INSTAGRAM]",            // ex: "@gbnutrition"
  email:       "[EMAIL DO NEGÓCIO]",          // ex: "contato@gbnutrition.com.br"
  cnpj:        "[CNPJ OU CPF]",              // ex: "12.345.678/0001-90"

  // ─── HERO ─────────────────────────────────────────────
  heroTitulo:  "[HEADLINE PRINCIPAL]",        // ex: "Sua loja online pronta em 7 dias"
  heroSub:     "[SUBTÍTULO DO HERO]",         // ex: "Venda pela internet sem complicação"
  fotoHero:    "/images/foto-hero.jpg",       // coloque a foto em public/images/

  // ─── NÚMEROS / STATS ──────────────────────────────────
  stats: [
    { value: "[NÚMERO]", label: "[MÉTRICA]",  sub: "[DETALHE]" },
    { value: "[NÚMERO]", label: "[MÉTRICA]",  sub: "[DETALHE]" },
    { value: "[NÚMERO]", label: "[MÉTRICA]",  sub: "[DETALHE]" },
  ],

  // ─── COR PRINCIPAL ────────────────────────────────────
  // Após definir a cor, atualize também em tailwind.config.js → colors.primary
  corPrimaria: "[COR HEX]",                   // ex: "#10b981"

  // ─── LOGO ─────────────────────────────────────────────
  logoNavbar:  "/images/logo-navbar.svg",     // coloque a logo em public/images/
  logoAlt:     "[NOME DO NEGÓCIO]",

  // ─── SOBRE O DONO ─────────────────────────────────────
  donoNome:    "[NOME DO DONO]",
  donoCargo:   "[CARGO] — [NOME DO NEGÓCIO]",
  donoBio:     "[HISTÓRIA DO DONO EM 2-3 PARÁGRAFOS]",
  fotoDono:    "/images/foto-dono.jpg",       // coloque a foto em public/images/

  // ─── RODAPÉ ───────────────────────────────────────────
  anoFundacao: new Date().getFullYear(),
};

export default cliente;
