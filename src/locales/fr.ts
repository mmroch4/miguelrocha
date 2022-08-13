import { Translation } from '.';

const fr: Translation = {
  Pages: {
    Index: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Je suis un développeur FullStack',
      },
      Cards: {
        me: {
          title: 'Moi',
          subtitle: 'un peu à propos de moi',
        },
        activity: {
          title: 'Activité',
          subtitle: 'mon activité à travers GitHub',
        },
        projects: {
          title: 'Projets',
          subtitle: 'certains de mes projets disponibles sur GitHub',
        },
        samples: {
          title: 'Exemples',
          subtitle: 'incroyables exemples de code',
        },
      },
    },
    Samples: {
      Header: {
        title: 'Exemples de codes',
        subtitle: 'Quelques exemples de code simples et impressionnants',
      },
      Text: `<p>
          Ce sont des exemples de code simples, pour voir des projets plus complexes, consultez mon <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">profil GitHub</a>.
        </p>

        <br />`,
    },
    Error404: {
      Header: {
        title: 'Page non trouvée',
        subtitle: "La page que vous recherchez n'existe pas",
      },
    },
    Projects: {
      Header: {
        title: 'Mes Projets',
        subtitle: 'Certains de mes projets disponibles sur GitHub',
      },
    },
    Activity: {
      Header: {
        title: 'Mon Activité',
        subtitle: 'Suivre mon activité à travers GitHub',
      },
    },
    Me: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: "C'est un peu de moi",
      },
      Text: `<p>
          Salut, je suis <strong>Miguel</strong>. Je suis un <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">développeur</a> et un créateur de contenus. J'apprends actuellement le <strong>développement web</strong>.
        </p>

        <br />

        <p>
          J'ai commencé à programmer à <strong>13 ans</strong> j'ai appris à devenir un <strong>développeur à succès</strong> depuis lors.
        </p>

        <br />

        <p>
          J'étudie les frameworks <strong>front-end</strong> tels que <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJs</a>, et <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
        </p>

        <br />

        <p>
          Je prétends améliorer mes compétences <strong>back-end</strong> en apprenant <a href="https://nestjs.com/" target="_blank" rel="noreferrer">NestJs</a> et <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">Prisma</a>. En outre, étudiez-en davantage sur les <a href="https://microservices.io/" target="_blank" rel="noreferrer">microservices</a>.
        </p>`,
    },
  },
  Components: {
    Header: {
      title: 'Miguel Rocha',
      subtitle: 'Je suis un développeur FullStack',
      icon: 'icône',
    },
    Footer: {
      message: `Fait par <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">Miguel Rocha</a>`,
    },
  },
};

export default fr;
