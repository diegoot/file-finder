import initialState from './initialState';
import {
  RENAME_FILE_REQUEST,
  RENAME_FILE_SUCCESS,
  RENAME_FILE_ERROR,
  RESET_RENAME
} from 'redux/actions/types';

const rename = (state = initialState.rename, action) => {
  switch (action.type) {
    case RENAME_FILE_REQUEST:
      return Object.assign(
        {},
        state,
        {
          isRenaming: true,
          isRenamed: false
        }
      );
    case RENAME_FILE_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isRenaming: false,
          isRenamed: true
        }
      );
    case RENAME_FILE_ERROR:
      return Object.assign(
        {},
        state,
        {
          isRenaming: false,
          isRenamed: false
        }
      );
    case RESET_RENAME:
      return Object.assign(
        {},
        initialState.rename
      );
    default:
      return state;
  }
}

export default rename;