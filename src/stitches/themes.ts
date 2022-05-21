import { createTheme } from './stitches.config';

export const lightTheme = createTheme({
  colors: {
    backgroundPrimary: '#fff',
    backgroundSecondary: '#e4e4e4',
    borderPrimary: '#e4e4e4',

    fontPrimary: '#333333',
  },
});

export const darkTheme = createTheme({
  colors: {
    backgroundPrimary: '#181A1B',
    backgroundSecondary: '#222426',
    borderPrimary: '#222426',

    fontPrimary: '#fff',
  },
});
