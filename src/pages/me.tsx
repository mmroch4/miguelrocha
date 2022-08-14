import { TbHome } from 'react-icons/tb';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Text } from '../components/Text';
import { useTranslation } from '../hooks/useTranslation';

const Me = () => {
  const { language } = useTranslation();

  return (
    <>
      <Navigation
        links={[
          {
            path: '/',
            title: language.Components.Navigation.links.home,
            icon: <TbHome />,
          },
        ]}
      />

      <Header
        content={{
          title: language.Pages.Me.Header.title,
          subtitle: language.Pages.Me.Header.subtitle,
        }}
      />

      <Text dangerouslySetInnerHTML={{ __html: language.Pages.Me.Text }}>
        {/* <p>
          Hi, I&#39;m <strong>Miguel</strong>. I&#39;m a{' '}
          <a href={'https://github.com/mmroch4'} target="_blank" rel="noreferrer">
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
        </p> */}
      </Text>

      <Footer />
    </>
  );
};

export default Me;
