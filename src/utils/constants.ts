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
  USERS: {
    BASE: '/users',
    ID: ':id',
  },
  TERMS: {
    BASE: '/terms',
    ID: ':id',
  },
};
