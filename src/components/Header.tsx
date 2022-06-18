import { styled } from '../stitches/stitches.config';

const Container = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',

  gap: '0.5rem',

  marginBlock: '0.9375rem',
  width: '100%',
});

const Title = styled('h1', {
  textAlign: 'center',
  fontSize: '2.25rem',
});

const Subtitle = styled('p', {
  textAlign: 'center',
  fontSize: '1.2rem',
});

const Divider = styled('hr', {
  margin: '0.5rem 0 0.25rem',
  width: '4rem',
  border: '1px solid $backgroundSecondary',
  borderRadius: 9999999,
});

const InnerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  gap: '0.625rem',

  width: '100%',
});

const Link = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',

  width: '2.5rem',
  height: '2.5rem',
  borderRadius: 999999999,

  '&:hover': {
    background: '$backgroundSecondary',
    border: '1px solid $borderPrimary',
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
});

interface Props {
  content: {
    title: string;
    subtitle: string;
  };
  hideLinks?: boolean;
}

export const Header = ({ content: { title, subtitle }, hideLinks }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Divider />
      {!hideLinks && (
        <InnerContainer>
          <Link
            href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/miguelmartinsrocha/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </Link>
          <Link href="mailto:miguelrocha.dev@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/souoorocha/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </Link>
        </InnerContainer>
      )}
    </Container>
  );
};
