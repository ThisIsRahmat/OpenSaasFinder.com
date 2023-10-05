/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hapnsdcnkzuqaymglmdi.supabase.co',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // You can add these as well
        // port: '',
        // pathname: 'arifscloud/image/upload/**',
      },
    ],
  },

}

module.exports = nextConfig
