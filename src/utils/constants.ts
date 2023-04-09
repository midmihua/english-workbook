export const FILE_NAMES = {
  LOGS: {
    errLog: 'errLog.log',
    reqLog: 'reqLog.log',
    mongoErrLog: 'mongoErrLog.log',
  },
};

export const MONGODB = {
  MODEL: {
    USER: 'User',
    TERM: 'Term',
  },
};

export const ROLES = {
  ADMIN: 'admin',
  GUEST: 'guest',
};

export const ROUTES = {
  ALL: '*',
  BASE: '/',
  AUTH: {
    BASE: '/',
    AUTH_URI: '/auth',
    REFRESH: '/refresh',
    LOGOUT: '/logout',
  },
  USERS: {
    BASE: '/',
    USERS_URI: '/users',
    ID: '/:id',
  },
  TERMS: {
    BASE: '/',
    TERMS_URI: '/terms',
    ID: '/:id',
  },
};
