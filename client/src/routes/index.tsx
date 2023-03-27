import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/layouts/main';
import { PAGES } from '../constants';
import Dashboard from '../pages/dashboard';
import Error from '../pages/error';
import Home from '../pages/home';
import Practice from '../pages/practice';
import Vocabulary from '../pages/vocabulary';

export const router = createBrowserRouter([
  {
    path: PAGES.HOME.url,
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: PAGES.DASHBOARD.url,
        element: <Dashboard />,
        errorElement: <Error />,
      },
      {
        path: PAGES.VOCABULARY.url,
        element: <Vocabulary />,
        errorElement: <Error />,
      },
      {
        path: PAGES.PRACTICE.url,
        element: <Practice />,
        errorElement: <Error />,
      }
    ],
  }
]);
