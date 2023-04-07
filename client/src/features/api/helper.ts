import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

export const isErrorWithMessage = (error: unknown): error is { message: string } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
};

export const buildErrorMessage = (err: any) => {
  if (isFetchBaseQueryError(err)) {
    return 'error' in err ? err.error : JSON.stringify(err.data);
  } else if (isErrorWithMessage(err)) {
    return err.message;
  }

  return 'Unexpected error occurred';
};
