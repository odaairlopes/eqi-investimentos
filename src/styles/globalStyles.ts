import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --bgColor: #EFEFEF;
    --primaryColor: #ED8E53;
    --btnColor: #969696;
}

*, body, #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
}

body {
    background-color: var(--bgColor);
}

`;
