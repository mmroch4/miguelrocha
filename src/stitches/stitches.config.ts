import { createStitches } from '@stitches/react';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      colorPrimary: '#0D6EFD',
      backgroundColorPrimary: 'rgba(13, 110, 253, 0.2)',
    },
  },
});
