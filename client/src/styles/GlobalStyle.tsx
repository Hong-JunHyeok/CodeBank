import { css, Global } from "@emotion/react";
import emotionResetCSS from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionResetCSS}
        @font-face {
          font-family: "NanumSquare";
          src: url("../assets/font/NanumSquareRegular.ttf") format("truetype");
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          font-family: NanumSquare;
        }
      `}
    />
  );
};

export default GlobalStyle;
