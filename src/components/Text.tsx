import { ReactNode } from 'react';
import { styled } from '../stitches/stitches.config';

const Content = styled('main', {
  width: '100%',

  '& p': {
    textAlign: 'center',

    fontSize: '1rem',
    lineHeight: '1.425rem',
  },

  '& p a': {
    cursor: 'pointer',

    color: '$colorPrimary',
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  '& p a:hover': {
    textDecoration: 'underline',
  },
});

interface IProps {
  children: ReactNode;
}

export const Text = ({ children }: IProps) => {
  return <Content>{children}</Content>;
};