import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://mybearworld.github.io/mroew-docs",
  base: "/mroew-docs/",
  integrations: [
    starlight({
      lastUpdated: true,
      title: "Mröw",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      editLink: {
        baseUrl: "https://github.com/mybearworld/mroew-docs/blob/main/",
      },
      sidebar: [
        {
          label: "About",
          items: [
            { label: "Getting started", link: "/about/getting-started" },
            { label: "To do", link: "/about/to-do" },
          ],
        },
        {
          label: "Guides",
          items: [
            { label: "Project", link: "/guides/project" },
            { label: "Sprite", link: "/guides/sprite" },
            { label: "Blocks", link: "/guides/blocks" },
            { label: "Operators", link: "/guides/operators" },
          ],
        },
        {
          label: "Reference",
          link: "https://mybearworld.github.io/mroew",
        },
      ],
    }),
  ],
});
