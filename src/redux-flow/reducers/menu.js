import {
  LOAD_MENU,
  LOAD_MENU_SUCCESS,
  LOAD_MENU_ERROR,
} from '../constants/menu';

const INITIAL_STATE = {
  menu: {},
};

export default function menuReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_MENU:
      return { ...state, loading: true };
    case LOAD_MENU_SUCCESS:
      return { ...state, loading: false, menu: action.payload };
    case LOAD_MENU_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
