import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false, // ✅ 소스맵 제거 (코드 노출 방지)
    minify: "terser", // ✅ 코드 난독화 (terser 사용)
    terserOptions: {
      compress: {
        drop_console: true, // ✅ 콘솔 로그 삭제
      },
      format: {
        comments: false, // ✅ 주석 제거
      },
    },
    rollupOptions: {
      external: ["sharp"], // sharp을 번들링에서 제외
    },
  },
  ssr: {
    noExternal: ["sharp"], // SSR에서도 sharp을 제외
  },
});
