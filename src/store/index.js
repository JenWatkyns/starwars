import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getFilmsReducer from './get-films/get-films.reducer';
import getCharacterInfoReducer from './get-character-info/get-character-info.reducer';

const store = createStore(combineReducers({
    films: getFilmsReducer,
    filmInfo: getCharacterInfoReducer,
}), compose(applyMiddleware(thunk)));

export default store;
