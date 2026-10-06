import { type CSSProperties, useState } from "react";
import { cn } from "../../lib/utils";
import { SlideUpIn } from "../SlideUpIn";
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
  previewAnimation?: "blur";
};

export function ProjectImage({
  src,
  title,
  alt,
  className,
  style,
  imageClassName,
  caption,
  previewAnimation,
}: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const usesBlurAnimation = previewAnimation === "blur";

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl border border-base-content/15 bg-base-200 shadow-sm",
        className,
      )}
      style={style}
    >
      {caption ? (
        <BrowserFrame
          title={
            usesBlurAnimation ? (
              <SlideUpIn
                as="span"
                key={`${src}-caption`}
                delay={0}
                duration={250}
                variant="blur"
              >
                <Typography
                  as="span"
                  variant="p6"
                  className="text-base-content/70 text-xs! leading-none!"
                >
                  {caption}
                </Typography>
              </SlideUpIn>
            ) : (
              caption
            )
          }
        >
          <div className="relative min-h-0 flex-1">
            {!isLoaded && !hasError ? (
              <div className="skeleton absolute inset-0 h-full w-full" />
            ) : null}
            {hasError ? (
              <div className="flex h-full items-center justify-center p-4 text-center">
                <Typography as="p" variant="p6">
                  Aperçu indisponible
                </Typography>
              </div>
            ) : (
              <PreviewImage
                src={src}
                title={title}
                alt={alt}
                isLoaded={isLoaded}
                imageClassName={imageClassName}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                animate={usesBlurAnimation}
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
              <Typography as="p" variant="p6">
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

type PreviewImageProps = {
  src: string;
  title: string;
  alt?: string;
  isLoaded: boolean;
  imageClassName?: string;
  onLoad: () => void;
  onError: () => void;
  animate: boolean;
};

function PreviewImage({
  src,
  title,
  alt,
  isLoaded,
  imageClassName,
  onLoad,
  onError,
  animate,
}: PreviewImageProps) {
  const image = (
    <img
      className={cn(
        "h-full w-full object-cover object-top transition-opacity duration-200",
        isLoaded ? "opacity-100" : "opacity-0",
        imageClassName,
      )}
      src={src}
      alt={alt ?? `Aperçu du projet ${title}`}
      onLoad={onLoad}
      onError={onError}
    />
  );

  return animate ? (
    <SlideUpIn
      key={src}
      delay={250}
      duration={350}
      variant="blur"
      className="h-full [&>div]:h-full"
    >
      {image}
    </SlideUpIn>
  ) : (
    image
  );
}
