import '@styles/globals.css'
import * as React from 'react';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'src/material-ui/theme';
import createEmotionCache from 'src/material-ui/createEmotionCache';
import Head from 'next/head';
import Layout from 'src/components/Layout/Layout';

import {PersistGate} from 'redux-persist/integration/react';
import  {persistStore} from "redux-persist";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const persistStoreDetails = persistStore(store);

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStoreDetails}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      </Provider>

    </CacheProvider>
  );
}
