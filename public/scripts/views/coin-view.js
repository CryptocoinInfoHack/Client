var app = app || {};

(module => {
 const coinsListView = {}

 coinsListView.init = (coins) => {

  let source = $('#coin-template').html()

  let template = Handlebars.compile(source)


  coins.forEach(coin => {
      console.log(coin.long);
      $('#coin-name').append(template(coin));
  })
 }

 module.coinsListView = coinsListView;
})(app)