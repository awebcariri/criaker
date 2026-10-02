import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { Award, Calendar, Mic, Rocket, Target, Video } from "lucide-react";
import type { services } from "@/data/site";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  target: Target,
  rocket: Rocket,
  video: Video,
  calendar: Calendar,
  award: Award,
  mic: Mic,
};

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [near, setNear] = useState(false);
  const [active, setActive] = useState(false);
  const [lightSource, setLightSource] = useState(true);
  const Icon = icons[service.icon];

  // Small screens and data-saver connections get the compressed video file.
  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 1023px)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const slow = Boolean(connection?.saveData) || /2g|3g/.test(connection?.effectiveType ?? "");
    setLightSource(narrow || slow);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setNear(entry.isIntersecting);
        setActive(entry.isIntersecting);
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!active) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, [active, near]);
  return (
    <article>
      <div
        ref={containerRef}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card sm:aspect-[3/4]"
      >
        {service.video || service.videoMobile ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster={service.poster}
            className="size-full bg-card object-cover transition-opacity duration-700"
            style={{ opacity: active ? 1 : 0 }}
            aria-label={`Vídeo: ${service.title}`}
            src={near ? (lightSource ? service.videoMobile : service.video) : undefined}
          />
        ) : (
          <img
            src={service.poster}
            alt={service.title}
            className="size-full bg-card object-cover"
          />
        )}
      </div>
      <div className="mt-4 flex items-center gap-3 px-1">
        {Icon && <Icon aria-hidden="true" className="size-5 shrink-0 text-primary" />}
        <h3 className="font-display text-xl font-bold sm:text-2xl">{service.title}</h3>
      </div>
    </article>
  );
}
