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

  const [owner, repository] = url.pathname
    .split("/")
    .filter(Boolean)
    .slice(0, 2);

  if (!owner || !repository) {
    throw new Error("Invalid GitHub repository URL");
  }

  return { owner, repository: repository.replace(/\.git$/, "") };
}

export async function fetchLatestCommitDate(
  repositoryUrl: string,
  signal?: AbortSignal,
) {
  const { owner, repository } = getRepositoryPath(repositoryUrl);
  const response = await fetch(
    `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/commits?per_page=1`,
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
