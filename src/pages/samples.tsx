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
          title: 'Code Samples',
          subtitle: 'Some simple and awesome code samples',
        }}
      />

      <Text>
        <p>
          These are simple code samples, to see more complex projects, check out my{' '}
          <a
            href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
          .
        </p>

        <br />
      </Text>

      <Cards
        cards={samples.map(({ html_url, full_name, description, created_at, topics }) => ({
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

export default Samples;
