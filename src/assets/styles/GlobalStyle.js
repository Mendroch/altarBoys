import { createGlobalStyle } from 'styled-components';
import FiraSansRegular from 'assets/fonts/FiraSans-Regular.ttf';
import FiraSansMedium from 'assets/fonts/FiraSans-Medium.ttf';
import FiraSansSemiBold from 'assets/fonts/FiraSans-Bold.ttf';
import FiraSansBold from 'assets/fonts/FiraSans-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }

  @font-face {
    font-family: "FiraSansRegular";
    src: url(${FiraSansRegular}) format('truetype');
  }

  @font-face {
    font-family: "FiraSansMedium";
    src: url(${FiraSansMedium}) format('truetype');
  }

  @font-face {
    font-family: "FiraSansSemiBold";
    src: url(${FiraSansSemiBold}) format('truetype');
  }

  @font-face {
    font-family: "FiraSansBold";
    src: url(${FiraSansBold}) format('truetype');
  }
  
  body {
    font-family: "Fira Sans", sans-serif;
  }
  
  a, button {
    font-family: "FiraSansRegular";
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a:hover {
    color: initial;
    text-decoration: none;
  }
`;
