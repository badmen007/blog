const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://47.107.136.13"],
  },
};
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra(nextConfig);
