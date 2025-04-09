import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.fonearena.com','thumbs.dreamstime.com', 'tailwindcss.com', 'images.pexels.com'], // Add allowed domains here
  },
};

export default withFlowbiteReact(nextConfig);