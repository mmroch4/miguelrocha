import { GetStaticProps } from 'next';
import { TbHome } from 'react-icons/tb';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { useTranslation } from '../hooks/useTranslation';
import { IUserEvent } from '../interface/IUserEvent';
import { octokit } from '../lib/octokit';
import { GithubEvents } from '../services/github-events';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await octokit.request('GET /users/{username}/events/public', {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
  });

  return {
    props: {
      data,
    },
    revalidate: 60 * 10,
  };
};

interface Props {
  data: IUserEvent[];
}

const Activity = ({ data }: Props) => {
  const { language } = useTranslation();

  const events = new GithubEvents(language).filterEvents(data);

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
          title: language.Pages.Activity.Header.title,
          subtitle: language.Pages.Activity.Header.subtitle,
        }}
      />

      <Cards
        cards={events.map(({ path, action, title, date }) => ({
          external: true,
          path: path as string,
          title: `[${action}] - ${title}`,
          subtitle: date,
        }))}
      />

      <Footer />
    </>
  );
};

export default Activity;
