export const PAGES = {
  HOME: {
    name: 'Home',
    url: '/',
  },
  DASHBOARD: {
    name: 'Dashboard',
    url: 'dashboard',
  },
  VOCABULARY: {
    name: 'Vocabulary',
    url: 'vocabulary',
    TERM: {
      get: ':id',
      create: 'create',
      edit: 'edit',
      delete: 'delete',
    },
  },
  PRACTICE: {
    name: 'Practice',
    url: 'practice',
  },
  ERROR: {
    name: 'Error Page',
    url: 'error',
  },
};
