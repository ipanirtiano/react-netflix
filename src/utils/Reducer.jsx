import { actions } from "./Constans";

export const initialState = {
    getMovieBanner: false,
    getMovieUpcoming: false,
    getMovieNowPlaying: false,
    getMovieTopRated: false,
    getMoviePopular: false,
    getDetailMovie: false,
    getMovieTrailer: false,
    getMovieGenre: false
}

const reducer = (state, action) => {
    switch(action.type){
        case actions.GET_MOVIE_BANNER:
            return {
                ...state,
                getMovieBanner: action.dataMovies
            }
        case actions.GET_MOVIE_UPCOMING:
            return {
                ...state,
                getMovieUpcoming: action.dataMovies
            }
        case actions.GET_MOVIE_NOW_SHOWING:
            return {
                ...state,
                getMovieNowPlaying: action.dataMovies
            }
        case actions.GET_MOVIE_TOP_RATED:
            return {
                ...state,
                getMovieTopRated: action.dataMovies
            }
        case actions.GET_MOVIE_POPULAR:
            return {
                ...state,
                getMoviePopular: action.dataMovies
            }
        case actions.GET_MOVIE_DETAIL:
            return {
                ...state,
                getDetailMovie: action.data
            }
        case actions.GET_MOVIE_TRAILER:
            return {
                ...state,
                getMovieTrailer: action.trailer
            }
        case actions.GET_MOVIE_GENRES:
            return {
                ...state,
                getMovieGenre: action.genre
            }
        default:
            return state
    }
}

export default reducer
