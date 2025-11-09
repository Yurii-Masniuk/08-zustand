import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/08-zustand',
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'ac.goit.global' }
		]
	}
};

export default nextConfig;
