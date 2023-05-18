import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    fonts: {
      inter: 'Inter, sans-serif'
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  }
});
