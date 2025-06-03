import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    // host: "0.0.0.0", // ✅ 외부 접속 허용 (핸드폰 접속 가능)
    port: 5173, // (원하면 다른 포트로 변경 가능)
  },
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
  },
});
