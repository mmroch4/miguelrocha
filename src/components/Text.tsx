import { DOMAttributes, ReactNode } from 'react';
import { styled } from '../stitches/stitches.config';

const Content = styled('main', {
  width: '100%',

  '& p': {
    textAlign: 'center',

    color: '$slate12',

    fontSize: '1rem',
    lineHeight: '1.425rem',
  },

  '& p a': {
    cursor: 'pointer',

    color: '$blue9',
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  '& p a:hover, & p a:focus': {
    color: '$blue10',

    textDecoration: 'underline',
  },
});

interface IProps extends DOMAttributes<HTMLElement> {
  children: ReactNode;
}

export const Text = ({ children, ...props }: IProps) => {
  return <Content {...props}>{children}</Content>;
};
