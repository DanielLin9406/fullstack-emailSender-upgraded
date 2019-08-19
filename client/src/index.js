import React from 'react';
import { render } from 'react-dom';
import { Frontload } from 'react-frontload';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './index.scss';

const root = document.querySelector('#root');
const Application = (
  <BrowserRouter>
    <Frontload noServerRender="true">
      <App />
    </Frontload>
  </BrowserRouter>
);

// If we're not running on the server, just render like normal
render(Application, root);
// If runnign in development with Hot Reload
// if (module.hot) {
//   module.hot.accept('./app/App', () => {
//     const NextApp = require('./app/App').default;
//     render(NextApp);
//   });
// }
