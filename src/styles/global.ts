import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    /* @font-face {
        font-family: 'ProductSans';
        src: url('../../@fonts/Product Sans Regular.ttf');
    } */

    body {
        background-color: ${props => props.theme['black-900']};
        color: ${props => props.theme.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`