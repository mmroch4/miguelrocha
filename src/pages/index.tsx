// Components
import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

const Page = () => {
  return (
    <>
      <Navigation />

      <Header
        content={{
          title: 'Miguel Rocha',
          subtitle: 'I am a FullStack Developer',
        }}
      />

      <Cards
        cards={[
          {
            path: '/me',
            title: 'About me',
            subtitle: 'an amazing subtitle',
          },
          {
            path: '/activity',
            title: 'Activity',
            subtitle: 'an amazing subtitle',
          },
        ]}
      />

      <Footer />
    </>
  );
};

export default Page;
