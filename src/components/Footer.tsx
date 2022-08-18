import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches/stitches.config';

const Container = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',

  width: '100%',
});

const Divider = styled('hr', {
  margin: '1.25rem 0 0.9375rem',
  width: '4rem',
  background: '$slate6',
  border: '1px solid $slate6',
  borderRadius: 9999999,
});

const Message = styled('p', {
  '& a': {
    cursor: 'pointer',

    color: '$slate12',
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  '& a:hover, & a:focus': {
    textDecoration: 'underline',
  },

  '& a:active': {
    color: '$blue10',
  },
});

export const Footer = () => {
  const { language } = useTranslation();

  return (
    <Container>
      <Divider />

      <Message dangerouslySetInnerHTML={{ __html: language.Components.Footer.message }}>
        {/* Made by
        <a
          href="https://github.com/mmroch4"
          target="_blank"
          rel="noreferrer"
        >
          Miguel Rocha
        </a> */}
      </Message>
    </Container>
  );
};
