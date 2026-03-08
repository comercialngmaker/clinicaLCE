// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? "http://localhost:4321" : "https://larissacarvalhoestetica.com.br",

  vite: {
    plugins: [
      tailwindcss({
        optimize: {
          minify: true,
        },
      }) as any,
      icons({ compiler: "astro" }) as any,
    ],
    server: {
      allowedHosts: ["dev.lzart.com.br"],
    },
  },

  outDir: "docs",

  security: {
    checkOrigin: false,
    actionBodySizeLimit: 100 * 1024 * 1024, // 100MB
  },

  devToolbar: {
    enabled: false,
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Open Sans",
      cssVariable: "--font-open-sans",
    },
  ],
});
