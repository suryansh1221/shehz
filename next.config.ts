import type { NextConfig } from "next";

const repoName = "shehz";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const basePath = isGithubActions ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath || undefined,
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
