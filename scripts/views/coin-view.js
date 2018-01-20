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
 $('#filter').on('change',function(event){
     let select = $('#filter').find(":selected").attr('value');
    // let selectedId = $(event.target).attr();
    console.log('inside filter', `#${select}`);
    $(`#${select}`).toggleClass('filter');
    $('.filter').hide();


 })

 module.coinsListView = coinsListView;
})(app)