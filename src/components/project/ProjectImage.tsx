import { useState } from "react";
import { cn } from "../../lib/utils";

type ProjectImageProps = {
  src: string;
  title: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
};

export function ProjectImage({
  src,
  title,
  alt,
  className,
  imageClassName,
}: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl border border-base-content/15 bg-base-200 shadow-sm",
        className,
      )}
    >
      {!isLoaded && !hasError ? (
        <div className="skeleton absolute inset-0 h-full w-full" />
      ) : null}
      {hasError ? (
        <div className="flex h-full min-h-32 items-center justify-center p-4 text-center text-sm text-base-content/60">
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
  );
}
