import initialState from './initialState';
import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
  GET_PAGE_REQUEST,
  GET_PAGE_SUCCESS,
  GET_PAGE_ERROR,
  SET_SELECTED_FILE
} from 'redux/actions/types';

const list = (state = initialState.list, action) => {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return Object.assign(
        {},
        state,
        {
          isReadingTags: true,
          isError: false
        }
      );
    case GET_TAGS_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          tags: action.tags,
          isReadingTags: false
        }
      );
    case GET_TAGS_ERROR:
      return Object.assign(
        {},
        state,
        {
          isReadingTags: false,
          isError: true
        }
      );
    case GET_PAGE_REQUEST:
      return Object.assign(
        {},
        state,
        {
          isReadingFiles: true,
          totalPages: null,
          isError: false
        }
      );
    case GET_PAGE_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          files: action.items,
          totalFiles: action.totalFiles,
          isReadingFiles: false,
          tagName: action.tagName,
          currentPage: action.page
        }
      );
    case GET_PAGE_ERROR:
      return Object.assign(
        {},
        state,
        {
          isReadingFiles: false,
          isError: true
        }
      );
    case SET_SELECTED_FILE:
      return Object.assign(
        {},
        state,
        {
          file: { id: action.id, name: action.name }
        }
      );
    default:
      return state;
  }
}

export default list;