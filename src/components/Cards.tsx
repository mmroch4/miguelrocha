import Link from 'next/link';
import { ReactNode } from 'react';
import { styled } from '../stitches/stitches.config';
import { generateKey } from '../utils/generate-key';
import { Card } from './Card';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  gap: '0.9375rem',

  width: '100%',

  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const Anchor = styled('a', {
  '&:hover div, &:focus div': {
    background: '$slate4',
    borderColor: '$slate8',
  },

  '&:active div': {
    background: '$slate5',
  },
});

interface Props {
  cards: {
    external?: boolean;
    title: string;
    subtitle: string;
    path: string;
    topics?: string[];
    highlight?: boolean;
    icon?: ReactNode;
  }[];
}

export const Cards = ({ cards }: Props) => {
  return (
    <Container>
      {cards.map(({ external, title, subtitle, path, topics, highlight = false, icon }) => {
        return external ? (
          <Anchor href={path} target="_blank" key={generateKey()} rel="noreferrer">
            <Card
              title={title}
              subtitle={subtitle}
              topics={topics}
              highlight={highlight}
              icon={icon}
            />
          </Anchor>
        ) : (
          <Link href={path} passHref key={generateKey()}>
            <Anchor>
              <Card
                title={title}
                subtitle={subtitle}
                topics={topics}
                highlight={highlight}
                icon={icon}
              />
            </Anchor>
          </Link>
        );
      })}
    </Container>
  );
};
