// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Inside Lovable (preview/publish) the nitro target is pinned by the platform.
// Outside it we skip nitro completely, so `bun run build` / `npm run build`
// produces plain static output in dist/client: prerendered index.html for every
// route plus hashed assets — deployable to any static host, no Node/Workers runtime.
const insideLovable =
  process.env.LOVABLE_SANDBOX === "1" || !!process.env.DEV_SERVER__PROJECT_PATH;

export default defineConfig({
  nitro: insideLovable ? undefined : false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route so each one ships as a static HTML file.
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
    pages: [{ path: "/" }, { path: "/villas" }],
  },
});
