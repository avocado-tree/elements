import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'Elements',
  globalStyle: 'src/global/variables.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www'
    },
    {
      type: 'dist'
    }
  ]
};
