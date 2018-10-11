import { combineReducers } from 'redux';
import list from './list';
import rename from './rename';

const rootReducer = combineReducers({
  list,
  rename
});

export default rootReducer;