import 'semantic-ui-css/semantic.min.css';
import '../fonts.css'; /* as createGlobalStyle is not importing fonts*/
import { createGlobalStyle } from '@xstyled/styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F7F9F9;
        color: black_text;
    }

    pre {
        display: inline-block;
        max-width: 100%;
        white-space: pre-wrap;
    }

    code {
        display: inline-block;
        max-width: 100%;
        font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
        background-color: grey_light;
        color: black_primary;
        font-size: sm;
    }

    ul {
        padding: 0;
    }

    a:hover {
        text-decoration: none;
    }

    .container-fluid {
        max-width: 1200px;
        padding: 0 2.5rem 0 2.5rem;
        margin: 3.75rem auto 0 auto;
    }

    .ui.container {
        margin: 3.75rem auto 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        color: black_primary;
        font-weight: 500;
        line-height: 100%;
        margin-top: 0;
    }

    h1, h2, h3 {
        font-family: 'Roboto Mono';
    }

    h1 {
        font-size: 2.6rem;
        margin-bottom: 3rem;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.25rem;
    }

    h3 {
        font-family: 'Roboto Mono';
        font-size: 2.6rem;
        margin-bottom: 1.25rem;
    }

    h4, h5, h6 {
        font-family: 'Roboto';   
    }

    h6 {
        font-size: md;
        margin-bottom: 0.4rem;
    }

    strong {
        font-weight: 500;
    }

    ::selection {
        background-color: #282828;
        color: #FFF;
    }

    @media (max-width: 1200px) {
        .container-fluid {
        padding: 0 2.5rem 0 2.5rem;
        }

        .ui.grid {
            margin-left: 0;
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        .container-fluid {
        margin: 2.5rem auto 0 auto;
        padding: 0 1.25rem 0 1.25rem;
        }

        .ui.container, .ui.grid>.column:not(.row) {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media only screen and (max-width: 576px) {
        .container-fluid {
        padding:0;
        }

        .ui.grid, .ui.container {
            margin-top: 0rem!important;
            margin-left: 0!important;
            margin-right: 0!important;
        }

        h3 {
            font-size: 2.1rem;
        }
    }
`;