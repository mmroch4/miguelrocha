import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

const Error404= () => {
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
          title: 'Page not found',
          subtitle: 'The page you were looking for does not exist',
        }}
      />

      <Footer />
    </>
  );
};

export default Error404;
