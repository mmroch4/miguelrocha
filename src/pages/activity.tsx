import { GetStaticProps } from 'next';
import { TbHome } from 'react-icons/tb';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { useTranslation } from '../hooks/useTranslation';
import { IFilteredEvent } from '../interface/IFilteredEvent';
import { octokit } from '../lib/octokit';
import { HandleEvents } from '../services/HandleEvents';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await octokit.request('GET /users/{username}/events/public', {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
  });

  const events = new HandleEvents().filterEvents(data);

  return {
    props: {
      events,
    },
    revalidate: 60 * 10,
  };
};

interface Props {
  events: IFilteredEvent[];
}

const Activity = ({ events }: Props) => {
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
