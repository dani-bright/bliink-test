import { SetArticles } from '../action-creator/setArticles';
import { IArticle } from '../interface/IArticle';

const initialState : [] = [];

export const articles = (state = initialState, action : {type: string, payload: {articles: IArticle[]}}) => {
    switch (action.type) {
        case SetArticles:
            return action.payload.articles;

        default:
            return state;
    }
};

