import { ExternalLink, Smartphone } from "lucide-react";
import recipePreviewImage from "../../../assets/product-preview-1.png";
import aiPreviewImage from "../../../assets/product-preview-2.png";
import shoppingListPreviewImage from "../../../assets/product-preview-3.png";
import { GitHubIcon } from "../../../components/GitHubIcon";
import type { PersonalProject } from "../../../types/projects";

type PersonalProjectCardProps = {
  project: PersonalProject;
  titleId?: string;
};

const supportingFeatures = [
  {
    number: "05",
    title: "Création simplifiée par l’IA",
    description:
      "Recette préremplie depuis une idée, puis illustrée à la demande.",
    className: "md:pr-10 lg:col-span-12 lg:pr-0",
  },
  {
    number: "06",
    title: "Espaces collaboratifs",
    description:
      "Planification à plusieurs et partage des recettes et des listes de courses.",
    className:
      "max-md:border-t max-md:border-base-content/10 max-md:pt-5.5 md:border-l md:border-base-content/10 md:pl-10 lg:col-span-12",
  },
];

export function PersonalProjectCard({
  project,
  titleId,
}: PersonalProjectCardProps) {
  const features = [
    {
      number: "01",
      title: "Gestion des recettes",
      description: "Recherche, consultation et organisation des recettes.",
      image: recipePreviewImage,
      imageAlt: `Gestion des recettes dans ${project.name}`,
      className: "lg:col-span-15",
      imageClassName: "lg:h-[400px] xl:h-[650px]",
    },
    {
      number: "02",
      title: "Génération assistée par IA",
      description: "Création de recettes à partir d’une envie.",
      image: aiPreviewImage,
      imageAlt: `Génération assistée par IA dans ${project.name}`,
      className: "lg:col-span-8",
      imageClassName: "lg:h-[320px] xl:h-[340px]",
    },
    {
      number: "03",
      title: "Planification hebdomadaire",
      description: "Visualisation et organisation des repas sur la semaine.",
      image: project.image,
      imageAlt: `Planification hebdomadaire dans ${project.name}`,
      className: "lg:col-span-9",
      imageClassName: "lg:h-[320px] xl:h-[340px]",
    },
    {
      number: "04",
      title: "Liste de courses automatique",
      description: "Généré à partir des repas planifiés.",
      image: shoppingListPreviewImage,
      imageAlt: `Liste de courses automatique dans ${project.name}`,
      className: "lg:col-span-7",
      imageClassName: "lg:h-[320px] xl:h-[340px]",
    },
  ];

  const [primaryFeature, ...secondaryFeatures] = features;

  return (
    <article className="text-base-content">
      <div className="grid gap-y-5.75 lg:grid-cols-24 lg:items-start gap-13">
        <div className="flex min-w-0 flex-col items-start gap-5.75 pb-12 lg:col-span-9  flex-1 h-full justify-start">
          <div className="flex w-full flex-col gap-4 md:gap-2.5 ">
            <div className="flex flex-col gap-2.5">
              <h2
                id={titleId}
                className="font-serif-display text-5xl font-bold leading-18.75 tracking-[-0.0975em] -ml-[0.0975em] max-w-sm text-base-content md:text-6xl lg:text-[clamp(3.75rem,5.75vw,5.75rem)]"
              >
                {project.name}
              </h2>
              {project.period ? (
                <p className="text-xl leading-tight tracking-[-0.0425em] text-base-content/85 md:text-3xl">
                  {project.period}
                </p>
              ) : null}
            </div>

            <p className="leading-normal text-base-content/70 md:text-2xl font-normal tracking-[-0.03975em]">
              {project.description}
            </p>
          </div>

          <ul
            className="flex max-w-[35rem] flex-wrap gap-2.75"
            aria-label="Catégories et technologies"
          >
            {project.technologies.map((badge) => (
              <li
                className="badge badge-soft rounded-full text-xs text-base-content/75 md:badge-lg"
                key={badge}
              >
                {badge}
              </li>
            ))}
          </ul>

          {project.demoQrCode && (
            <aside className="hidden w-fit items-center gap-3 rounded-lg border border-base-content/10 bg-base-100 p-1.25 pr-2 lg:flex">
              <div className="flex size-28 flex-none items-center justify-center rounded-md bg-white p-0.75">
                <img
                  className="size-full"
                  src={project.demoQrCode}
                  alt={`QR code de la démo ${project.name}`}
                />
              </div>

              <div className="min-w-0 max-w-[200.5px] pr-2.5">
                <p className=" leading-5.5 text-sm text-base-content/60">
                  <Smartphone
                    className="mr-1 inline size-5 align-[-0.1875em] stroke-[2.1]"
                    aria-hidden="true"
                  />
                  Scannez le QR code pour tester Mealo directement sur votre
                  téléphone.
                </p>
              </div>
            </aside>
          )}

          <div className="mt-1 flex flex-col md:flex-row-reverse w-full max-w-[35rem] gap-5 ">
            {project.links.map((link) => {
              const isGithubLink = link.url.includes("github.com");

              return (
                <a
                  className={`btn inline-flex md:flex-1 w-full items-center gap-2 font-bold leading-tight no-underline md:py-5.75 ${
                    isGithubLink ? "btn-soft" : "btn-secondary"
                  }`}
                  href={link.url}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {isGithubLink ? (
                    <GitHubIcon className="size-5.75 flex-none" />
                  ) : (
                    <ExternalLink
                      className="size-5 mb-0.25 flex-none stroke-[2.1]"
                      aria-hidden="true"
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <ProjectFeature {...primaryFeature} />

        <div className="grid gap-y-15 pt-13 lg:col-span-24 lg:grid-cols-24 lg:gap-x-13">
          {secondaryFeatures.map((feature) => (
            <ProjectFeature key={feature.number} {...feature} />
          ))}
        </div>

        <ProjectSupportingFeatures />
      </div>
    </article>
  );
}

function ProjectSupportingFeatures() {
  return (
    <div className="grid gap-y-15 py-5.75 md:grid-cols-2 md:gap-y-17 md:py-13 lg:col-span-24 lg:grid-cols-24 lg:gap-x-13">
      {supportingFeatures.map((feature) => (
        <ProjectFeature
          key={feature.number}
          {...feature}
          className="col-span-12"
        />
      ))}
    </div>
  );
}

function ProjectFeature({
  number,
  title,
  description,
  image,
  imageAlt,
  className,
  imageClassName,
}: {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className: string;
  imageClassName?: string;
}) {
  return (
    <section
      className={`min-w-0 ${className} flex flex-col gap-6.75`}
      aria-labelledby={`feature-${number}`}
    >
      <div className="flex items-start gap-3.75">
        <div className="flex flex-col">
          <h3
            id={`feature-${number}`}
            className="text-xl leading-tight tracking-[-0.0425em] text-base-content/85 md:text-3xl"
          >
            {title}
          </h3>
          <p className="leading-normal text-base-content/70 md:text-2xl font-normal tracking-[-0.04975em]">
            {description}
          </p>
        </div>
      </div>

      {image && imageAlt ? (
        <div
          className={`relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-base-content/15 bg-base-200 shadow-sm lg:aspect-auto ${imageClassName}`}
        >
          <img
            className="h-full w-full object-cover object-left-top"
            src={image}
            alt={imageAlt}
          />
        </div>
      ) : null}
    </section>
  );
}
