import Link from 'next/link';
import { v4 as uuid } from 'uuid';
import { styled } from '../stitches/stitches.config';

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

const InnerContainer = styled('div', {
  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',

  gap: '0.5rem',

  padding: '0.75rem 1rem',
  background: 'transparent',
  width: '100%',
  border: '1px solid $borderPrimary',
  borderRadius: '0.625rem',

  '&:hover': {
    background: '$backgroundSecondary',
  },
});

const Title = styled('h2', {
  fontSize: '1.35rem',
});

const Subtitle = styled('p', {
  fontSize: '1.1rem',
});

const TopicsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.8rem',

  '& span': {
    background: '$backgroundColorPrimary',

    borderRadius: 99999,

    padding: '0.25rem 0.8rem',

    color: '$colorPrimary',
  },
});

interface Props {
  cards: {
    external?: boolean;
    title: string;
    subtitle: string;
    path: string;
    topics?: string[];
  }[];
}

export const Cards = ({ cards }: Props) => {
  return (
    <Container>
      {cards.map(({ external, title, subtitle, path, topics }) => {
        return external ? (
          <a href={path} target="_blank" key={Date.now() + uuid()} rel="noreferrer">
            <InnerContainer>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              {topics && (
                <TopicsContainer>
                  {topics.map((topic) => (
                    <span key={Date.now() + uuid()}>{topic}</span>
                  ))}
                </TopicsContainer>
              )}
            </InnerContainer>
          </a>
        ) : (
          <Link href={path} passHref key={Date.now() + uuid()}>
            <InnerContainer>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
              {topics && (
                <TopicsContainer>
                  {topics.map((topic) => (
                    <span key={Date.now() + uuid()}>{topic}</span>
                  ))}
                </TopicsContainer>
              )}
            </InnerContainer>
          </Link>
        );
      })}
    </Container>
  );
};
