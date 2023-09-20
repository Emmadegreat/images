import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/*<Auth0Provider
      domain='dev-ftqqx17ghaswe01h.us.auth0.com'
      clientId='XceaVGHJ81lIUAJQIkJWIFcYiniAcQnY'
      redirectUri={window.location.origin}
      >

  </Auth0Provider>*/}

  </React.StrictMode>
);

