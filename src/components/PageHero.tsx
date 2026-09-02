type PageHeroProps = {
  title: string;
  description: string;
  titleId?: string;
};

const heroClass = "mb-5";
const heroTitleClass =
  "mb-3.5 max-w-215 text-4xl font-bold leading-none tracking-normal text-base-content md:text-6xl";
const heroTextClass =
  "max-w-195 text-base leading-normal text-base-content/70 md:text-lg";

export function PageHero({
  title,
  description,
  titleId = "page-title",
}: PageHeroProps) {
  return (
    <section className={heroClass} aria-labelledby={titleId}>
      <h1 id={titleId} className={heroTitleClass}>
        {title}
      </h1>
      <p className={heroTextClass}>{description}</p>
    </section>
  );
}
