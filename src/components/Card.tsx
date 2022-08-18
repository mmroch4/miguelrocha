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
});

const Title = styled('h2', {
  fontSize: '1.35rem',
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
}

export const Card = ({ title, subtitle, topics }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>

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
