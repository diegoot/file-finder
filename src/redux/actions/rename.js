import {
  RENAME_FILE_REQUEST,
  RENAME_FILE_SUCCESS,
  RENAME_FILE_ERROR,
  RESET_RENAME
} from './types';

export const renameFile = (id, newName) =>
  dispatch => {
    dispatch({
      type: RENAME_FILE_REQUEST
    });

    fetch(
      `http://tim.uardev.com/trial-project/api/file/${id}/rename?filename=${newName}`,
      { method: 'POST' }
    )
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: RENAME_FILE_SUCCESS
        })
      })
      .catch(() => {
        dispatch({
          type: RENAME_FILE_ERROR
        })
      });
  };

export const resetRename = () => ({
  type: RESET_RENAME
});