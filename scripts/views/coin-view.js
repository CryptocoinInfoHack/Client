var app = app || {};

(module => {
 const coinsListView = {}

 coinsListView.init = (coins) => {

  let source = $('#coin-template').html()

  let template = Handlebars.compile(source)

  coins.forEach(coin => {
      $('#coin-name tbody').append(template(coin));
  })
  $('#coin-list').on('click', 'tr', event => {
      let coinId = $(event.target).data('id');
      $('#coin-list').hide();
      page(`/coin/${coinId.toUpperCase()}`);
  })

  let socket = io.connect('https://coincap.io'); 
    socket.on('trades', tradeMsg => {
        let coin = tradeMsg.coin;
        $(`#coin-list tr[data-id="${coin}"] td[data-id="mktcap"]`).html("$" + tradeMsg.message.msg.mktcap);
        $(`#coin-list tr[data-id="${coin}"] td[data-id="supply"]`).html(tradeMsg.message.msg.supply);
        $(`#coin-list tr[data-id="${coin}"] td[data-id="price"]`).html("$" + tradeMsg.message.msg.price);
        $(`#coin-list tr[data-id="${coin}"] td[data-id="vwapData"]`).html("$" + tradeMsg.message.msg.vwapData);
        $(`#coin-list tr[data-id="${coin}"] td[data-id="cap24hrChange"]`).html("%" + tradeMsg.message.msg.cap24hrChange);
  });

  $('#coin-list').show();
 }
 $('#filter').on('change',function(event){
     let select = $('#filter').find(":selected").attr('value');
    // let selectedId = $(event.target).attr();
    console.log('inside filter', `#${select}`);
    $('#coin-name td:nth-child(n+2), #coin-name th:nth-child(n+2)').addClass('filter');
    $('.filter').show();
    $(`td[data-id="${select}"], th[data-id="${select}"]`).toggleClass('filter');
    $('.filter').hide();
 })

 module.coinsListView = coinsListView;
})(app)