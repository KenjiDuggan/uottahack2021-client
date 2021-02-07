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
    return {
        type: types.LOAD_NEWS_SUCCESS,
        payload: posts
    }
}

const selectNews = (post) => {
    return {
        type: types.CURRENT_NEWS,
        payload: post
    }
}


export default {
    newsLoading,
    loadNewsSuccess,
    selectNews
}