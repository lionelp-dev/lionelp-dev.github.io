import { useState } from "react";

type ProjectImageProps = {
  src: string;
  title: string;
};

export function ProjectImage({ src, title }: ProjectImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-base-content/15 bg-base-200 shadow-sm">
      {!isLoaded ? <div className="skeleton absolute inset-0 h-full w-full" /> : null}
      <img
        className={`h-full w-full object-cover object-center transition-opacity duration-200 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={src}
        alt={`Aperçu du projet ${title}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </div>
  );
}
