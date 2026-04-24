import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog — Impulso Digital",
  description:
    "Artigos sobre landing pages, SEO, lojas online e marketing digital para alavancar o seu negócio.",
};

const categoryColors = {
  "Landing Page": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "Negócios": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  SEO: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark pt-24 pb-20">
        {/* Header */}
        <section className="container mx-auto px-6 text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Conteúdo que{" "}
            <span className="text-accent">gera resultado</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Estratégias práticas de presença digital, SEO e conversão para pequenos negócios.
          </p>
        </section>

        {/* Posts grid */}
        <section className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-accent to-primary-dark" />

                <div className="flex flex-col flex-1 p-6">
                  {/* Category + read time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        categoryColors[post.category] || categoryColors["Negócios"]
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime} de leitura</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                        {post.author.split(" ")[0][0]}
                      </div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-600">
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mt-20 text-center">
          <div className="bg-dark-card border border-dark-border rounded-2xl p-10 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-3 font-semibold">
              Pronto para o próximo passo?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Transforme seu negócio com um site que converte
            </h3>
            <a
              href="https://wa.me/556392920080?text=Ol%C3%A1!%20Li%20o%20blog%20e%20quero%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Falar com especialista
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
