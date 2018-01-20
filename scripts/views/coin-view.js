var app = app || {};

(module => {
 const coinsListView = {}

 coinsListView.init = (coins) => {

  let source = $('#coin-template').html()

  let template = Handlebars.compile(source)


  coins.forEach(coin => {
    //   console.log(coin.long);
      $('#coin-name').append(template(coin));
  })
   $('#coin-list').show();   
   $('#coin-list').on('click','tr', event => {
    $('.page').hide()
       let coinId = $(event.target).data('id')
       console.log('This is the yoooooooo',event.target)
       page(`/coin/${coinId.toUpperCase()}`)
       $('#coin-detail-page').show(); 
   })  

}

 module.coinsListView = coinsListView;
})(app)