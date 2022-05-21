import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../stitches/global';
import { styled } from '../stitches/stitches.config';
import { darkTheme, lightTheme } from '../stitches/themes';

const Wrapper = styled('div', {
  maxWidth: 1024,
  width: '100vw',
  padding: '1.25rem',
});

const App = ({ Component, pageProps }: AppProps) => {
  GlobalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <Head>
        <title>Miguel Rocha</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
