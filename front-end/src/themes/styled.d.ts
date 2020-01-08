/* import {} from 'styled-components';
import theme from '../theme';
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
} */

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        colors: {
            black01: string
            black02: string
            grey01: string
            grey02: string
            grey03: string
            main: string
            secondary: string
            white: string
        },
        fontSizes: {
            large: string
            medium: string
            small: string
        }
    }
}