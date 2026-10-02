import { ExpandableText } from "./expandable-text";
import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { TeamMember } from "@/data/site";
import { SmartImage } from "./smart-image";

type SpecialistCarouselProps = {
  members: readonly TeamMember[];
};

export function SpecialistCarousel({ members }: SpecialistCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div>
      <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 font-subtitle text-sm text-muted-foreground" aria-live="polite">
          <span className="font-bold text-foreground">{String(current + 1).padStart(2, "0")}</span>
          <span aria-hidden="true"> / </span>
          <span className="sr-only">de</span>
          {String(members.length).padStart(2, "0")}
          <span className="ml-3 hidden sm:inline">{members[current]?.role}</span>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-11 rounded-full transition-transform duration-300 hover:-translate-x-0.5"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Ver especialista anterior"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            type="button"
            size="icon"
            className="size-11 rounded-full transition-transform duration-300 hover:translate-x-0.5"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Ver próximo especialista"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", duration: 28 }}
        aria-label="Especialistas da CriAker"
      >
        <CarouselContent className="-ml-0">
          {members.map((member, index) => (
            <CarouselItem
              key={member.name}
              className="pl-0"
              aria-label={`${index + 1} de ${members.length}: ${member.name}`}
            >
              <article className="grid overflow-hidden rounded-2xl border border-border bg-card/35 md:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.22fr)]">
                <div className="relative aspect-[4/3] min-h-0 overflow-hidden md:aspect-auto md:min-h-[34rem]">
                  <SmartImage
                    src={member.image}
                    smallSrc={member.imageSmall}
                    sizes="(max-width: 767px) 100vw, 40vw"
                    alt={member.name}
                    width="720"
                    height="900"
                    priority={index === 0}
                    wrapperClassName="absolute inset-0 size-full"
                    className="absolute inset-0 size-full object-cover duration-700 ease-out hover:scale-[1.025]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card to-transparent md:hidden"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 md:p-12 lg:p-14">
                  <p className="font-subtitle text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {member.role}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{member.name}</h3>
                  {member.quote && (
                    <p className="mt-6 font-subtitle text-lg font-semibold italic leading-relaxed sm:text-xl">
                      “{member.quote}”
                    </p>
                  )}
                  {member.bio && <ExpandableText text={member.bio} className="mt-4 max-w-2xl" />}
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
        {members.map((member, index) => (
          <span
            key={member.name}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${index === current ? "w-8 bg-primary" : "w-1.5 bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}
