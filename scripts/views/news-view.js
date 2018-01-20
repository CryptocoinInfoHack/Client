var app = app || {};

(module => {
 const newsView = {}

 newsView.init = (news) => {

  let source = $('#news-template').html()

  let template = Handlebars.compile(source)
  console.log(news.articles);
  console.log(news.articles.length);

  news.articles.forEach(newsItem => {
      console.log(newsItem.title);
      $('#news-list').append(template(newsItem));
  })

  $('#news-page').show();
 }

 module.newsView = newsView;
})(app)