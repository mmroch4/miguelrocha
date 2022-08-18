import { GetStaticProps } from 'next';
import { TbHome } from 'react-icons/tb';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Text } from '../components/Text';
import { useTranslation } from '../hooks/useTranslation';
import { IRepository } from '../interface/IRepositoy';
import { octokit } from '../lib/octokit';
import { formatDate } from '../utils/format-date';

export const getStaticProps: GetStaticProps = async () => {
  const { data: repositories } = await octokit.request('GET /users/{username}/repos', {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
  });

  const samples = repositories.filter(({ topics }) => topics?.includes('portfolio-sample'));

  return {
    props: {
      samples,
    },
    revalidate: 60 * 10,
  };
};

interface IProps {
  samples: IRepository[];
}

const Samples = ({ samples }: IProps) => {
  const { language, locale } = useTranslation();

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
          title: language.Pages.Samples.Header.title,
          subtitle: language.Pages.Samples.Header.subtitle,
        }}
      />

      <Text dangerouslySetInnerHTML={{ __html: language.Pages.Samples.Text }}>
        {/* <p>
          These are simple code samples, to see more complex projects, check out my
          <a href="https://github.com/mmroch4" target="_blank" rel="noreferrer">
            GitHub profile
          </a>
          .
        </p>

        <br /> */}
      </Text>

      <Cards
        cards={samples.map(({ html_url, full_name, description, created_at, topics }) => ({
          external: true,
          path: html_url,
          title: full_name,
          subtitle:
            description ||
            formatDate(created_at as string, language.date.template, {
              locale: language.date.locale,
            }),
          topics,
        }))}
      />

      <Footer />
    </>
  );
};

export default Samples;
