import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
  GET_PAGE_REQUEST,
  GET_PAGE_SUCCESS,
  GET_PAGE_ERROR,
  SET_SELECTED_FILE
} from './types';

export const getTags = () =>
  dispatch => {
    dispatch({
      type: GET_TAGS_REQUEST
    });

    fetch('http://tim.uardev.com/trial-project/api/tags')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_TAGS_SUCCESS,
          tags: json
        })
      })
      .catch(() => {
        dispatch({
          type: GET_TAGS_ERROR
        })
      });
  };

export const getPage = (tagName = null, page = 1) =>
  dispatch => {
    dispatch({
      type: GET_PAGE_REQUEST
    });

    const url = (tagName)
      ? `http://tim.uardev.com/trial-project/api/files?page=${page}&tag=${tagName}`
      : `http://tim.uardev.com/trial-project/api/files?page=${page}`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_PAGE_SUCCESS,
          tagName,
          items: json.files,
          page,
          totalFiles: json.total_files
        })
      })
      .catch(() => {
        dispatch({
          type: GET_PAGE_ERROR
        })
      });
  };

export const setSelectedFile = (id, name) => ({
  type: SET_SELECTED_FILE,
  id,
  name
});