import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({                            
    mode: "standalone"                      
  }),
  server: {
    port: 9000,
  },
  integrations: [mdx()],
});