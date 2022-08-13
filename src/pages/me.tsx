import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Text } from '../components/Text';

const Me = () => {
  return (
    <>
      <Navigation
        links={[
          {
            path: '/',
            title: 'home',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            ),
          },
        ]}
      />

      <Header
        content={{
          title: 'Miguel Rocha',
          subtitle: "That's a little bit about me",
        }}
      />

      <Text>
        <p>
          Hi, I&#39;m <strong>Miguel</strong>. I&#39;m a{' '}
          <a
            href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            developer
          </a>{' '}
          and a content creator. I&#39;m currently learning <strong>web development</strong>.
        </p>

        <br />

        <p>
          I started programming at <strong>13</strong> and since then I have been learning how to
          become a <strong>successful developer</strong>.
        </p>

        <br />

        <p>
          I am studying <strong>front-end</strong> frameworks such as{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>
          ,{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            NextJs
          </a>{' '}
          and{' '}
          <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
            Vite
          </a>
          .
        </p>

        <br />

        <p>
          I pretend to improve my <strong>back-end</strong> skills by learning{' '}
          <a href="https://nestjs.com/" target="_blank" rel="noreferrer">
            NestJs
          </a>{' '}
          and{' '}
          <a href="https://www.prisma.io/" target="_blank" rel="noreferrer">
            Prisma
          </a>
          . Also, study more about{' '}
          <a href="https://microservices.io/" target="_blank" rel="noreferrer">
            microservices
          </a>
          .
        </p>
      </Text>

      <Footer />
    </>
  );
};

export default Me;
