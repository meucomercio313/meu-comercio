// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // A flag vai aqui dentro se necessário em futuras versões, mas por agora,
    // o aviso indica que a própria CLI já a está tratando como um experimento.
    // Manter o objeto experimental vazio ou remover é o ideal.
  },
};

export default nextConfig;