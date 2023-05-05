import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));

const startApp = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
  if (window.cordova) window.plugins.OneSignal.setAppId('93442cb8-9091-495b-b46b-67201613a978');
  serviceWorker.register();
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

serviceWorker.unregister();
