import { createGlobalStyle } from 'styled-components'

import IBMPlexMono from '../assets/fonts/IBMPlexMono-LightItalic-Latin1.woff2'
import IBMPlexSansLight from '../assets/fonts/IBMPlexSans-Light-Latin1.woff2'
import IBMPlexSansMedium from '../assets/fonts/IBMPlexSans-Medium-Latin1.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    font-display: fallback;
    src: local('IBM Plex Mono Light Italic'),
      local('IBMPlexMono-LightItalic'),
      url(${IBMPlexMono}) format('woff2');
      unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
    src: local('IBM Plex Sans Light'),
      local('IBMPlexSans-Light'),
      url(${IBMPlexSansLight}) format('woff2');
      unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
    src: local('IBM Plex Sans Medium'),
      local('IBMPlexSans-Medium'),
      url(${IBMPlexSansMedium}) format('woff2');
      unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
  }

  :root {
    --radius: 5px;
    --color-primary: #347f7a;
    --color-secondary: #162b3c;
    --color-offwhite: #e7ecef;
  }

  html, body {
    margin: 0;
  }

  body {
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 500;
  }

  a {
    color: var(--color-primary);
    transition: color 200ms ease;

    &:hover {
      color: var(--color-secondary);
    }
  }
`

export default GlobalStyle