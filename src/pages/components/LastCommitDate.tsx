import { Typography } from "../../components/Typography";

type LastCommitDateProps = {
  latestCommitDate?: string;
};

export function LastCommitDate({ latestCommitDate }: LastCommitDateProps) {
  if (!latestCommitDate) {
    return null;
  }

  return (
    <Typography as="p" variant="p6" className="whitespace-nowrap">
      Dernier commit :{" "}
      {new Intl.DateTimeFormat("fr-FR", {
        month: "long",
        year: "numeric",
      }).format(new Date(latestCommitDate))}
    </Typography>
  );
}
