import {
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
} from '../constants/menu';

export const loadMenu = userId => ({
  type: LOAD_MENU,
  userId,
});

export const loadMenuSuccess = payload => ({
  type: LOAD_MENU_SUCCESS,
  payload,
});

export const loadMenuError = error => ({
  type: LOAD_MENU_ERROR,
  error,
});
