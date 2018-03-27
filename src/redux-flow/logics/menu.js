import { createLogic } from 'redux-logic';
import { loadMenuSuccess, loadMenuError } from '../actions/menu';
import { LOAD_MENU } from '../constants/menu';
import { API_URL } from '../../utils/api';

const loadMenu = createLogic({
  type: LOAD_MENU,
  latest: true,

  async process({ requestUtil }, dispatch, done) {
    try {
      const response = await requestUtil(`${API_URL}/user/menu`,
        {
          method: 'GET',
        });

      dispatch(loadMenuSuccess(response.menu));
    } catch (error) {
      dispatch(loadMenuError(error));
    }
    done();
  },
});

export default loadMenu;
