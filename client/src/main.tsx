import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
