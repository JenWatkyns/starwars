import {
    GET_CHARACTERS_START,
    GET_CHARACTERS_SUCCESS,
    GET_CHARACTERS_FAILURE,
} from './consts';

const getCharacterInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CHARACTERS_START:
            return {
                meta:{status:"submitting"}
            }
        case GET_CHARACTERS_SUCCESS:
            return {
                model: action.payload,
                meta:{status:"success"}
            }
        case GET_CHARACTERS_FAILURE:
            return {
                meta:{status:"failure"}
            }
        default:
            return state;
    }
}

export default getCharacterInfoReducer;
