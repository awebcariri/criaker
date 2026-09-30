import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, REVIEWS_URL, WHATSAPP_URL } from "@/data/site";
import { focus, LOGO } from "./ui-bits";

const pages = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Pacotes", to: "/pacotes" },
  { label: "Clientes", to: "/clientes" },
  { label: "Equipe", to: "/equipe" },
  { label: "Contato", to: "/contato" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-8 sm:px-8 sm:pt-10 lg:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 text-center">
        <img src={LOGO} alt="Criaker" width="640" height="456" loading="lazy" decoding="async" className="h-8 w-auto sm:h-9" />

        <nav aria-label="Rodapé" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-subtitle text-xs text-muted-foreground sm:text-sm">
          {pages.map((page) => (
            <Link key={page.to} to={page.to} className="hover:text-primary">
              {page.label}
            </Link>
          ))}
          <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Avaliações</a>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-subtitle text-xs text-muted-foreground">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">+55 (88) 99203-9906</a>
          <a href="mailto:criaker@criaker.com.br" className="hover:text-primary">criaker@criaker.com.br</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Criaker" className={`text-muted-foreground hover:text-primary ${focus}`}>
            <Instagram aria-hidden="true" className="size-4" />
          </a>
        </div>

        <p className="w-full border-t border-border pt-4 font-subtitle text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Criaker. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
