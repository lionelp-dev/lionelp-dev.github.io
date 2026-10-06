import { ExternalLink, Smartphone } from "lucide-react";
import recipePreviewImage from "../../../assets/product-preview-1.png";
import aiPreviewImage from "../../../assets/product-preview-2.png";
import shoppingListPreviewImage from "../../../assets/product-preview-3.png";
import { GitHubIcon } from "../../../components/GitHubIcon";
import {
  ProjectActions,
  type ProjectActionTone,
} from "../../../components/project/ProjectActions";
import { ProjectBadges } from "../../../components/project/ProjectBadges";
import { ProjectImage } from "../../../components/project/ProjectImage";
import { Typography } from "../../../components/Typography";
import type { PersonalProject } from "../../../types/projects";

type PersonalProjectCardProps = {
  project: PersonalProject;
  titleId?: string;
};

export function PersonalProjectCard({
  project,
  titleId,
}: PersonalProjectCardProps) {
  const features = [
    {
      number: "01",
      title: "Gestion des recettes",
      description: "Rechercher, consulter et organiser ses recettes.",
      image: recipePreviewImage,
      imageAlt: `Gestion des recettes dans ${project.name}`,
      className: "lg:col-span-15",
      imageClassName: "lg:h-[400px] xl:h-[650px]",
    },
    {
      number: "02",
      title: "Génération assistée par IA",
      description: "Créer une recette à partir d’une envie.",
      image: aiPreviewImage,
      imageAlt: `Génération assistée par IA dans ${project.name}`,
      className: "lg:col-span-8",
      imageClassName: "lg:h-[320px] xl:h-[340px]",
    },
    {
      number: "03",
      title: "Planification hebdomadaire",
      description: "Visualiser et organiser ses repas sur la semaine.",
      image: project.image,
      imageAlt: `Planification hebdomadaire dans ${project.name}`,
      className: "lg:col-span-9",
      imageClassName: "lg:h-[320px] xl:h-[340px]",
    },
    {
      number: "04",
      title: "Liste de courses automatique",
      description: "Créée à partir des repas planifiés.",
      image: shoppingListPreviewImage,
      imageAlt: `Liste de courses automatique dans ${project.name}`,
      className: "lg:col-span-7",
      imageClassName: "lg:h-[320px] xl:h-[340px]",
    },
  ];

  const [primaryFeature, ...secondaryFeatures] = features;
  const projectId =
    titleId ??
    project.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  const actionLinks: Array<
    PersonalProject["links"][number] & { tone: ProjectActionTone }
  > = project.links.map((link) => ({
    ...link,
    tone: link.url.includes("github.com") ? "soft" : "secondary",
  }));

  return (
    <article className="text-base-content">
      <div className="grid gap-13 gap-y-5.75 lg:grid-cols-24 lg:items-start">
        <div className="flex h-full min-w-0 flex-1 flex-col items-start justify-start gap-5.75 pb-12 lg:col-span-9">
          <div className="flex w-full flex-col gap-4 md:gap-2.5">
            <div className="flex flex-col gap-2.5">
              <Typography
                as="h2"
                id={titleId}
                variant="project-hero-title"
                className="-ml-[0.0975em] max-w-sm"
              >
                {project.name}
              </Typography>
              {project.period ? (
                <Typography as="p" variant="project-period">
                  {project.period}
                </Typography>
              ) : null}
            </div>

            <Typography as="p" variant="body-lg-compact">
              {project.description}
            </Typography>
          </div>

          <ProjectBadges
            badges={project.technologies}
            highlightedBadgeVariant="soft"
            className="badge-xs md:badge-sm"
          />

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
                <Typography as="p" variant="caption-muted">
                  <Smartphone
                    className="mr-1 inline size-5 stroke-[2.1] align-[-0.1875em]"
                    aria-hidden="true"
                  />
                  Scannez le QR code pour tester Mealo directement sur votre
                  téléphone.
                </Typography>
              </div>
            </aside>
          )}

          <ProjectActions
            title={project.name}
            links={actionLinks}
            icon={ExternalLink}
            variant="hero"
            renderIcon={(link) =>
              link.url.includes("github.com") ? (
                <GitHubIcon className="size-5.75 flex-none" />
              ) : (
                <ExternalLink
                  className="mb-0.25 size-5 flex-none stroke-[2.1]"
                  aria-hidden="true"
                />
              )
            }
          />
        </div>

        <ProjectFeature {...primaryFeature} projectId={projectId} isPrimary />

        <div className="grid gap-y-15 pt-13 lg:col-span-24 lg:grid-cols-24 lg:gap-x-13">
          {secondaryFeatures.map((feature) => (
            <ProjectFeature
              key={feature.number}
              {...feature}
              projectId={projectId}
            />
          ))}
        </div>

        <ProjectDemoCallToAction project={project} />
      </div>
    </article>
  );
}

function ProjectDemoCallToAction({ project }: { project: PersonalProject }) {
  const demoLink = project.links.find(
    (link) => link.label === "Essayer la démo",
  );

  if (!demoLink) {
    return null;
  }

  return (
    <div className=" pt-8.75 md:pt-26 pb-4 lg:col-span-24 lg:grid lg:grid-cols-24 lg:gap-x-13">
      <section className="flex flex-col items-start gap-6.75 lg:col-span-24 lg:flex-row lg:items-center lg:justify-between lg:mr-28">
        <div className="max-w-3xl">
          <Typography as="h3" variant="feature-title">
            Et bien d’autres fonctionnalités à découvrir dans la démo
          </Typography>
          <Typography as="p" variant="body-lg">
            Espaces collaboratifs, partage des listes de courses et des recettes.
          </Typography>
        </div>

        <div className="w-full md:w-[17rem]">
          <ProjectActions
            title={project.name}
            links={[{ ...demoLink, tone: "secondary" }]}
            icon={ExternalLink}
            variant="hero"
            renderIcon={() => (
              <ExternalLink
                className="mb-0.25 size-5 flex-none stroke-[2.1]"
                aria-hidden="true"
              />
            )}
          />
        </div>
      </section>
    </div>
  );
}

function ProjectFeature({
  projectId,
  number,
  title,
  description,
  image,
  imageAlt,
  className,
  imageClassName,
  isPrimary,
}: {
  projectId: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className: string;
  imageClassName?: string;
  isPrimary?: boolean;
}) {
  return (
    <section
      className={`min-w-0 ${className} flex flex-col gap-6.75`}
      aria-labelledby={`${projectId}-feature-${number}`}
    >
      <div className="flex items-start gap-3.75">
        <div className="flex flex-col">
          <Typography
            as="h3"
            id={`${projectId}-feature-${number}`}
            variant="feature-title"
          >
            {title}
          </Typography>
          <Typography as="p" variant="body-lg">
            {description}
          </Typography>
        </div>
      </div>

      {image && imageAlt ? (
        <div
          className={`hover-3d hover-3d-subtle w-full${isPrimary ? " hover-3d-subtle-primary" : ""}`}
        >
          <ProjectImage
            src={image}
            title={title}
            alt={imageAlt}
            className={`aspect-[16/9] lg:aspect-auto ${imageClassName ?? ""}`}
            imageClassName="object-left-top"
          />
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} aria-hidden="true" />
          ))}
        </div>
      ) : null}
    </section>
  );
}
