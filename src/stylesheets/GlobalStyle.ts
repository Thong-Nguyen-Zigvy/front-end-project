import { createGlobalStyle } from "styled-components";

const sizes = {
    mobile: '500px',
    tabPort: '900px',
    tabLand: '1200px',
    bigDesktop: '1800px'
}

export const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    tabPort: `(max-width: ${sizes.tabPort})`,
    tabLand: `(max-width: ${sizes.tabLand})`,
    bigDesktop: `(min-width: ${sizes.bigDesktop})`,
}

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #ffffff;
        --black: #000000;
        --primaryColor: #28225E;
        --bgColor: #FBFBFD;
        --borderColor: #f2f2f7;
        --buttonbgColor: #EAE8FA;
        --buttonColor: #3322CF;
        --borderColorDark: #E0DEE3;
        --ColorDark: #BDBDBD;
        --darkGrey: #666666;
        --fontSuperBig: 4.2rem;
        --fontBig: 2.2rem;
        --fontMed: 2rem;
        --fontSmall: 1.6rem;
    }
    *{
        box-sizing: border-box;
        font-family: 'Inter var', serif;
        padding: 0;
        margin: 0;
    }

    html {
        // This defines what 1rem is
        font-size: 62.5%; //1 rem = 10px;

        @media ${devices.tabLand} { //tab-land
            font-size: 56.25%; //1 rem = 9px
        }

        @media ${devices.tabPort} { //tab-port
            font-size: 50%; //1 rem = 8px
        }

        @media ${devices.bigDesktop} { //big-desktop
            font-size: 75%; //1rem = 12
        }
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        background-color: var(--bgColor);
        color: var(--primaryColor);
        font-size: var(--fontSmall);
        a {
            text-decoration: none;
        }
    }
`;