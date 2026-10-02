import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  Gem,
  Home,
  Instagram,
  MessageCircle,
  Sparkles,
  Users,
  UserRound,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { INSTAGRAM_URL, REVIEWS_URL, WHATSAPP_URL } from "@/data/site";
import { focus, LOGO } from "./ui-bits";

const links = [
  { label: "Serviços", to: "/servicos" },
  { label: "Pacotes", to: "/pacotes" },
  { label: "Clientes", to: "/clientes" },
  { label: "Equipe", to: "/equipe" },
  { label: "Contato", to: "/contato" },
] as const;

const mobileLinks = [
  { label: "Início", to: "/", icon: Home },
  { label: "Serviços", to: "/servicos", icon: Sparkles },
  { label: "Pacotes", to: "/pacotes", icon: Gem },
  { label: "Contato", to: "/contato", icon: MessageCircle },
] as const;

export function Navbar() {
  const pathname = useRouterState({
    select: (st) => st.resolvedLocation?.pathname ?? st.location.pathname,
  });
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 120 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Navegação principal"
      className={`glass fixed inset-x-0 top-0 z-50 border-b border-border px-4 py-3 transition-transform duration-300 sm:px-8 sm:py-4 lg:translate-y-0 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Link
          to="/"
          aria-label="Início — CriAker"
          className={`flex h-12 min-w-0 items-center overflow-hidden sm:h-14 ${focus}`}
        >
          <img
            src={LOGO}
            alt="CriAker"
            width="640"
            height="456"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center justify-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              preload="render"
              activeProps={{ className: "text-primary" }}
              className={`relative py-1 font-subtitle text-sm font-semibold transition-colors hover:text-primary ${focus}`}
            >
              {link.label}
              {pathname.startsWith(link.to) && (
                <motion.span
                  layoutId="desktop-nav-underline"
                  className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
            </Link>
          ))}
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 font-subtitle text-sm font-semibold hover:text-primary ${focus}`}
          >
            Avaliações <ExternalLink aria-hidden="true" className="size-3" />
          </a>
        </div>

        {/* Desktop Right Side + Mobile Hamburger */}
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild className="hidden rounded-full px-6 lg:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Fale conosco
            </a>
          </Button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da CriAker"
            className={`hidden min-h-11 min-w-11 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary lg:flex ${focus}`}
          >
            <Instagram aria-hidden="true" className="size-5" />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu principal">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pt-12">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu de Navegação</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-semibold hover:text-primary"
                >
                  Avaliações <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
              <div className="mt-auto flex flex-col gap-4 pb-8">
                <Button asChild className="w-full rounded-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Fale conosco
                  </a>
                </Button>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <Instagram aria-hidden="true" className="size-5" /> Siga no Instagram
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export function MobileNavigation() {
  const pathname = useRouterState({
    select: (st) => st.resolvedLocation?.pathname ?? st.location.pathname,
  });
  return (
    <nav
      aria-label="Navegação móvel"
      className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 mx-auto max-w-sm rounded-2xl border border-border bg-card/80 p-1.5 shadow-premium backdrop-blur-xl lg:hidden"
    >
      <div className="grid grid-cols-4 gap-1">
        {mobileLinks.map(({ label, to, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              preload="render"
              className={`relative flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 font-subtitle text-xs font-semibold transition-colors duration-300 active:scale-95 ${active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {active && (
                <motion.span
                  layoutId="mobile-nav-pill"
                  className="absolute inset-0 rounded-xl bg-primary"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <motion.span
                className="relative z-10 flex flex-col items-center gap-1"
                animate={{ y: active ? -1 : 0, scale: active ? 1.04 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <Icon aria-hidden="true" className="size-5 shrink-0" />
                <span className="truncate">{label}</span>
              </motion.span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
