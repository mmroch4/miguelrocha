import { globalCss } from './stitches.config';

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    width: '100%',
  },
  body: {
    overflow: 'overlay',

    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',

    background: '$backgroundPrimary',
    width: '100%',

    color: '$fontPrimary',
    fontFamily: 'system-ui',
  },
  '::-webkit-scrollbar-track': {
    border: 'none',
    borderRadius: 10,
    background: 'transparent',
  },
  '::-webkit-scrollbar': {
    border: 'none',
    width: '0.45rem',
    background: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    border: '1 solid $backgroundSecondary',
    borderRadius: 10,
    background: '$backgroundSecondary',
  },
});
