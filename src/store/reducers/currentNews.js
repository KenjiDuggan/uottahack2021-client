/**
* News Reducer
*/
import initialState from '../initialState';

const currentNews = (state = initialState, action) => {
 
    switch(action.type){
        case "NEWS_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "LOAD_NEWS_SUCCESS":
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case "CURRENT_NEWS":
            return {
                ...state,
                post: action.payload,
            }
        default:
            return state
    }
}

export default currentNews;
 