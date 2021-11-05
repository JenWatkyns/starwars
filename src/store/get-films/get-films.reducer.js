import {
  GET_FILMS_START,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE,
} from './consts';

const getFilmsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FILMS_START:
      return {
        ...state,
        meta: { status: 'submitting' },
      };
    case GET_FILMS_SUCCESS:
      return {
        model: action.payload,
        meta: { status: 'success' },
      };
    case GET_FILMS_FAILURE:
      return {
        ...state,
        meta: { status: 'failure' },
      };
    default:
      return state;
  }
};

export default getFilmsReducer;
