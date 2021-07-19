import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default AppComponent;
