// declare module '*.svg' {
//   import { FC, SVGProps } from 'react';
//   const content: FC<SVGProps<SVGSVGElement>>;
//   export default content;
// }

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'next-plugin-svgr' {
  import { NextConfig } from 'next';
  export default function withSvgr(config: NextConfig): NextConfig;
}
