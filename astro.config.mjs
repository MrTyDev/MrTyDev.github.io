import { defineConfig } from 'astro/config';

// If the GitHub repository is not named "MrTyDev.github.io",
// set `base` to "/<repo-name>".
export default defineConfig({
  site: 'https://mrtydev.github.io',
  base: '/',
});
