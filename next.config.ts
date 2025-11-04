// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'image.tmdb.org',
//         port: '',
//         pathname: '/t/p/**',
//       },
//     ],
//   },
//   // Turbopack 설정
//   experimental: {
//     // @ts-expect-error: turbo config is experimental and not in Next.js types yet
//     turbo: {
//       rules: {
//         '*.svg': {
//           loaders: ['@svgr/webpack'],
//           as: '*.js',
//         },
//       },
//     },
//   },
//   // Webpack 설정
//   webpack: (config) => {
//     // @ts-expect-error 타입 에러 무시
//     const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

//     config.module.rules.push(
//       {
//         ...fileLoaderRule,
//         test: /\.svg$/i,
//         resourceQuery: /url/, // import icon from './icon.svg?url'
//       },
//       {
//         test: /\.svg$/i,
//         issuer: fileLoaderRule.issuer,
//         resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
//         use: [
//           {
//             loader: '@svgr/webpack',
//             options: {
//               typescript: true,
//               ext: 'tsx',
//             },
//           },
//         ],
//       },
//     );

//     fileLoaderRule.exclude = /\.svg$/i;
//     return config;
//   },
// };

// export default nextConfig;

import withSvgr from 'next-plugin-svgr';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {}, // 경고 방지용
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },
};

export default withSvgr(nextConfig);
