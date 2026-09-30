import { useRef, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const order = ["/", "/servicos", "/pacotes", "/clientes", "/equipe", "/contato"];
const ease = [0.22, 1, 0.36, 1] as const;

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname, loadedAt, isLoading } = useRouterState({
    select: (s) => ({
      pathname: s.resolvedLocation?.pathname ?? s.location.pathname,
      loadedAt: s.loadedAt,
      isLoading: s.isLoading,
    }),
  });
  const reduceMotion = useReducedMotion();
  const prev = useRef(pathname);
  const dir = useRef(1);

  if (prev.current !== pathname) {
    dir.current = order.indexOf(pathname) >= order.indexOf(prev.current) ? 1 : -1;
    prev.current = pathname;
  }

  if (reduceMotion) return <>{children}</>;
  const d = dir.current;

  return (
    <>
      <motion.div
        key={loadedAt}
        initial={{ opacity: 0.72, x: 10 * d }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.22, ease } }}
        className="overflow-x-clip"
      >
        {children}
      </motion.div>
      <AnimatePresence initial={false}>
        {isLoading && (
          <motion.div
            key="route-loading"
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 0.82, transition: { duration: 0.65, ease } }}
            exit={{ scaleX: 1, opacity: 0, transition: { duration: 0.18 } }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
