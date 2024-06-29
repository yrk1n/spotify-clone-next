// import { hostname } from 'os';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["dozecliovsoyujmiymqo.supabase.co"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dozecliovsoyujmiymqo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
