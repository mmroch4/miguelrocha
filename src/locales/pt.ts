import { Translation } from '.';

const pt: Translation = {
  Pages: {
    Index: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Sou desenvolvedor Full Stack',
      },
      Cards: {
        me: {
          title: 'Sobre',
          subtitle: 'um pouco sobre mim',
        },
        activity: {
          title: 'Atividade',
          subtitle: 'minha atividade no GitHub',
        },
        projects: {
          title: 'Projetos',
          subtitle: 'alguns dos meus projetos disponíveis no GitHub',
        },
        samples: {
          title: 'Exemplos',
          subtitle: 'alguns exemplos de código incríveis',
        },
      },
    },
    Samples: {
      Header: {
        title: 'Exemplos de Código',
        subtitle: 'Alguns exemplos de código simples e incríveis',
      },
      Text: `<p>
          Esses portfólios são apenas exemplos de códigos simples, para ver projetos complexos, dê uma olhada no meu <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">perfil do GitHub</a>.
        </p>

        <br />`,
    },
    Error404: {
      Header: {
        title: 'Página não encontrada',
        subtitle: 'A página que procura não existe',
      },
    },
    Projects: {
      Header: {
        title: 'Meus Projetos',
        subtitle: 'Alguns dos meus projetos disponíveis no GitHub',
      },
    },
    Activity: {
      Header: {
        title: 'Minha Atividade',
        subtitle: 'Fique a par da minha atividade no GitHub',
      },
    },
    Me: {
      Header: {
        title: 'Miguel Rocha',
        subtitle: 'Um pouco sobre mim',
      },
      Text: `<p>
          Olá, me chamo <strong>Miguel</strong>. Sou um <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">desenvolvedor</a> e criador de conteúdo. Atualmente estou aprendendo <strong>desenvolvimento web</strong>.
        </p>

        <br />

        <p>
          Entrei no mundo da programação aos <strong>13 anos</strong> e desde então venho aprendendo a como me tornar um <strong>desenvolvedor de sucesso</strong>.
        </p>

        <br />

        <p>
          Estou estudando frameworks <strong>front-end</strong> como <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://nextjs.org/" target="_blank" rel="noreferrer">NextJs</a> e <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
        </p>

        <br />

        <p>
          Pretendo melhorar as minhas abilidades <strong>back-end</strong> aprendendo <a href="https://nestjs.com/" target="_blank" rel="noreferrer">NestJs</a> e <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">Prisma</a>. E também, estudar mais sobre <a href="https://microservices.io/" target="_blank" rel="noreferrer">micro-serviços</a>.
        </p>`,
    },
  },
  Components: {
    Header: {
      title: 'Miguel Rocha',
      subtitle: 'Sou um desenvolvedor Full Stack',
      links: {
        github: 'Visite meu perfil do github',
        instagram: 'Visite meu perfil do instagram',
        linkedin: 'Visite meu perfil do linkedin',
        mail: 'Envie-me um e-mail',
      },
    },
    Footer: {
      message: `Feito por <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">Miguel Rocha</a>`,
    },
    Navigation: {
      button: {
        palette: 'Mudar paleta de cor',
        crown: 'Ajude-me',
      },
      links: {
        home: 'Página inicial',
      },
      linkMessage: 'Ir para',
    },
    LanguageSelector: {
      selected: 'Idioma selecionado',
      trigger: 'Mudar idioma',
      triggerIcon: 'Abrir caixa de seleção de idiomas',
    },
  },
};

export default pt;
