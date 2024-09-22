import { build } from "./build.ts";
import chokidar from "chokidar";

chokidar.watch("src", {}).on("all", () => {
  build();
});

Bun.serve({
  port: 8080,
  async fetch(req) {
    if (req.url.includes("/index.user.js")) {
      const dist = await Bun.file("./dist/index.user.js").text();
      return new Response(dist, {
        headers: {
          "Content-Type": "application/javascript; charset=utf-8",
        },
      });
    }
    return new Response("", {
      status: 302,
      headers: {
        Location: "/index.user.js",
      },
    });
  },
});
console.log("Development server started at http://localhost:8080");
