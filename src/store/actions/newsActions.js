/**
* News Actions
*/
import * as types from './types';

const newsLoading = (isLoading = true) => {
    return {
        type: types.NEWS_LOADING,
        payload: isLoading
    }
}

const loadNewsSuccess = (posts) => {
    console.log(posts)
    return {
        type: types.LOAD_NEWS_SUCCESS,
        payload: posts
    }
}

export default {
    newsLoading,
    loadNewsSuccess
}