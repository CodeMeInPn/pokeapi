import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *, *:after, *:before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: ${({ theme }) => theme.fonts.primaryFontFamily};
        background-color: ${({ theme }) => theme.colors.gray_200};
    }
    #__next{
        width: 100%;
    }
`;
