import DE from 'date-fns/locale/de';
import { Translation } from '.';

const de: Translation = {
  Pages: {
    Index: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Ich bin ein FullStack Entwickler',
      },
      Cards: {
        me: {
          title: 'Über mich',
          subtitle: 'ein bisschen was über mich',
        },
        activity: {
          title: 'Aktivität',
          subtitle: 'meine Aktivität durch GitHub',
        },
        projects: {
          title: 'Projekte',
          subtitle: 'einige meiner Projekte auf GitHub verfügbar',
        },
        samples: {
          title: 'Beispiele',
          subtitle: 'ein paar erstaunliche Codebeispiele',
        },
      },
    },
    Samples: {
      Header: {
        title: 'Codebeispiele',
        subtitle: 'Einige einfache und großartige Codebeispiele',
      },
      Text: `<p>
          Dies sind einfache Codebeispiele, um komplexere Projekte zu sehen, sehen Sie sich mein <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">GitHub Profil</a>.
        </p>

        <br />`,
    },
    Error404: {
      Header: {
        title: 'Seite nicht gefunden',
        subtitle: 'Die Seite, nach der Sie gesucht haben, existiert nicht',
      },
    },
    Projects: {
      Header: {
        title: 'Meine Projekte',
        subtitle: 'Einige meiner Projekte verfügbar auf GitHub',
      },
    },
    Activity: {
      Header: {
        title: 'Meine Aktivität',
        subtitle: 'Verfolgen Sie meine Aktivitäten durch GitHub',
      },
    },
    Me: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Das ist ein bisschen über mich',
      },
      Text: `<p>
          Hallo, ich bin <strong>Miguel</strong>. Ich bin ein <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">Entwickler</a> und ein Inhaltsersteller. Ich lerne gerade <strong>Webentwicklung</strong>.
        </p>

        <br />

        <p>Ich habe mit <strong>13</strong> angefangen zu programmieren und lerne seitdem, wie man ein <strong>erfolgreicher Entwickler</strong> wird.</p>

        <br />

        <p>
          Ich studiere <strong>front-end</strong> frameworks wie <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJs</a> und <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
        </p>

        <br />

        <p>
          Ich gebe vor, meine <strong>back-end</strong> fähigkeiten zu verbessern, indem ich <a href="https://nestjs.com/" target="_blank" rel="noreferrer">NestJs</a> und <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">Prisma</a> lerne. Informieren Sie sich auch ausführlicher über <a href="https://microservices.io/" target="_blank" rel="noreferrer">microservices</a>.
        </p>`,
    },
  },
  Components: {
    Header: {
      title: 'Miguel Rocha',
      subtitle: 'Ich bin ein FullStack Entwickler',
      links: {
        github: 'Besuchen sie mein github-profil',
        instagram: 'Besuchen sie mein instagram-profil',
        linkedin: 'Besuchen sie mein linkedin-profil',
        mail: 'Schick mir eine e-mail',
      },
    },
    Footer: {
      message: `Hergestellt von <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">Miguel Rocha</a>`,
    },
    Navigation: {
      button: {
        palette: 'Ändern sie die farbpalette',
        crown: 'Unterstütze mich',
      },
      links: {
        home: 'Startseite',
      },
      linkMessage: 'Gehe zu',
    },
    LanguageSelector: {
      selected: 'Sprache ausgewählt',
      trigger: 'Sprache ändern',
      triggerIcon: 'Sprachauswahlfeld öffnen',
    },
  },

  date: {
    template: "eee', 'd'. 'MMMM' 'uuuu' um 'k':'mm' Uhr'",
    locale: DE,
  },
};

export default de;
