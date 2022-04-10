import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import theme from "styles";

function MyApp({ Component, pageProps }: AppProps) {
  return;

  <>
    <ThemeProvider theme={theme} />
    <GlobalStyles />
    <Component {...pageProps} />
  </>;
}

export default MyApp;
