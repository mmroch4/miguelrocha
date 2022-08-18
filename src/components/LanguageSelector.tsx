import * as SelectPrimitive from '@radix-ui/react-select';
import { TbCaretDown, TbCaretUp, TbCheck, TbLanguage, TbSelector } from 'react-icons/tb';
import { useTranslation } from '../hooks/useTranslation';
import { Locale } from '../locales';
import { styled } from '../stitches/stitches.config';
import { generateKey } from '../utils/generate-key';
import { Icon } from './utils/Icon';
import { Tooltip } from './utils/Tooltip';

const SelectTrigger = styled(SelectPrimitive.Trigger, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '0.5rem',

  background: 'transparent',
  width: 'auto',
  height: '2.5rem',

  padding: '0.5rem',

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

  '& span': {
    textAlign: 'center',
    color: '$slate12',
    fontSize: '1.125rem',
    fontWeight: 'bold',
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
});

const SelectTriggerIcon = styled(SelectPrimitive.Icon, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& svg': {
    width: '1.25rem',
    height: '1.25rem',

    fill: 'none',
    stroke: '$slate12',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});

const SelectContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',

  background: '$slate2',

  border: '1px solid $slate6',
  borderRadius: 10,
});

const SelectViewport = styled(SelectPrimitive.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',

  minWidth: 200,

  padding: '0.5rem',
});

const SelectItem = styled(SelectPrimitive.Item, {
  cursor: 'default',

  border: '1px solid transparent',
  borderRadius: 3,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '0.25rem 0.5rem',

  '&:hover, &:focus': {
    background: '$slate4',
    borderColor: '$slate8',
  },

  '&:active': {
    background: '$slate5',
  },

  variants: {
    selected: {
      true: {
        color: '$blue9',

        background: '$blue3',
        borderColor: '$blue7',

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

const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$slate2',
};

const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton, {
  ...scrollButtonStyles,

  borderBottom: '1px solid $slate6',
});

const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton, {
  ...scrollButtonStyles,

  borderTop: '1px solid $slate6',
});

const flags = {
  fr: '🇫🇷',
  de: '🇩🇪',
  en: '🇬🇧',
  es: '🇪🇸',
  pt: '🇧🇷',
};

const options: { value: Locale; text: string }[] = [
  { value: 'de', text: 'Deutsche' },
  { value: 'fr', text: 'Français' },
  { value: 'pt', text: 'Português' },
  { value: 'en', text: 'English' },
  { value: 'es', text: 'Español' },
];

interface Props {}

export const LanguageSelector = ({}: Props) => {
  const { locale, changeLanguage, language } = useTranslation();

  return (
    <SelectPrimitive.Root value={locale} onValueChange={changeLanguage}>
      <Tooltip content={language.Components.LanguageSelector.trigger}>
        <SelectTrigger>
          <Icon label={language.Components.LanguageSelector.trigger}>
            <TbLanguage />
          </Icon>

          <SelectPrimitive.Value aria-label={locale}>
            {locale && flags[locale as Locale]}
          </SelectPrimitive.Value>

          <SelectTriggerIcon>
            <Icon label={language.Components.LanguageSelector.triggerIcon}>
              <TbSelector />
            </Icon>
          </SelectTriggerIcon>
        </SelectTrigger>
      </Tooltip>

      <SelectPrimitive.Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <TbCaretUp />
          </SelectScrollUpButton>

          <SelectViewport>
            {options.map(({ value, text }) => {
              return (
                <SelectItem value={value} selected={value === locale} key={generateKey()}>
                  <SelectPrimitive.ItemText>
                    {flags[value]} {text}
                  </SelectPrimitive.ItemText>

                  <SelectItemIndicator>
                    <Icon label={language.Components.LanguageSelector.selected}>
                      <TbCheck />
                    </Icon>
                  </SelectItemIndicator>
                </SelectItem>
              );
            })}
          </SelectViewport>

          <SelectScrollDownButton>
            <TbCaretDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
