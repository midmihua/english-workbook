import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/Main';
import DashboardPage from '../pages/Dashboard';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import PracticePage from '../pages/Practice';
import VocabularyPage from '../pages/Vocabulary';
import { PAGES } from '../shared/constants';

export const router = createBrowserRouter([
  {
    path: PAGES.HOME.url,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PAGES.DASHBOARD.url,
        element: <DashboardPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PAGES.VOCABULARY.url,
        element: <VocabularyPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: PAGES.PRACTICE.url,
        element: <PracticePage />,
        errorElement: <ErrorPage />,
      }
    ],
  }
]);
