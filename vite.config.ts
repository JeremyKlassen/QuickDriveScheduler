// vite.config.ts
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    react(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "/icons/icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      // Add an alias to simplify imports of your helper functions
      "@utils": "/path/to/your/utils",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Add this line
  },
  
};
