import { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setArticle } from '../action-creator/setArticle';
import { IArticle } from '../interface/IArticle';
import { useHistory } from 'react-router-dom';


export interface IArticleProps {
    article: IArticle;
    setArticle : (article : IArticle) => void;
}

export const Article : FC<IArticleProps> = ({article, setArticle}) => {
    const history = useHistory();
    const seeArticleDetails = () => {
        // would have done this differently if i had acces to ids
        setArticle(article);
        history.push('/article');
    };
    return(
        <div className="article" onClick={seeArticleDetails}>
            {article.urlToImage ? <img alt={article.title} src={article.urlToImage}/> : <div className="fakeImg">No picture</div>}
            <p>Publié le {new Date(article.publishedAt).toLocaleDateString()}</p>
            <p>{article.title}</p>
        </div>
    );
};


const mapDispatchToProps = (dispatch : Dispatch) => ({
    setArticle : (article : IArticle) => dispatch(setArticle(article)),
  });

export const SmartArticle = connect(undefined, mapDispatchToProps)(Article);