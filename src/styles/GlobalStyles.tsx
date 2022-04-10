import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *, *:after, *:before{
        margin: 0;
        padding: 0;
    }
    body{
        font-family: ${({ theme }) => theme.fonts.primaryFontFamily};
    }
`;
