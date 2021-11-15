import axios from 'axios';
import { FC, useState, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './Article.css';
import { setArticles } from '../action-creator/setArticles';
import { IArticle } from '../interface/IArticle';

export interface IFilterProps {
    setArticles : (articles : IArticle[]) => void;
}

export const Filter : FC<IFilterProps> = ({setArticles}) => {
    const [category, setCategory] = useState('');
    const apiKey = '41853c68e1e74f5a8dff83a82d1ec37d';

    const changeCategory = async(e: MouseEvent<HTMLDivElement>) => {
        const value = (e.target as HTMLElement).innerHTML;
        setCategory(value);
        const articles = await axios.get(`https://newsapi.org/v2/top-headlines?country=fr&category=${category}&apiKey=${apiKey}`);
        setArticles(articles.data.articles);
    };

    return(
        <div className="filters">
            <div onClick={changeCategory} className="filter">Business</div>
            <div onClick={changeCategory} className="filter">Entertainment</div>
            <div onClick={changeCategory} className="filter">Health</div>
            <div onClick={changeCategory} className="filter">Science</div>
            <div onClick={changeCategory} className="filter">Sports</div>
            <div onClick={changeCategory} className="filter">Technology</div>
        </div>
    );

};

interface IStoreState {
    articles : IArticle[];
}

const mapStateToProps = (state : IStoreState) => ({
    articles : state.articles,
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    setArticles : (articles : IArticle[]) => dispatch(setArticles(articles)),
  });

export const SmartFilter = connect(mapStateToProps, mapDispatchToProps)(Filter);