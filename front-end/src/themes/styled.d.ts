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