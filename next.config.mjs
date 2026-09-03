/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Sanity config
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'shobillgroup.com' },
      { protocol: 'https', hostname: 'www.shobillgroup.com' }
    ]
  }
};

export default nextConfig;
