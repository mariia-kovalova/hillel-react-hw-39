// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import '@picocss/pico';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles.styled';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter basename="/hillel-react-hw-39">
    <Provider store={store}>
      <Global styles={GlobalStyles} />
      <App />
    </Provider>
  </BrowserRouter>

  // </StrictMode>
);
