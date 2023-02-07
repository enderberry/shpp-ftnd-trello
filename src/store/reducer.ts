import { combineReducers } from 'redux';

import commonReducer from './modules/common/reducer';
import boardReducer from './modules/board/reducer';
import boardsReducer from './modules/boards/reducer';
import userReducer from './modules/user/reducer';

export default combineReducers({
  common: commonReducer,
  board: boardReducer,
  boards: boardsReducer,
  user: userReducer
});
