import { build as esbuild } from "esbuild";
import packageJson from "./package.json";

export const build = async () => {
  const bannerMap: Record<string, string> = {
    name: "AtCoder Limit Colorizer",
    description: "AtCoderの制約を色付けします",
    version: `${packageJson.version}`,
    homepage: packageJson.homepage,
    author: packageJson.author,
    match: "https://atcoder.jp/contests/*/tasks/*",
    updateURL:
      "https://raw.githubusercontent.com/sevenc-nanashi/atcoder-limit-colorizer/built/index.user.js",
    downloadURL:
      "https://raw.githubusercontent.com/sevenc-nanashi/atcoder-limit-colorizer/built/index.user.js",
    sandbox: "MAIN_WORLD",
  };
  const banner = `// ==UserScript==\n${Object.keys(bannerMap)
    .map((key) => `// @${key} ${bannerMap[key]}`)
    .join("\n")}\n// ==/UserScript==\n`;

  await esbuild({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    format: "iife",
    outfile: "dist/index.user.js",
    sourcemap: "inline",
    banner: { js: banner },
    plugins: [],
  });
  console.log("Build complete");
};

if (import.meta.main) {
  build();
}
