import "./globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/images/icon-256.png",
  },
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '922629477230487');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=922629477230487&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
