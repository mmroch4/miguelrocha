import { format, formatDistanceToNowStrict, Locale } from 'date-fns';

interface Options {
  locale: Locale;
  displayDistance?: boolean;
}

export const formatDate = (
  date: string,
  template: string,
  { locale, displayDistance }: Options
): string => {
  const formatted = format(new Date(date), template, { locale });

  if (!displayDistance) return formatted;

  const distance = formatDistanceToNowStrict(new Date(date), {
    locale,
    addSuffix: true,
    roundingMethod: 'round',
  });

  return `(${distance}) ${formatted}`;
};
