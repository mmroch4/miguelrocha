import { Translation } from '.';

const es: Translation = {
  Pages: {
    Index: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Soy un programador FullStack',
      },
      Cards: {
        me: {
          title: 'Sobre mí',
          subtitle: 'Un poco sobre mí',
        },
        activity: {
          title: 'Actividad',
          subtitle: 'mi actividad a través de GitHub',
        },
        projects: {
          title: 'Proyectos',
          subtitle: 'algunos de mis proyectos disponibles en GitHub',
        },
        samples: {
          title: 'Ejemplos',
          subtitle: 'algunos ejemplos de código simples',
        },
      },
    },
    Samples: {
      Header: {
        title: 'Ejemplos de código',
        subtitle: 'Algunos ejemplos de código simples e increíbles',
      },
      Text: `<p>
          Estos son ejemplos de código simples, para ver proyectos más complejos, consulte mi <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">perfil de GitHub</a>.
        </p>

        <br />`,
    },
    Error404: {
      Header: {
        title: 'Página no encontrada',
        subtitle: 'La pagina que buscabas no existe',
      },
    },
    Projects: {
      Header: {
        title: 'Mis Proyectos',
        subtitle: 'Algunos de mis proyectos disponibles en GitHub',
      },
    },
    Activity: {
      Header: {
        title: 'Mi Actividad',
        subtitle: 'Seguimiento de mi actividad a través de GitHub',
      },
    },
    Me: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Eso es un poco sobre mí',
      },
      Text: `<p>
          Hola, soy <strong>Miguel</strong>. Soy <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">programador</a> y creador de contenido. Actualmente estoy aprendiendo <strong>programación web</strong>.
        </p>

        <br />

        <p>
          Empecé a programar a los <strong>13 años</strong> y desde entonces he estado aprendiendo cómo convertirme en un <strong>programador de éxito</strong>.
        </p>

        <br />

        <p>
          Estoy estudiando <strong>front-end</strong> frameworks como <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJs</a> y <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
        </p>

        <br />

        <p>
          Pretendo mejorar mis habilidades <strong>back-end</strong> aprendiendo <a href="https://nestjs.com/" target="_blank" rel="noreferrer">NestJs</a> y <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">Prisma</a>. Además, estudie más sobre los <a href="https://microservices.io/" target="_blank" rel="noreferrer">microservicios</a>.
        </p>`,
    },
  },
  Components: {
    Header: {
      title: 'Miguel Rocha',
      subtitle: 'Soy un programador FullStack',
      links: {
        github: 'Visita mi perfil de GitHub',
        instagram: 'Visita mi perfil de Instagram',
        linkedin: 'Visita mi perfil de LinkedIn',
        mail: 'Envíame un correo electrónico',
      },
    },
    Footer: {
      message: `Hecho por <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">Miguel Rocha</a>`,
    },
    Navigation: {
      button: {
        palette: 'Cambiar la paleta de colores del website',
        crown: 'Apoyarme',
      },
      linkMessage: 'Ir para',
    },
  },
};

export default es;
