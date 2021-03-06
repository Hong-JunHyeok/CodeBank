import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import wrapper from "../../store";

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(AppComponent);
