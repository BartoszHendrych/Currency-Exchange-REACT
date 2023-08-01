import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
   
*, ::after, ::before {
        box-sizing: inherit;
    }       

    body {
        background-image: url("background.jpg");
        background-position: center;
        background-size: cover;
        min-height: 100vh;
    }
`;