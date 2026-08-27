/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'standalone', // This trims your node_modules down for production
images: {
remotePatterns: [
{
protocol: "https",
hostname: "cdn.sanity.io",
},
],
},
}; 

module.exports = nextConfig;