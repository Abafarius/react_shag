import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: "Poppins", sans-serif;
        background: linear-gradient(135deg, #1a1a1a, #222);
        color: white;
        text-align: center;
      }
    `}
  />
);

export default GlobalStyles;
