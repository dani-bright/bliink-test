import { IArticle } from '../interface/IArticle';

export const SetArticle = 'article/set-article';

export const setArticle = (article : IArticle) => {
    return {
        type : SetArticle,
        payload : { article }
    };
};