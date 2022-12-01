/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"1000logos.net",
			"d1.awsstatic.com",
			"upload.wikimedia.org",
			"s3.dualstack.us-east-2.amazonaws.com",
			"cdn.worldvectorlogo.com",
		],
	},
};

module.exports = nextConfig;
