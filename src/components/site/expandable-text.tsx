import { useState } from "react";

/** Mostra o texto completo no computador; no celular, recolhe atrás de "Ler mais". */
export function ExpandableText({ text, className = "" }: { text: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <p
        className={`font-subtitle text-sm leading-relaxed text-muted-foreground sm:text-base ${open ? "" : "line-clamp-3 lg:line-clamp-none"}`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-2 font-subtitle text-xs font-bold uppercase tracking-[0.14em] text-primary lg:hidden"
      >
        {open ? "Ler menos" : "Ler mais"}
      </button>
    </div>
  );
}
