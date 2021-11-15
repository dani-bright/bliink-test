import { IArticle } from '../interface/IArticle';

export const SetArticles = 'article/set-arciles';

export const setArticles = (articles : IArticle[]) => {
    return {
        type : SetArticles,
        payload : { articles }
    };
};