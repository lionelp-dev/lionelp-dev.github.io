import { ArrowRight, Code2, GitCommitHorizontal } from "lucide-react";
import { useTechWatchProjects } from "../hooks/useTechWatchProjects";
import { GitHubIcon } from "./GitHubIcon";
import { ContentHeader } from "./layout/ContentHeader";
import { PageSection } from "./layout/PageSection";
import { ProjectBadges } from "./project/ProjectBadges";
import { SlideUpIn } from "./SlideUpIn";
import { Typography } from "./Typography";

const projectIconPaths: Record<string, string> = {
  AdonisJS:
    "M0 12c0 9.68 2.32 12 12 12s12-2.32 12-12S21.68 0 12 0 0 2.32 0 12Zm4.84 2.492 3.762-8.555C9.238 4.498 10.46 3.716 12 3.716c1.54 0 2.762.781 3.398 2.223l3.762 8.554c.172.418.32.953.32 1.418 0 2.125-1.492 3.617-3.617 3.617-.726 0-1.3-.183-1.883-.37-.597-.192-1.203-.387-1.98-.387-.77 0-1.39.195-1.996.386-.59.188-1.168.371-1.867.371-2.125 0-3.617-1.492-3.617-3.617 0-.465.148-1 .32-1.418ZM12 7.43l-3.715 8.406c1.102-.512 2.371-.758 3.715-.758 1.297 0 2.613.246 3.664.758Z",
  Django:
    "M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z",
  "ASP.NET Core":
    "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z",
  Symfony:
    "M24 12c0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12zm-6.753-7.561c-1.22.042-2.283.715-3.075 1.644-.878 1.02-1.461 2.229-1.881 3.461-.753-.614-1.332-1.414-2.539-1.761-.966-.297-2.015-.105-2.813.514-.41.319-.71.757-.861 1.254-.36 1.176.381 2.225.719 2.6l.737.79c.15.154.519.56.339 1.138-.193.631-.951 1.037-1.732.799-.348-.106-.848-.366-.734-.73.045-.15.152-.263.21-.391.052-.11.077-.194.095-.242.141-.465-.053-1.07-.551-1.223-.465-.143-.939-.03-1.125.566-.209.68.117 1.913 1.86 2.449 2.04.628 3.765-.484 4.009-1.932.153-.907-.255-1.582-1.006-2.447l-.612-.677c-.371-.37-.497-1.002-.114-1.485.324-.409.785-.584 1.539-.379 1.103.3 1.594 1.063 2.412 1.68-.338 1.11-.56 2.223-.759 3.222l-.123.746c-.585 3.07-1.033 4.757-2.194 5.726-.234.166-.57.416-1.073.434-.266.005-.352-.176-.355-.257-.006-.184.15-.271.255-.353.154-.083.39-.224.372-.674-.016-.532-.456-.994-1.094-.973-.477.017-1.203.465-1.176 1.286.028.85.819 1.485 2.012 1.444.638-.021 2.062-.281 3.464-1.949 1.633-1.911 2.09-4.101 2.434-5.706l.383-2.116c.213.024.441.042.69.048 2.032.044 3.049-1.01 3.064-1.776.01-.464-.304-.921-.744-.91-.386.009-.718.278-.806.654-.094.428.646.813.068 1.189-.41.266-1.146.452-2.184.3l.188-1.042c.386-1.976.859-4.407 2.661-4.467.132-.007.612.006.623.323.003.105-.022.134-.147.375-.115.155-.174.345-.168.537.017.504.4.836.957.816.743-.023.955-.748.945-1.119-.032-.874-.952-1.424-2.17-1.386z",
  "Spring Boot":
    "m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z",
};

function TechWatchProjectIcon({
  projectName,
  size = "default",
}: {
  projectName: string;
  size?: "default" | "large";
}) {
  const path = projectIconPaths[projectName];
  const iconClassName =
    size === "large"
      ? "size-16 shrink-0 text-base-content/70"
      : "size-7 shrink-0 text-base-content/60";

  if (!path) {
    return (
      <Code2 className={iconClassName} strokeWidth={1.5} aria-hidden="true" />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={`${iconClassName} fill-current`}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function TechWatchSection() {
  const projectsSortedByDate = useTechWatchProjects();

  if (!(projectsSortedByDate.length > 0)) {
    return null;
  }

  return (
    <PageSection
      id="explorations-techniques"
      className="section-alternate-bg scroll-mt-(--section-scroll-offset)"
    >
      <SlideUpIn>
        <ContentHeader.Root>
          <ContentHeader.Title>
            <Typography as="p" variant="eyebrow">
              Mes projets personnels
            </Typography>
            <Typography
              as="h2"
              id="explorations-techniques-title"
              variant="h3"
              font="serif"
            >
              Autres réalisations
              <br />
              et expérimentations
            </Typography>
          </ContentHeader.Title>
          <ContentHeader.Description>
            <Typography as="p" variant="p2" className="max-w-5xl">
              Ces projets sont l’occasion de découvrir de nouveaux
              environnements techniques,
              <br />
              d’expérimenter et d’approfondir progressivement mes compétences.
            </Typography>
          </ContentHeader.Description>
        </ContentHeader.Root>
      </SlideUpIn>
      <section aria-label="Implémentations techniques">
        <div className="grid items-stretch gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {projectsSortedByDate.map(({ project, latestCommitDate }, index) => (
            <SlideUpIn
              key={project.name}
              delay={125 + index * 40}
              duration={250}
              variant="blur"
              className="h-full w-full [&>div]:h-full"
            >
              <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-100 text-base-content shadow-lg transition duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-xl">
                <div
                  className="flex h-44 items-center justify-center bg-base-300/60 md:h-48"
                  aria-hidden="true"
                >
                  <TechWatchProjectIcon
                    projectName={project.name}
                    size="large"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div>
                    <Typography as="h3" variant="h4">
                      RecipeBook {project.name}
                    </Typography>
                  </div>

                  {project.technologies.length > 0 ? (
                    <ProjectBadges
                      badges={project.technologies.slice(0, 5)}
                      highlightedBadgeVariant="soft"
                      className="badge-xs"
                    />
                  ) : null}

                  <div className="mt-auto flex items-center justify-between gap-3 border-base-content/10 border-t pt-3">
                    <div className="flex min-w-0 items-center gap-2 text-base-content/60">
                      <GitCommitHorizontal
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                      <Typography as="p" variant="p6" className="truncate">
                        {latestCommitDate ? (
                          <>
                            Dernier commit :{" "}
                            <time dateTime={latestCommitDate}>
                              {new Intl.DateTimeFormat("fr-FR", {
                                month: "long",
                                year: "numeric",
                              }).format(new Date(latestCommitDate))}
                            </time>
                          </>
                        ) : (
                          "GitHub"
                        )}
                      </Typography>
                    </div>

                    <a
                      className="btn btn-soft btn-sm inline-flex shrink-0 items-center gap-2 rounded-full no-underline"
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Voir le projet ${project.name} sur GitHub`}
                    >
                      <GitHubIcon className="size-4" />
                      <Typography as="span" variant="p4">
                        Voir sur GitHub
                      </Typography>
                      <ArrowRight
                        className="size-4 stroke-[2]"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </SlideUpIn>
          ))}
        </div>
      </section>
    </PageSection>
  );
}
