import { createFileRoute } from "@tanstack/react-router";
import { ClientCard } from "@/components/site/client-card";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";
import { CTASection, PageHero } from "@/components/site/ui-bits";
import { clients } from "@/data/site";

export const Route = createFileRoute("/clientes")({
  component: ClientesPage,
  head: () => ({
    meta: [
      { title: "Clientes | Criaker" },
      { name: "description", content: "Conheça as marcas que constroem posicionamento e resultados ao lado da Criaker, algumas desde 2021." },
      { property: "og:title", content: "Clientes | Criaker" },
      { property: "og:description", content: "Parcerias de anos com marcas que se posicionam no Cariri e além." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://criaker.lovable.app/clientes" }],
  }),
});

function ClientesPage() {
  return (
    <>
      <PageHero
        eyebrow="Parcerias que ocupam espaço"
        title="Nossos"
        accent="clientes."
        copy="Marcas que confiam em posicionamento consistente e constroem resultados ao lado da Criaker."
      />
      <section className="bg-card/20 px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-4 font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">Experiências reais</p>
            <h2 className="text-balance text-4xl font-bold leading-[0.98] sm:text-5xl lg:text-6xl">
              Quem vive a parceria <span className="italic text-primary">conta.</span>
            </h2>
            <p className="mt-6 max-w-xl font-subtitle text-base leading-relaxed text-muted-foreground sm:text-lg">
              Depoimentos reais de empresas que constroem posicionamento ao lado da Criaker.
            </p>
          </header>
          <TestimonialCarousel />

          <div aria-hidden="true" className="section-divider my-16 sm:my-24" />

          <header className="mb-10 max-w-2xl sm:mb-14">
            <p className="mb-4 font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">Parcerias de longo prazo</p>
            <h2 className="text-balance text-4xl font-bold leading-[0.98] sm:text-5xl lg:text-6xl">
              Marcas que escolheram <span className="italic text-primary">se posicionar.</span>
            </h2>
          </header>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {clients.map((client, index) => <ClientCard key={client.name} client={client} priority={index < 4} />)}
          </div>
          <blockquote className="mt-20 max-w-5xl border-l-2 border-primary pl-5 sm:mt-28 sm:pl-9">
            <p className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              “O mercado não lembra de quem apenas aparece. <span className="italic text-primary">Lembra de quem se posiciona.</span>”
            </p>
          </blockquote>
        </div>
      </section>
      <CTASection />
    </>
  );
}
