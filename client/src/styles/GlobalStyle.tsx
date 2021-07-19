import { css, Global } from "@emotion/react";
import emotionResetCSS from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionResetCSS}

        *, *::after, *::before {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyle;
