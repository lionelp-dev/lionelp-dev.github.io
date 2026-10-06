import { type CSSProperties, useState } from "react";
import { cn } from "../../lib/utils";
import { Typography } from "../Typography";
import { BrowserFrame } from "./BrowserFrame";

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
        <BrowserFrame title={caption}>
          <div className="relative min-h-0 flex-1">
            {!isLoaded && !hasError ? (
              <div className="skeleton absolute inset-0 h-full w-full" />
            ) : null}
            {hasError ? (
              <div className="flex h-full items-center justify-center p-4 text-center">
                <Typography as="p" variant="caption-muted">
                  Aperçu indisponible
                </Typography>
              </div>
            ) : (
              <img
                className={cn(
                  "h-full w-full object-cover object-top transition-opacity duration-200",
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
        </BrowserFrame>
      ) : (
        <>
          {!isLoaded && !hasError ? (
            <div className="skeleton absolute inset-0 h-full w-full" />
          ) : null}
          {hasError ? (
            <div className="flex h-full min-h-32 items-center justify-center p-4 text-center">
              <Typography as="p" variant="caption-muted">
                Aperçu indisponible
              </Typography>
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
