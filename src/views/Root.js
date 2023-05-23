import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { HashRouter as Router } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import ContentProvider from 'providers/ContentProvider';
import ParishProvider from 'providers/ParishProvider';
import AnimatedRoutes from './AnimatedRoutes';
import { useDisablePinchZoom } from 'hooks/useDisablePinchZoom';
import InitialProvider from 'providers/InitialProvider';

const Root = () => {
  useDisablePinchZoom();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <ContentProvider>
            <ParishProvider>
              <InitialProvider>
                <AnimatedRoutes />
              </InitialProvider>
            </ParishProvider>
          </ContentProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
