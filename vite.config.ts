import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
    server: {
      host: "0.0.0.0",
<<<<<<< HEAD
      port: 5000,
=======
      port: 3000,
>>>>>>> 12911c3c34f7c707741d6d99a758735855eddc2d
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
