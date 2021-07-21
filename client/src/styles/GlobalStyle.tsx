import { css, Global } from "@emotion/react";
import emotionResetCSS from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionResetCSS}

        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          font-family: "NanumSquare", sans-serif !important;
        }

        .slider {
        }
      `}
    />
  );
};

export default GlobalStyle;
