import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/Main';
import PrefetchDataLayout from '../features/api/Prefetch';
import EditTerm from '../features/terms/EditTerm';
import TermItem from '../features/terms/TermItem';
import TermsList from '../features/terms/TermsList';
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
      },
      {
        path: PAGES.DASHBOARD.url,
        element: <DashboardPage />,
      },
      {
        element: <PrefetchDataLayout />,
        children: [
          {
            path: PAGES.VOCABULARY.url,
            element: <VocabularyPage />,
            children: [
              {
                index: true,
                element: <TermsList />,
              },
              {
                path: PAGES.VOCABULARY.TERM.get,
                element: <TermItem />,
              },
              {
                path: `${PAGES.VOCABULARY.TERM.get}/${PAGES.VOCABULARY.TERM.edit}`,
                element: <EditTerm />,
              },
            ],
          },
        ],
      },
      {
        path: PAGES.PRACTICE.url,
        element: <PracticePage />,
      },
    ],
  },
]);
