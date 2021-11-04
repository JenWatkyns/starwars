import films from '../../api/films';
import {
    GET_FILMS_START,
    GET_FILMS_SUCCESS,
    GET_FILMS_FAILURE,
} from './consts';
import filmsModel from '../../model/films';

const getFilmsAction = () => (dispatch) => {
    dispatch({
        type: GET_FILMS_START,
    });
    return films()
        .then((response) => {
            dispatch({
                type: GET_FILMS_SUCCESS,
                payload: filmsModel(response),
            });
        })
        .catch(() => {
            dispatch({
                type: GET_FILMS_FAILURE,
            });
        })
};

export default getFilmsAction;
