import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Mröw",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      editLink: {
        baseUrl: "https://github.com/mybearworld/mroew-docs/blob/main/",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
