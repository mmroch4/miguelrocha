import { useTheme } from 'next-themes';
import Link from 'next/link';
import { ReactElement } from 'react';
import { TbCrown, TbPalette } from 'react-icons/tb';
import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches/stitches.config';
import { generateKey } from '../utils/generate-key';
import { LanguageSelector } from './LanguageSelector';
import { Icon } from './utils/Icon';
import { Tooltip } from './utils/Tooltip';

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

const buttonStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'transparent',
  width: '2.5rem',
  height: '2.5rem',
  border: '1px solid $slate7',
  borderRadius: 10,

  cursor: 'pointer',

  '&:hover, &:focus': {
    background: '$slate4',
    borderColor: '$slate8',
  },

  '&:active': {
    background: '$slate5',
  },

  '& svg': {
    width: '1.5rem',
    height: '1.5rem',

    fill: 'none',
    stroke: '$slate12',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },

  variants: {
    colored: {
      true: {
        borderColor: '$blue7',

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
};

const Button = styled('button', { ...buttonStyles });

const LinkButton = styled(Link, { ...buttonStyles });

const ExternalLinkButton = styled('a', { ...buttonStyles });

interface Props {
  links?: {
    title: string;
    path: string;
    icon: ReactElement<SVGSVGElement>;
  }[];
}

export const Navigation = ({ links }: Props) => {
  const { language } = useTranslation();

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Container>
      <InnerContainer>
        {links?.map(({ title, path, icon }) => (
          <Tooltip content={title} key={generateKey()}>
            <LinkButton href={path} legacyBehavior={false}>
              <Icon label={`${language.Components.Navigation.linkMessage}: ${path}`}>{icon}</Icon>
            </LinkButton>
          </Tooltip>
        ))}
      </InnerContainer>

      <InnerContainer>
        <LanguageSelector />

        <Tooltip content={language.Components.Navigation.button.palette}>
          <Button onClick={toggleTheme}>
            <Icon label={language.Components.Navigation.button.palette}>
              <TbPalette />
            </Icon>
          </Button>
        </Tooltip>

        <Tooltip content={language.Components.Navigation.button.crown}>
          <ExternalLinkButton
            href="https://www.buymeacoffee.com/miguelrocha"
            target="_blank"
            rel="noreferrer"
            colored
          >
            <Icon label={language.Components.Navigation.button.crown}>
              <TbCrown />
            </Icon>
          </ExternalLinkButton>
        </Tooltip>
      </InnerContainer>
    </Container>
  );
};
