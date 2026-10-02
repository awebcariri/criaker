import { createFileRoute } from "@tanstack/react-router";
import { SpecialistCarousel } from "@/components/site/specialist-carousel";
import { CTASection, PageHero } from "@/components/site/ui-bits";
import { SmartImage } from "@/components/site/smart-image";
import { ExpandableText } from "@/components/site/expandable-text";
import { journeyParagraphs, team } from "@/data/site";

export const Route = createFileRoute("/equipe")({
  component: EquipePage,
  head: () => ({
    meta: [
      { title: "Equipe | CriAker" },
      {
        name: "description",
        content:
          "Conheça as diretoras e os especialistas que unem visão, estratégia e execução na CriAker.",
      },
      { property: "og:title", content: "Equipe | CriAker" },
      {
        property: "og:description",
        content: "Estratégia, comunicação, design e vídeo: quem faz o posicionamento acontecer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://criaker.lovable.app/equipe" }],
  }),
});

function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Quem faz acontecer"
        title="Equipe de"
        accent="elite."
        copy="Especialistas que unem visão, estratégia e execução para levar marcas além do óbvio."
      />
      <section className="bg-background px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Diretoria</h2>
          <div className="space-y-6 sm:space-y-8">
            {team.slice(0, 2).map((member, index) => (
              <article
                key={member.name}
                className="grid min-h-[34rem] overflow-hidden rounded-2xl border border-border bg-card/45 lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-96 overflow-hidden lg:min-h-[38rem] ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <SmartImage
                    src={member.image}
                    smallSrc={member.imageSmall}
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    alt={member.name}
                    width="880"
                    height="1100"
                    priority={index === 0}
                    wrapperClassName="absolute inset-0 size-full"
                    className="absolute inset-0 size-full object-cover duration-500 hover:scale-[1.025]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card to-transparent lg:hidden"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="mb-4 font-subtitle text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Diretoria
                  </p>
                  <h2 className="text-4xl font-bold sm:text-5xl">{member.name}</h2>
                  <p className="mt-3 font-subtitle text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {member.role}
                  </p>
                  {member.quote && (
                    <p className="mt-6 max-w-xl font-subtitle text-lg font-semibold italic leading-relaxed sm:text-xl">
                      “{member.quote}”
                    </p>
                  )}
                  {member.bio && <ExpandableText text={member.bio} className="mt-5 max-w-xl" />}
                </div>
              </article>
            ))}
          </div>

          <div aria-hidden="true" className="section-divider my-16 sm:my-20" />

          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Time especialista</h2>
          <SpecialistCarousel members={team.slice(2)} />

          <div aria-hidden="true" className="section-divider my-16 sm:my-20" />

          <section
            id="jornada"
            aria-labelledby="jornada-title"
            className="mx-auto max-w-3xl scroll-mt-28"
          >
            <h2 id="jornada-title" className="mb-8 text-3xl font-bold sm:text-4xl">
              Nossa <span className="italic text-primary">jornada.</span>
            </h2>
            <div className="space-y-4 font-subtitle text-base leading-relaxed text-muted-foreground sm:text-lg">
              {journeyParagraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </div>
          </section>
        </div>
      </section>
      <CTASection />
    </>
  );
}
