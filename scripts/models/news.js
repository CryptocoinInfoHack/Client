// var app = app || {};


(module => {
    const __NEWS_API__ = 'https://fierce-bayou-90322.herokuapp.com/news';
    const TOKEN = '';
  
    function News() {
    }

    News.fetchAll = () => $.getJSON(__NEWS_API__);

    module.News = News;
})(app)

