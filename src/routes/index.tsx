import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientCard } from "@/components/site/client-card";
import { CTASection, SectionIntro } from "@/components/site/ui-bits";
import { SmartImage } from "@/components/site/smart-image";
import { clients, services, WHATSAPP_URL } from "@/data/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "CriAker | Especialistas em Posicionamento de Marcas" },
      { name: "description", content: "Há quase 10 anos, a CriAker posiciona marcas para além do digital com estratégia, criação, vídeos, eventos e resultados." },
      { property: "og:title", content: "CriAker | Especialistas em Posicionamento de Marcas" },
      { property: "og:description", content: "Estratégia, criação e resultados para marcas que querem ser referência." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://criaker.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://criaker.lovable.app/" }],
  }),
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  return (
    <section ref={ref} className="relative flex min-h-[calc(100svh-1rem)] items-center overflow-hidden bg-background px-5 pb-28 pt-28 sm:px-8 sm:pb-32">
      <div className="mx-auto w-full max-w-7xl text-center">
        <motion.div style={{ y }}>
          <p className="mb-5 font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">Há quase 10 anos posicionando marcas para além do digital</p>
          <h1 className="mx-auto mb-5 max-w-5xl text-balance text-[clamp(2.45rem,10.5vw,4.25rem)] font-bold leading-[0.96] sm:mb-7 sm:text-6xl md:text-7xl lg:text-8xl">
            Muito além de uma agência. <span className="italic text-primary">Especialistas em posicionamento.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-subtitle text-base leading-relaxed text-muted-foreground sm:text-lg">
            Transformamos estratégia em comunicação, experiências e resultados.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="glow-primary min-h-14 w-full rounded-full px-8 text-base font-bold sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Se destaque agora <ArrowRight aria-hidden="true" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-14 w-full rounded-full px-8 text-base font-bold sm:w-auto">
              <Link to="/servicos">Conhecer os serviços</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center border-b-8 border-primary bg-primary/15 px-4 sm:h-20">
        <p className="text-center font-subtitle text-sm font-bold uppercase tracking-[0.14em] text-foreground sm:text-xl">Estratégia · Criação · Resultados</p>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section aria-labelledby="jornada-title" className="border-t border-border bg-background px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <SmartImage
          src="/assets/jornada-diretoras.webp"
          smallSrc="/assets/jornada-diretoras-480.webp"
          alt="Társila Santana e Rita Soares, CEO e diretoras da CriAker, no jardim da agência"
          sizes="(min-width: 1024px) 45vw, 90vw"
          wrapperClassName="overflow-hidden rounded-3xl border border-border/60"
          className="h-full w-full object-cover"
        />
        <div>
          <h2 id="jornada-title" className="text-balance text-3xl font-bold leading-tight sm:text-5xl">
            Criando de todas as formas <span className="italic text-primary">e em todos os lugares.</span>
          </h2>
          <p className="mt-5 font-subtitle text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sob a liderança de Társila Santana e Rita Soares, a CriAker segue construindo marcas que são percebidas, reconhecidas e lembradas.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-7 min-h-12 rounded-full px-7">
            <Link to="/equipe" hash="jornada">Conheça nossa história <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Journey />

      <section className="border-t border-border bg-background px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Posicionamento <span className="italic text-primary">de ponta a ponta.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-subtitle text-base text-muted-foreground sm:text-lg">
            Estratégia · Criação · Vídeo · Eventos
          </p>
          <Button asChild variant="outline" size="lg" className="mt-7 min-h-12 rounded-full px-7">
            <Link to="/servicos">Ver os serviços <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-background px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold sm:text-5xl">
            Nossos <span className="italic text-primary">clientes.</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {clients.slice(0, 4).map((client) => <ClientCard key={client.name} client={client} priority />)}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="min-h-12 rounded-full px-7">
              <Link to="/clientes">Ver todos os clientes <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <blockquote className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
            <p className="text-balance text-2xl font-bold leading-tight sm:text-4xl">
              “O mercado não lembra de quem apenas aparece. <span className="italic text-primary">Lembra de quem se posiciona.</span>”
            </p>
          </blockquote>
        </div>
      </section>


      <CTASection />
    </>
  );
}
