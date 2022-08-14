import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbMail } from 'react-icons/tb';
import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches/stitches.config';
import { Icon } from './utils/Icon';
import { Tooltip } from './utils/Tooltip';

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
  background: '$backgroundSecondary',
  border: '1px solid $borderPrimary',
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

  '&:focus': {
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
  const { language } = useTranslation();

  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>

      <Divider />

      {!hideLinks && (
        <InnerContainer>
          <Tooltip content={language.Components.Header.links.github}>
            <Link href="https://github.com/mmroch4" target="_blank">
              <Icon label={language.Components.Header.links.github}>
                <TbBrandGithub />
              </Icon>
            </Link>
          </Tooltip>

          <Tooltip content={language.Components.Header.links.linkedin}>
            <Link href="https://www.linkedin.com/in/miguelmartinsrocha/" target="_blank">
              <Icon label={language.Components.Header.links.linkedin}>
                <TbBrandLinkedin />
              </Icon>
            </Link>
          </Tooltip>

          <Tooltip content={language.Components.Header.links.instagram}>
            <Link href="https://www.instagram.com/souoorocha/" target="_blank">
              <Icon label={language.Components.Header.links.instagram}>
                <TbBrandInstagram />
              </Icon>
            </Link>
          </Tooltip>

          <Tooltip content={language.Components.Header.links.mail}>
            <Link href="mailto:miguelrocha.dev@gmail.com" target="_blank">
              <Icon label={language.Components.Header.links.mail}>
                <TbMail />
              </Icon>
            </Link>
          </Tooltip>
        </InnerContainer>
      )}
    </Container>
  );
};
