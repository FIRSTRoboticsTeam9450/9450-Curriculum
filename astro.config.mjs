// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '9450 Programming Curriculum',
      // Add your GitHub repo, social links, and sidebar here as you build out lessons.
      sidebar: [
        // Top-level groups render top-to-bottom in this array.
        {
          label: 'Start Here',
          items: [
            { label: 'Tools & Software', slug: 'start-here/tools' },
          ],
        },
        {
          // Custom label for the folder (instead of "programming-essentials"),
          // contents auto-listed from the folder.
          label: 'Programming Essentials',
          items: [
            { autogenerate: { directory: 'programming-essentials' } },
          ],
        },
      ],
    }),
  ],
});
