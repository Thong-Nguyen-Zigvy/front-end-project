import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #ffffff;
        --primaryColor: #28225E;
        --bgColor: #FBFBFD;
        --borderColor: #f2f2f7;
        --buttonbgColor: #EAE8FA;
        --buttonColor: #3322CF;
        --borderColorDark: #E0DEE3;
        --ColorDark: #BDBDBD;
        --fontSuperBig: 2.5rem;
        --fontBig:1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }
    *{
        box-sizing: border-box;
        font-family: 'Inter var', serif;
        padding: 0;
        margin: 0;
    }
    body{
        margin: 0;
        background-color: var(--bgColor);
        color: var(--primaryColor);
        font-size: 1rem;
        a {
            text-decoration: none;
        }
    }
`;