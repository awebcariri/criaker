import { useRef, useState } from "react";
import { MessageCircle, Play } from "lucide-react";
import type { Testimonial } from "@/data/site";

export function TestimonialVideoCard({ testimonial }: { testimonial: Testimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.error("Erro ao reproduzir o vídeo:", e);
          setError(true);
        });
      }
    } else {
      video.pause();
    }
  };

  return (
    <article className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-card">
      <video
        ref={videoRef}
        src={testimonial.video}
        poster={testimonial.poster}
        preload="none"
        playsInline
        controls={playing}
        onClick={playing ? undefined : toggle}
        onPlay={() => {
          setPlaying(true);
          setError(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        aria-label={`Depoimento de ${testimonial.title}`}
        className="size-full bg-background object-contain"
      />

      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`Assistir depoimento de ${testimonial.title}`}
          className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-background via-background/55 to-transparent p-5 text-left transition-opacity duration-300 sm:p-7"
        >
          <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-primary/40 bg-primary/15 text-primary shadow-premium backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:size-18">
            <Play aria-hidden="true" className="ml-0.5 size-5 fill-current sm:size-6" />
          </span>
          <span className="mb-2.5 flex items-center gap-2 font-subtitle text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs">
            <MessageCircle aria-hidden="true" className="size-3.5" /> {testimonial.kind}
          </span>
          <h3 className="text-2xl font-bold sm:text-3xl">{testimonial.title}</h3>

          {error && (
            <p className="mt-2 text-xs text-red-500 font-bold bg-background/80 p-1 rounded">
              Formato de vídeo não suportado pelo seu navegador.
            </p>
          )}
        </button>
      )}
    </article>
  );
}
