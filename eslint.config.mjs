import nextPlugin from "@next/eslint-plugin-next";

const config = [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
  }, },
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
}, ];

export default config;