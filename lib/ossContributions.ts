export type OssContribution = {
  id: string;
  org: string;
  repo: string;
  title: string;
  url: string;
  date: string;
  status: "merged" | "open" | "closed";
  description: string;
};

export const ossContributions: OssContribution[] = [
  {
    id: "orca-5600",
    org: "Stably AI",
    repo: "stablyai/orca",
    title: "Update default terminal theme selection background color",
    url: "https://github.com/stablyai/orca/pull/5600",
    date: "Jun 2026",
    status: "closed",
    description: "Improved text selection visibility on the default Ghostty dark terminal theme for Codex CLI prompts.",
  },
  {
    id: "orca-5599",
    org: "Stably AI",
    repo: "stablyai/orca",
    title: "Fix invisible text selection on default dark terminal theme",
    url: "https://github.com/stablyai/orca/pull/5599",
    date: "Jun 2026",
    status: "closed",
    description: "Fixed a UX bug where selected text was hard to see on the default dark terminal theme.",
  },
  {
    id: "orca-5591",
    org: "Stably AI",
    repo: "stablyai/orca",
    title: "Fix file explorer scroll when tree exceeds sidebar height",
    url: "https://github.com/stablyai/orca/pull/5591",
    date: "Jun 2026",
    status: "closed",
    description: "Enabled scrolling in the file explorer sidebar when the directory tree grows beyond the viewport.",
  },
];
