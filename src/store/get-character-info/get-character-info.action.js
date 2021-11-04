import {
    GET_CHARACTERS_START,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAILURE,
} from './consts';
import characterInfo from '../../api/character';
import characterInfoModel from '../../model/character-info';

const getCharacterInfoAction = (characters) => (dispatch) => {
    dispatch({
        type: GET_CHARACTERS_START,
    });

    const characterArr = [];
    Promise.all(characters.map(character => characterInfo(character)))
        .then(response => response
        .forEach(character => characterArr.push(characterInfoModel(character))))
        .then(() => {
            dispatch({
                type: GET_CHARACTERS_SUCCESS,
                payload: characterArr,
            });
        }).catch(() => {
            dispatch({
                type: GET_CHARACTERS_FAILURE,
            });
    });
};

export default getCharacterInfoAction;
