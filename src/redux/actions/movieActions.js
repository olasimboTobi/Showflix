import {ActionTypes} from "../../redux/constants/action-types"

export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies,
    }
}

export const selectMovie = (movie) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie,
    }
}