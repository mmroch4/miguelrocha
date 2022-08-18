import { blue, blueDark, slate, slateDark } from '@radix-ui/colors';
import { createTheme } from './stitches.config';

export const lightTheme = createTheme({
  colors: {
    ...slate,
    ...blue,
  },
});

export const darkTheme = createTheme({
  colors: {
    ...slateDark,
    ...blueDark,
  },
});
