import { build } from "esbuild";

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  target: "esnext",
  format: "esm",
  outfile: "dist/index.js",
  banner: {
    js: `
import { fileURLToPath } from 'url';
import { createRequire as topLevelCreateRequire } from 'module';
import path from 'node:path';
const require = topLevelCreateRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    `,
  },
});
