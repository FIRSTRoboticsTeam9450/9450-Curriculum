// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Team 9450 FRC Programming',
      // Add your GitHub repo, social links, and sidebar here as you build out lessons.
      sidebar: [
        {
          label: 'Start Here',
          items: [{ label: 'Introduction', slug: 'index' }],
        },
      ],
    }),
  ],
});
