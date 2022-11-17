import { useRouter } from 'next/router';
import locales, { de, en, es, fr, Locale, pt, Translation } from '../locales';

export const useTranslation = () => {
  const { locale, asPath, pathname, push } = useRouter();

  const language = identifyLanguage();

  function changeLanguage(locale: Locale): void {
    if (!locales.includes(locale)) return;

    push(pathname, asPath, { locale });
  }

  function identifyLanguage(): Translation {
    let language = {} as Translation;

    switch (locale) {
      case 'en':
        language = en;
        break;

      case 'pt':
        language = pt;
        break;

      case 'fr':
        language = fr;
        break;

      case 'de':
        language = de;
        break;

      case 'es':
        language = es;
        break;

      default:
        language = en;
        break;
    }

    return language;
  }

  return { language, changeLanguage, locale };
};
