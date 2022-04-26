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
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: ${({ theme }) => theme.fonts.primaryFontFamily};
        background-color: ${({ theme }) => theme.colors.gray_200};
    }
`;
