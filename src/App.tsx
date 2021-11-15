import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { SmartArticleList } from './components/ArticleList';
import { SmartArticlePage } from './page/ArticlePage';

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={ SmartArticleList }/>
      <Route path="/article" component={ SmartArticlePage }/>
    </HashRouter>
  );
}

export default App;