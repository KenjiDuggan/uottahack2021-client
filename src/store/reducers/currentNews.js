/**
* News Reducer
*/
import initialState from '../initialState';

const currentNews = (state = initialState, action) => {
    switch(action.type){
        case "NEWS_LOADING":
            return {
                ...state,
                loading: action.isLoading
            }
        case "LOAD_NEWS_SUCCESS":
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        default:
            return state
    }
}

export default currentNews;
 