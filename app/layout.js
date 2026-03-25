import "./globals.css";

export const metadata = {
  title: "Impulso Digital — Transforme sua presença digital",
  description:
    "Criamos landing pages, lojas online e oferecemos consultoria digital para alavancar o seu negócio. Resultados reais a partir de R$299.",
  keywords:
    "landing page, loja online, consultoria digital, presença digital, marketing digital",
  authors: [{ name: "Impulso Digital" }],
  openGraph: {
    title: "Impulso Digital — Transforme sua presença digital",
    description:
      "Criamos landing pages, lojas online e consultoria digital para alavancar o seu negócio.",
    type: "website",
    locale: "pt_BR",
    siteName: "Impulso Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulso Digital",
    description: "Transforme sua presença digital com resultados reais.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
