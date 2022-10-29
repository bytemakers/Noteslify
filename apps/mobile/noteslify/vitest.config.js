import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
	test: {
		reporters: "verbose",
		include: ["**/*.{test,spec,e2e}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		passWithNoTests: true
	},
	plugins: [
		AutoImport({
			imports: ["vitest"],
		}),
	],
});
