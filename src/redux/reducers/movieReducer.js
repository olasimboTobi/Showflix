import { ActionTypes } from "../constants/action-types";
import { selectMovie } from '.';

const initialState = {
    movies: []
}

export const movieReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return {...state, movies:payload};
        default:
            return state;
    }

}

export const selectedMovieReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return {...state, ...payload};
        default:
            return state;
    }

}