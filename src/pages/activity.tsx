import { GetStaticProps } from 'next';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
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
          title: 'My Activity',
          subtitle: 'Track my activity through GitHub',
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
