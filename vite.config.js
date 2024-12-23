import { fileURLToPath, URL } from 'url';
import { defineConfig }       from 'vite';
import vue                    from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [
		vue({
			script: {
				defineModel: true,
			},
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});

// export default defineConfig({
//   plugins: [vue()]
// });