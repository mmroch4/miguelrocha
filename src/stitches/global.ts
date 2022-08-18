import { globalCss } from './stitches.config';

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 'none',
  },
  html: {
    width: '100%',
  },
  body: {
    overflow: 'overlay',

    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',

    background: '$slate1',
    width: '100%',

    color: '$slate12',
    fontFamily: 'ubuntu, system-ui',
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
    border: '1px solid transparent',
    borderRadius: 10,
    background: '$slate3',
  },
});
