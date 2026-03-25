import type { NextConfig } from "next";
import { SITE_LOGO_URL } from "./src/constants/logo-path";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: SITE_LOGO_URL,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
