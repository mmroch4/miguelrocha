import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';
import { styled } from '../stitches/stitches.config';

const Container = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',

  width: '100%',
});

const InnerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',

  gap: '0.5rem',
});

const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'transparent',
  width: '2.5rem',
  height: '2.5rem',
  border: '1px solid $borderPrimary',
  borderRadius: 10,

  cursor: 'pointer',

  '&:hover': {
    background: '$backgroundSecondary',
  },

  '& svg': {
    width: '1.5rem',
    height: '1.5rem',

    fill: 'none',
    stroke: '$fontPrimary',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },

  variants: {
    colored: {
      true: {
        '&:hover svg': {
          stroke: '$colorPrimary',
        },
      },
    },
  },
});

interface Props {
  links?: {
    title: string;
    path: string;
    icon: ReactElement<SVGSVGElement>;
  }[];
}

export const Navigation = ({ links }: Props) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Container>
      <InnerContainer>
        {links?.map(({ title, path, icon }) => (
          <Link href={path} passHref key={Date.now() + uuid()}>
            <Button title={title}>{icon}</Button>
          </Link>
        ))}
      </InnerContainer>
      <InnerContainer>
        <Button onClick={toggleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-palette"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
            <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
          </svg>
        </Button>
        <a href="https://www.buymeacoffee.com/miguelrocha" target="_blank" rel="noreferrer">
          <Button colored>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-crown"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
            </svg>
          </Button>
        </a>
      </InnerContainer>
    </Container>
  );
};
