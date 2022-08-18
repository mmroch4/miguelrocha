import { keyframes } from '@stitches/react';
import { styled } from '../stitches/stitches.config';

const Rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Component = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  margin: 'auto',
  top: 'calc(50% - 5rem / 2)',

  width: '5rem',
  height: '5rem',
  border: '5px solid $slate7',
  borderTop: '5px solid $slate8',
  borderRadius: '50%',
  animation: `${Rotate} 0.5s linear infinite`,
});

export const Spinner = () => {
  return <Component />;
};
