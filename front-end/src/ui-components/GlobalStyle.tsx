// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import 'semantic-ui-css/semantic.min.css';
import '../fonts.css'; /* as createGlobalStyle is not importing fonts*/
import { createGlobalStyle } from '@xstyled/styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: font_default, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: grey_app_background;
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
        font-family: font_mono, source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
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

    #page-container {
        position: relative;
        min-height: 100vh;
    }

    .ui.container {
        margin: 4rem auto 0 auto;
        padding-bottom: 8rem;
    }

    h1, h2, h3, h4, h5, h6 {
        color: black_primary;
        font-family: font_default;
        line-height: 100%;
        margin-top: 0;
    }

    h1, h2, h3 {
        font-weight: 400;
        font-size: xl;
    }

    h3 {
        font-weight: 400;
    }

    h4, h5, h6 {
        font-weight: 500; 
    }

    h1 {
        margin-bottom: 3rem;
    }

    h2 {
        margin-bottom: 1.2rem;
    }

    h3, h4 {
        font-size: lg;
        margin-bottom: 1.2rem;
    }

    h5, h6 {
        font-size: md;
        margin-bottom: 0.4rem;
    }

    strong {
        font-weight: 500;
    }

    ::selection {
        background-color: black_primary;
        color: white;
    }

    .ui.dropdown .menu, .ui.dropdown .menu>.item {
        font-size: sm;
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