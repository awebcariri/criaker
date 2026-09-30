import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CTASection, PageHero } from "@/components/site/ui-bits";

export const Route = createFileRoute("/pacotes")({
  component: PacotesPage,
  head: () => ({
    meta: [
      { title: "Pacotes | CriAker" },
      { name: "description", content: "Três formatos de parceria — Start, Pro e Master. A CriAker tem a estrutura certa para acompanhar sua marca em cada momento." },
      { property: "og:title", content: "Pacotes | CriAker" },
      { property: "og:description", content: "Três formatos de parceria. Uma mesma missão: fazer sua marca avançar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://criaker.lovable.app/pacotes" }],
  }),
});

const packages = [
  {
    name: "Start",
    description: "Para marcas que estão começando a estruturar sua presença e precisam de direção para dar os primeiros passos com estratégia.",
    featured: false,
  },
  {
    name: "Pro",
    description: "Para marcas que já estão em movimento e querem uma comunicação mais estratégica, consistente e profissional.",
    featured: true,
  },
  {
    name: "Master",
    description: "Para marcas que querem uma atuação completa da CriAker, unindo estratégia, criatividade e execução para potencializar seu posicionamento.",
    featured: false,
  },
] as const;

function PacotesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pacotes"
        title="Três formatos"
        accent="de parceria."
        copy="Sua marca está em um momento. A CriAker tem a estrutura certa para acompanhá-la."
      />
      <section className="bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-3xl border p-8 sm:p-10 ${
                pkg.featured ? "border-primary/60 bg-card/60" : "border-border bg-card/40"
              }`}
            >
              <p className="font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">Pacote 0{i + 1}</p>
              <h2 className="mt-4 text-4xl font-bold uppercase tracking-wide sm:text-5xl">{pkg.name}</h2>
              <span aria-hidden="true" className={`mt-6 h-px w-full ${pkg.featured ? "bg-primary/60" : "bg-border"}`} />
              <p className="mt-6 font-subtitle text-base leading-relaxed text-muted-foreground">{pkg.description}</p>
            </motion.article>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-2xl text-center font-subtitle text-lg leading-relaxed sm:mt-20 sm:text-xl">
          Três formatos de parceria. Uma mesma missão: <span className="italic text-primary">fazer sua marca avançar.</span>
        </p>
      </section>
      <CTASection />
    </>
  );
}
