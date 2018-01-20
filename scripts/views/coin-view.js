var app = app || {};

(module => {
 const coinsListView = {}

 coinsListView.init = (coins) => {

  let source = $('#coin-template').html()

  let template = Handlebars.compile(source)


  coins.forEach(coin => {
      $('#coin-name').append(template(coin));
  })

  $('#coin-list').on('click', 'tr', event => {
      let coinId = $(event.target).data('id');
      $('#coin-list').hide();
      page(`/coin/${coinId.toUpperCase}`);
  })

  $('#coin-list').show();
 }

 module.coinsListView = coinsListView;
})(app)