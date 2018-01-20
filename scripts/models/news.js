var app = app || {};

(module => {
    const __NEWS_API__ = 'https://newsapi.org/v2/everything';
    const TOKEN = 'cac351c8867140f7872d3ddfda09f782';

    function News () {

    } 

    News.fetchAll = () => $.getJSON(__NEWS_API__ + '?sources=crypto-coins-news&apikey=' + TOKEN);
    News.fetchOne = (id) => $.getJSON(__COINCAPAPI__ + 'page/' + id);

    module.News = News;
})(app)