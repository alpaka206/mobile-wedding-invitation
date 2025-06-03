export {};

declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

declare module "*.webp" {
  const src: string;
  export default src;
}
