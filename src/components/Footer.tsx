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
  border: '1px solid $backgroundSecondary',
  borderRadius: 9999999,
});

const Message = styled('p', {
  '& a': {
    cursor: 'pointer',

    color: '$fontPrimary',
    fontWeight: 'bold',
    textDecoration: 'none',
  },

  '& a:hover': {
    textDecoration: 'underline',
  },
});

export const Footer = () => {
  return (
    <Container>
      <Divider />

      <Message>
        Made with love by{' '}
        <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">
          Miguel Rocha
        </a>
      </Message>
    </Container>
  );
};
