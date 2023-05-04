import { createGlobalStyle } from 'styled-components';
import FiraSansLight from 'assets/fonts/FiraSans-Light.ttf';
import FiraSansRegular from 'assets/fonts/FiraSans-Regular.ttf';
import FiraSansMedium from 'assets/fonts/FiraSans-Medium.ttf';
import FiraSansSemiBold from 'assets/fonts/FiraSans-Bold.ttf';
import FiraSansBold from 'assets/fonts/FiraSans-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "FiraSansLight";
    src: url(${FiraSansLight}) format('truetype');
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

  html {
    background-color: ${({ theme }) => theme.colors.bateau};
  }

  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    height: 100vh;
    font-family: "FiraSansRegular";
    background-color: ${({ theme }) => theme.colors.bateau};
    background-image: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.bateau} 0%,
      ${({ theme }) => theme.colors.potteryBlue} 100%
    );
    overflow: hidden;
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
