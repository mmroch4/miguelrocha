import { GetStaticProps } from 'next';
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Text } from '../components/Text';
import { IRepository } from '../interface/IRepositoy';
import { octokit } from '../lib/octokit';

export const getStaticProps: GetStaticProps = async () => {
  const { data: repositories } = await octokit.request('GET /users/{username}/repos', {
    username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
  });

  const projects = repositories.filter(({ topics }) => topics?.includes('portfolio-project'));

  return {
    props: {
      projects,
    },
    revalidate: 60 * 10,
  };
};

interface IProps {
  projects: IRepository[];
}

const Page = ({ projects }: IProps) => {
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
          title: 'My Projects',
          subtitle: 'Some of my projects available on GitHub',
        }}
      />

      <Cards
        cards={projects.map(({ html_url, full_name, description, created_at, topics }) => ({
          external: true,
          path: html_url,
          title: full_name,
          subtitle: description || new Date(created_at as string).toLocaleString(),
          topics,
        }))}
      />

      <Footer />
    </>
  );
};

export default Page;
