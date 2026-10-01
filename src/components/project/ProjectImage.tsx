import { type CSSProperties, useState } from "react";
import { cn } from "../../lib/utils";

type ProjectImageProps = {
  src: string;
  title: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  imageClassName?: string;
  caption?: string;
};

export function ProjectImage({
  src,
  title,
  alt,
  className,
  style,
  imageClassName,
  caption,
}: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl border border-base-content/15 bg-base-200 shadow-sm",
        className,
      )}
      style={style}
    >
      {caption ? (
        <div className="flex h-full min-h-32 flex-col overflow-hidden rounded-lg bg-base-100">
          <div className="relative flex shrink-0 items-center justify-center px-4 py-3 text-base-content/70 text-xs">
            <div
              className="absolute left-4 flex gap-1"
              aria-hidden="true"
            >
              <span className="size-1.5 rounded-full bg-base-content/20" />
              <span className="size-1.5 rounded-full bg-base-content/20" />
              <span className="size-1.5 rounded-full bg-base-content/20" />
            </div>
            {caption}
          </div>
          <div className="relative min-h-0 flex-1">
            {!isLoaded && !hasError ? (
              <div className="skeleton absolute inset-0 h-full w-full" />
            ) : null}
            {hasError ? (
              <div className="flex h-full items-center justify-center p-4 text-center text-base-content/60 text-sm">
                Aperçu indisponible
              </div>
            ) : (
              <img
                className={cn(
                  "h-full w-full object-cover object-center transition-opacity duration-200",
                  isLoaded ? "opacity-100" : "opacity-0",
                  imageClassName,
                )}
                src={src}
                alt={alt ?? `Aperçu du projet ${title}`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
              />
            )}
          </div>
        </div>
      ) : (
        <>
          {!isLoaded && !hasError ? (
            <div className="skeleton absolute inset-0 h-full w-full" />
          ) : null}
          {hasError ? (
            <div className="flex h-full min-h-32 items-center justify-center p-4 text-center text-base-content/60 text-sm">
              Aperçu indisponible
            </div>
          ) : (
            <img
              className={cn(
                "h-full w-full object-cover object-center transition-opacity duration-200",
                isLoaded ? "opacity-100" : "opacity-0",
                imageClassName,
              )}
              src={src}
              alt={alt ?? `Aperçu du projet ${title}`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}
        </>
      )}
    </div>
  );
}
