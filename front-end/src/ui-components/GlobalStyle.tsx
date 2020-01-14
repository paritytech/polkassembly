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
        background-color: #F1F3F2;
        color: #555252;
    }

    code {
        font-family: 'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
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
        font-family: 'Roboto';
        font-weight: 500;
        line-height: 100%;
        margin-top: 0;
    }

    h3 {
        font-family: 'Roboto Mono';
        font-size: 2.6rem;
        margin-bottom: 1.25rem;
    }

    h4, h5, h6 {
        font-family: 'Roboto';   
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
            margin-top: 0!important;
            margin-left: 0!important;
            margin-right: 0!important;
        }

        h3 {
            font-size: 2.1rem;
        }
    }

    .btn {
        font-family: 'Roboto Mono';
        font-size: 1.125rem;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 0.188rem;
        border: none;
    }

    .btn-primary {
        background-color: #EB5757;
    }

    .btn-primary:hover {
        background-color: #CC3D3D;
    }

    .btn-primary:not(:disabled):not(.disabled).active,
    .btn-primary:not(:disabled):not(.disabled):active {
        background-color: #CC3D3D;
    }

    .btn-primary.focus,
    .btn-primary:focus,
    .btn-primary:not(:disabled):not(.disabled):active:focus {
        box-shadow: none;
    }
`;