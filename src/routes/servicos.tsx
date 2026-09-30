import { createFileRoute } from "@tanstack/react-router";
import { ServiceCard } from "@/components/site/service-card";
import { CTASection, PageHero } from "@/components/site/ui-bits";
import { services } from "@/data/site";

export const Route = createFileRoute("/servicos")({
  component: ServicosPage,
  head: () => ({
    meta: [
      { title: "Serviços | Criaker" },
      { name: "description", content: "Planejamento estratégico, criação e branding, produção de vídeos, eventos, performance digital e ações de impacto." },
      { property: "og:title", content: "Serviços | Criaker" },
      { property: "og:description", content: "Soluções de alto impacto para marcas que querem ocupar espaço no mercado." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://criaker.lovable.app/servicos" }],
  }),
});

function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        title="Soluções de"
        accent="alto impacto."
        copy="Criamos campanhas, conteúdos, vídeos, eventos e ações que ajudam marcas a ocupar espaço, gerar conexão e construir relevância."
      />
      <section className="bg-background px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
