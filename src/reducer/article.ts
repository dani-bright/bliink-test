import { SetArticle } from '../action-creator/setArticle';
import { IArticle } from '../interface/IArticle';

const initialState : IArticle | null = null;

export const article = (state = initialState, action : {type: string, payload: {article: IArticle}}) => {
    switch (action.type) {
        case SetArticle:
            return action.payload.article;

        default:
            return state;
    }
};

