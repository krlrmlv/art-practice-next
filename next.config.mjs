/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        minimumCacheTTL: 60,
        // qualities: [25, 50, 75],
        // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ]
    }
};

export default nextConfig;
