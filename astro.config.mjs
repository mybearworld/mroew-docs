import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
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
          label: "Getting started",
          autogenerate: { directory: "getting-started" },
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
