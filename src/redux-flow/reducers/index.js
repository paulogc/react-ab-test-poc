import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menuReducer from './menu';


const reducers = combineReducers({
  menuReducer,
  routerReducer,
});

export default reducers;
