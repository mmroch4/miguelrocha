import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import pt from './pt';

export type Locale = 'en' | 'pt' | 'fr' | 'de' | 'es';

export type Translation = {
  Pages: {
    Index: {
      Header: {
        title: string;
        subtitle: string;
      };

      Cards: {
        me: { title: string; subtitle: string };
        activity: { title: string; subtitle: string };
        projects: { title: string; subtitle: string };
        samples: { title: string; subtitle: string };
      };
    };

    Samples: {
      Header: {
        title: string;
        subtitle: string;
      };

      Text: string;
    };

    Projects: {
      Header: {
        title: string;
        subtitle: string;
      };
    };

    Activity: {
      Header: {
        title: string;
        subtitle: string;
      };
    };

    Error404: {
      Header: {
        title: string;
        subtitle: string;
      };
    };

    Me: {
      Header: {
        title: string;
        subtitle: string;
      };

      Text: string;
    };
  };

  Components: {
    Header: {
      title: string;
      subtitle: string;
      links: {
        github: string;
        instagram: string;
        linkedin: string;
        mail: string;
      };
    };
    Footer: { message: string };
    Navigation: {
      button: {
        palette: string;
        crown: string;
      };
      links: {
        home: string;
      };
      linkMessage: string;
    };
    LanguageSelector: {
      trigger: string;
      triggerIcon: string;
      selected: string;
    };
  };

  date: {
    template: string;
    locale: any;
  };
};

const locales: Locale[] = ['en', 'pt', 'fr', 'de', 'es'];

export { en, fr, de, pt, es };

export default locales;
