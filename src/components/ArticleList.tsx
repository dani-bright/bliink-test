import { FC } from 'react';
import { connect } from 'react-redux';
import './Article.css';
import { IArticle } from '../interface/IArticle';
import { SmartArticle } from './Article';
import { SmartFilter } from './Filter';

export interface IArticleListProps {
    articles : IArticle[];
}

export const ArticleList : FC<IArticleListProps> = ({articles}) => {

    return(
        <section>
            <SmartFilter/>
            <section className="articles">
                {
                    articles.map((article, index) => <SmartArticle key={index} article={article} />)
                }
            </section>
        </section>

    );

};

interface IStoreState {
    articles : IArticle[];
}

const mapStateToProps = (state : IStoreState) => ({
    articles : state.articles,
});

export const SmartArticleList = connect(mapStateToProps)(ArticleList);