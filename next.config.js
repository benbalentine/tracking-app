/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        TIFA_CONTRIBUTION_GRAPH_URI: process.env.TIFA_CONTRIBUTION_GRAPH_URI,
        STATSD_BUCKET: process.env.STATSD_BUCKET,
        STATSD_HOST: process.env.STATSD_HOST,
    },
    output: 'standalone',
}

module.exports = nextConfig
