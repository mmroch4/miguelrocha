import { ReactNode } from 'react';
import { styled } from '../stitches/stitches.config';
import { generateKey } from '../utils/generate-key';

const Container = styled('div', {
  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',

  gap: '0.5rem',

  padding: '0.75rem 1rem',
  background: 'transparent',
  width: '100%',
  border: '1px solid $slate7',
  borderRadius: '0.625rem',

  '&:hover, &:focus': {
    background: '$slate4',
    borderColor: '$slate8',
  },

  '&:active': {
    background: '$slate5',
  },

  variants: {
    highlight: {
      true: {
        background: '$blue3',
        borderColor: '$blue7',

        color: '$blue12',

        '& svg': {
          stroke: '$blue9',
        },

        '&:hover, &:focus': {
          background: '$blue4',
          borderColor: '$blue8',
        },

        '&:active': {
          background: '$blue5',
        },
      },
    },
  },
});

const Title = styled('h2', {
  fontSize: '1.35rem',

  variants: {
    icon: {
      true: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      },
    },
  },
});

const Subtitle = styled('p', {
  fontSize: '1.1rem',
});

const TopicsContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.8rem',
  flexWrap: 'wrap',

  '& span': {
    background: '$blue3',

    borderRadius: 99999,

    padding: '0.25rem 0.8rem',

    color: '$blue11',
  },
});

interface Props {
  title: string;
  subtitle: string;
  topics?: string[];
  highlight?: boolean;
  icon?: ReactNode;
}

export const Card = ({ title, subtitle, topics, highlight = false, icon }: Props) => {
  return (
    <Container highlight={highlight}>
      <Title icon={!!icon}>
        {!!icon && icon} {title}
      </Title>

      <Subtitle>{subtitle}</Subtitle>

      {topics && (
        <TopicsContainer>
          {topics.map((topic) => (
            <span key={generateKey()}>{topic}</span>
          ))}
        </TopicsContainer>
      )}
    </Container>
  );
};
