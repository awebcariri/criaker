import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Instagram, Mail, MapPin, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/ui-bits";
import { INSTAGRAM_URL, REVIEWS_URL, WHATSAPP_URL } from "@/data/site";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato | CriAker" },
      { name: "description", content: "Fale com a CriAker por WhatsApp, e-mail ou Instagram. Juazeiro do Norte, CE." },
      { property: "og:title", content: "Contato | CriAker" },
      { property: "og:description", content: "Vamos conversar sobre o posicionamento da sua marca." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://criaker.lovable.app/contato" }],
  }),
});

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+55 (88) 99203-9906", href: WHATSAPP_URL, external: true },
  { icon: Mail, label: "E-mail", value: "criaker@criaker.com.br", href: "mailto:criaker@criaker.com.br", external: false },
  { icon: Instagram, label: "Instagram", value: "@criaker", href: INSTAGRAM_URL, external: true },
  { icon: Star, label: "Avaliações no Google", value: "Ver o que dizem sobre nós", href: REVIEWS_URL, external: true },
];

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Vamos conversar"
        title="Fale com a"
        accent="CriAker."
        copy="Conte o desafio da sua marca. Respondemos rápido e já saímos do primeiro contato com direção."
      />
      <section className="bg-background px-5 py-12 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-10">
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/40">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 px-4 py-3.5 transition-colors duration-300 hover:bg-primary/5 sm:gap-4 sm:px-5 sm:py-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/25 bg-primary/10 text-primary sm:size-10">
                    <channel.icon aria-hidden="true" className="size-4 sm:size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-subtitle text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">{channel.label}</span>
                    <span className="block truncate font-subtitle text-sm font-bold sm:text-base">{channel.value}</span>
                  </span>
                  {channel.external && <ExternalLink aria-hidden="true" className="size-4 shrink-0 text-primary" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-border bg-card/30 p-5 sm:p-7">
            <h2 className="text-2xl font-bold sm:text-3xl">Onde estamos</h2>
            <p className="mt-3 flex items-start gap-2.5 font-subtitle text-sm leading-relaxed text-muted-foreground sm:text-base">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
              Juazeiro do Norte, Ceará — atendendo marcas de todo o Brasil.
            </p>
            <Button asChild size="lg" className="glow-primary mt-6 min-h-13 w-full rounded-full text-sm font-bold sm:text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Começar agora no WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
