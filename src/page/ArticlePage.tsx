import { FC, useEffect } from 'react';
import './Page.css';
import { connect } from 'react-redux';
import { IArticle } from '../interface/IArticle';
import { useHistory } from 'react-router';


export interface IArticlePageProps {
    article: IArticle;
}

export const ArticlePage : FC<IArticlePageProps> = ({article}) => {
    const history = useHistory();
    useEffect(() => {
        !article && history.push('/');
    }, []);
    return(
        <div className="page">
            {article ? (
            <>
                <img src={article.urlToImage}/>
                <p>Publié le {new Date(article.publishedAt).toLocaleDateString()}</p>
                <p className="title">{article.title}</p>
                <p>{article.description}</p>
                <p className="content">{article.content}</p>
            </>
            ) : null
        }
        </div>
    );

};

interface IStoreState {
    article : IArticle;
}

const mapStateToProps = (state : IStoreState) => ({
    article : state.article,
});

export const SmartArticlePage = connect(mapStateToProps)(ArticlePage);

