import { Translation } from '.';

const en: Translation = {
  Pages: {
    Index: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'I am a FullStack Developer',
      },
      Cards: {
        me: {
          title: 'About me',
          subtitle: 'a little bit about me',
        },
        activity: {
          title: 'Activity',
          subtitle: 'my activity through GitHub',
        },
        projects: {
          title: 'Projects',
          subtitle: 'some of my projects available on GitHub',
        },
        samples: {
          title: 'Samples',
          subtitle: 'some amazing code samples',
        },
      },
    },
    Samples: {
      Header: {
        title: 'Code Samples',
        subtitle: 'Some simple and awesome code samples',
      },
      Text: `<p>
          These are simple code samples, to see more complex projects, check out my <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">GitHub profile</a>.
        </p>

        <br />`,
    },
    Error404: {
      Header: {
        title: 'Page not found',
        subtitle: 'The page you were looking for does not exist',
      },
    },
    Projects: {
      Header: {
        title: 'My Projects',
        subtitle: 'Some of my projects available on GitHub',
      },
    },
    Activity: {
      Header: {
        title: 'My Activity',
        subtitle: 'Track my activity through GitHub',
      },
    },
    Me: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: "That's a little bit about me",
      },
      Text: `<p>
          Hi, I&#39;m <strong>Miguel</strong>. I&#39;m a <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">developer</a> and a content creator. I&#39;m currently learning <strong>web development</strong>.
        </p>

        <br />

        <p>
          I started programming at <strong>13</strong> and have been learning how to become a <strong>successful developer</strong> since then.
        </p>

        <br />

        <p>
          I am studying <strong>front-end</strong> frameworks such as <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJs</a>, and <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
        </p>

        <br />

        <p>
          I pretend to improve my <strong>back-end</strong> skills by learning <a href="https://nestjs.com/" target="_blank" rel="noreferrer">NestJs</a> and <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">Prisma</a>. Also, study more about <a href="https://microservices.io/" target="_blank" rel="noreferrer">microservices</a>.
        </p>`,
    },
  },
  Components: {
    Header: {
      title: 'Miguel Rocha',
      subtitle: 'I am a FullStack Developer',
    },
    Footer: {
      message: `Made by <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">Miguel Rocha</a>`,
    },
  },
};

export default en;
