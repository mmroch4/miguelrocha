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
            subtitle: 'a little bit about me',
          },
          {
            path: '/activity',
            title: 'Activity',
            subtitle: 'my activity through GitHub',
          },
          {
            path: '/samples',
            title: 'Samples',
            subtitle: 'some amazing code samples',
          },
        ]}
      />

      <Footer />
    </>
  );
};

export default Page;
