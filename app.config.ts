import { defineConfig } from '@tanstack/start/config'
import { cloudflare } from "unenv";
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
		preset: "cloudflare-pages",
		unenv: cloudflare,
		compatibilityDate: "2025-02-01",
	},
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})
