import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/site";
import { TestimonialVideoCard } from "./testimonial-video-card";

export function TestimonialCarousel() {
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

  const count = testimonials.length;

  return (
    <div>
      <div className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <p className="min-w-0 font-subtitle text-sm text-muted-foreground" aria-live="polite">
          <span className="font-bold text-foreground">{String(current + 1).padStart(2, "0")}</span>
          <span aria-hidden="true"> / </span>
          <span className="sr-only">de</span>
          {String(count).padStart(2, "0")}
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-11 rounded-full transition-transform duration-300 hover:-translate-x-0.5"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Ver depoimento anterior"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button
            type="button"
            size="icon"
            className="size-11 rounded-full transition-transform duration-300 hover:translate-x-0.5"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Ver próximo depoimento"
          >
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", duration: 28 }} aria-label="Depoimentos de clientes">
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.video} className="basis-[82%] pl-4 sm:basis-1/2 lg:basis-1/3">
              <TestimonialVideoCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
        {testimonials.map((testimonial, i) => (
          <span
            key={testimonial.video}
            className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${i === current ? "w-8 bg-primary" : "w-1.5 bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}
