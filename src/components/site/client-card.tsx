import { Instagram } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Client } from "@/data/site";
import { SmartImage } from "./smart-image";

export function ClientCard({ client, priority = false }: { client: Client; priority?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="group relative h-auto min-h-44 w-full flex-col items-stretch justify-between overflow-hidden rounded-lg border border-client-panel-foreground/10 bg-client-panel p-3 text-client-panel-foreground shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-client-panel hover:shadow-premium sm:min-h-56 sm:p-5">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-primary transition-transform duration-300 group-hover:scale-x-100 sm:scale-x-0" />
          <span className="flex h-28 w-full items-center justify-center overflow-hidden sm:h-36">
            <SmartImage src={client.logo} alt={`Logo ${client.name}`} width="720" height="540" sizes="(max-width: 640px) 45vw, 22vw" priority={priority} wrapperClassName="size-full" className="size-full object-contain duration-300 group-hover:scale-[1.035]" />
          </span>
          <span className="flex w-full items-center justify-between gap-2 border-t border-client-panel-foreground/10 pt-3 font-subtitle text-[10px] font-bold uppercase tracking-[0.1em] sm:text-xs">
            <span>Desde {client.since}</span>
            <ArrowRight aria-hidden="true" className="size-4 shrink-0 text-primary" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[88dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg border-border bg-card p-0">
        <div className="flex min-h-44 items-center justify-center bg-client-panel p-5 sm:p-7">
          <img src={client.logo} alt={`Logo ${client.name}`} width="720" height="540" decoding="async" className="max-h-40 w-full object-contain" />
        </div>
        <div className="space-y-6 p-6 sm:p-8">
          <DialogHeader>
            <p className="font-subtitle text-xs font-bold uppercase tracking-[0.16em] text-primary">Parceria desde {client.since}</p>
            <DialogTitle className="text-3xl font-bold sm:text-4xl">{client.name}</DialogTitle>
            <DialogDescription className="font-subtitle leading-relaxed">
              {client.description}
            </DialogDescription>
          </DialogHeader>
          {client.instagram && (
            <Button asChild className="w-full rounded-full sm:w-auto">
              <a href={client.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram aria-hidden="true" /> Ver Instagram
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
