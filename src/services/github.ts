type GitHubCommitResponse = {
  commit?: {
    committer?: {
      date?: string;
    } | null;
  };
};

function getRepositoryPath(repositoryUrl: string) {
  const url = new URL(repositoryUrl);

  if (url.hostname !== "github.com") {
    throw new Error("Unsupported repository host");
  }

  const pathParts = url.pathname.split("/").filter(Boolean);
  const [owner, repository] = pathParts;

  if (!owner || !repository) {
    throw new Error("Invalid GitHub repository URL");
  }

  const ref =
    pathParts[2] === "tree" && pathParts.length > 3
      ? pathParts.slice(3).join("/")
      : undefined;

  return { owner, repository: repository.replace(/\.git$/, ""), ref };
}

export async function fetchLatestCommitDate(
  repositoryUrl: string,
  signal?: AbortSignal,
) {
  const { owner, repository, ref } = getRepositoryPath(repositoryUrl);
  const searchParams = new URLSearchParams({ per_page: "1" });

  if (ref) {
    searchParams.set("sha", ref);
  }

  const response = await fetch(
    `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/commits?${searchParams}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  const commits: GitHubCommitResponse[] = await response.json();
  const date = commits[0]?.commit?.committer?.date;

  if (!date) {
    throw new Error("GitHub response did not include a commit date");
  }

  if (Number.isNaN(Date.parse(date))) {
    throw new Error("GitHub response included an invalid commit date");
  }

  return date;
}
