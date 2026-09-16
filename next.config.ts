import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no server-only capability: no server actions, no route
  // handlers, no next/image, no cookies()/headers(). Every route already
  // prerenders to static HTML, so export it and skip the Netlify Next runtime.
  output: "export",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
