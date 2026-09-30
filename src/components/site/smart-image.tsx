import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  /** Smaller variant used on narrow screens. */
  smallSrc?: string | undefined;
  smallWidth?: number | undefined;
  sizes?: string | undefined;
  priority?: boolean | undefined;
  /** Extra classes applied to the wrapper that holds the placeholder. */
  wrapperClassName?: string | undefined;
};

/**
 * Image with a lightweight skeleton placeholder, responsive srcset and
 * lazy loading by default. Fades in once decoded to avoid layout flashes.
 */
export function SmartImage({
  src,
  alt,
  smallSrc,
  smallWidth = 480,
  sizes = "100vw",
  priority = false,
  className = "",
  wrapperClassName = "",
  ...rest
}: SmartImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Cached images can finish before React attaches the onLoad handler.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, [src]);

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-muted/25 transition-opacity duration-500 ${loaded ? "opacity-0" : "animate-pulse opacity-100"}`}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        {...(smallSrc ? { srcSet: `${smallSrc} ${smallWidth}w, ${src} 1200w`, sizes } : {})}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        {...rest}
      />
    </span>
  );
}
