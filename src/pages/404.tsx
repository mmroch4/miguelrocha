import { TbHome } from 'react-icons/tb';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { useTranslation } from '../hooks/useTranslation';

const Error404 = () => {
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
          title: language.Pages.Error404.Header.title,
          subtitle: language.Pages.Error404.Header.subtitle,
        }}
      />

      <Footer />
    </>
  );
};

export default Error404;
