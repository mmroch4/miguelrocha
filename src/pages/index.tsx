import { Cards } from '../components/Cards';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { useTranslation } from '../hooks/useTranslation';

const Index = () => {
  const { language } = useTranslation();

  return (
    <>
      <Navigation />

      <Header
        content={{
          title: language.Pages.Index.Header.title,
          subtitle: language.Pages.Index.Header.subtitle,
        }}
      />

      <Cards
        cards={[
          {
            path: '/me',
            title: language.Pages.Index.Cards.me.title,
            subtitle: language.Pages.Index.Cards.me.subtitle,
          },
          {
            path: '/activity',
            title: language.Pages.Index.Cards.activity.title,
            subtitle: language.Pages.Index.Cards.activity.subtitle,
          },
          {
            path: '/projects',
            title: language.Pages.Index.Cards.projects.title,
            subtitle: language.Pages.Index.Cards.projects.subtitle,
          },
          {
            path: '/samples',
            title: language.Pages.Index.Cards.samples.title,
            subtitle: language.Pages.Index.Cards.samples.subtitle,
          },
        ]}
      />

      <Footer />
    </>
  );
};

export default Index;
