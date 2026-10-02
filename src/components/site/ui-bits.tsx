import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/data/site";

export const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const LOGO = "/assets/logo-final-criaker.webp";

export function SectionIntro({
  eyebrow,
  title,
  accent,
  copy,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
}) {
  return (
    <header className="mb-12 max-w-2xl sm:mb-16 lg:mb-20">
      <p className="mb-4 font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold leading-[0.98] sm:text-5xl lg:text-6xl">
        {title}
        <br />
        <span className="italic text-primary">{accent}</span>
      </h2>
      <p className="mt-6 max-w-xl font-subtitle text-base leading-relaxed text-muted-foreground sm:text-lg">
        {copy}
      </p>
    </header>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  copy,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
}) {
  return (
    <section className="border-b border-border bg-background px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance text-[clamp(2.4rem,9vw,4rem)] font-bold leading-[0.98] lg:text-7xl">
          {title} <span className="italic text-primary">{accent}</span>
        </h1>
        <p className="mt-6 max-w-2xl font-subtitle text-base leading-relaxed text-muted-foreground sm:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="border-t border-border bg-card/30 px-5 py-20 text-center sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-subtitle text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Vamos conversar
        </p>
        <h2 className="text-balance text-4xl font-bold leading-[0.98] sm:text-6xl">
          Sua marca está pronta para ser <span className="italic text-primary">referência</span>?
        </h2>
        <p className="mx-auto my-8 max-w-2xl font-subtitle text-base leading-relaxed text-muted-foreground sm:text-xl">
          A CriAker transforma potencial em autoridade. O próximo nível começa com um clique.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="glow-primary min-h-14 w-full rounded-full px-10 text-base font-bold sm:w-auto"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp <ArrowRight aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-h-14 w-full rounded-full px-10 text-base font-bold sm:w-auto"
          >
            <Link to="/contato">Ver formas de contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
