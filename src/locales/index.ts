import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import pt from './pt';

export type Locale = 'en' | 'pt' | 'fr' | 'de' | 'es';
export type Translation = {
  Header: {
    title: string;
    subtitle: string;
  };
};

const locales: Locale[] = ['en', 'pt', 'fr', 'de', 'es'];

export { en, fr, de, pt, es };

export default locales;
