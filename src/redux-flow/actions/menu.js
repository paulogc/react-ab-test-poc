import {
  HEADER_LOAD,
  HEADER_LOAD_SUCCESS,
  HEADER_LOAD_ERROR,
} from '../constants/menu';

export const headerLoad = userId => ({
  type: HEADER_LOAD,
  userId,
});

export const headerLoadSuccess = payload => ({
  type: HEADER_LOAD_SUCCESS,
  payload,
});

export const headerLoadError = error => ({
  type: HEADER_LOAD_ERROR,
  error,
});
