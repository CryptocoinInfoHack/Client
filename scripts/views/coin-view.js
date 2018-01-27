var app = app || {};

(module => {
 const coinsListView = {}

 coinsListView.init = (coins) => {

  let source = $('#coin-template').html()

  let template = Handlebars.compile(source)

  coins.forEach(coin => {
      $('#coin-name tbody').append(template(coin));
  })
  $('#coin-list').off().on('click', 'tr', event => {
      let coinId = $(event.target).data('id');
      $('#coin-list').hide();
      page(`/coin/${coinId.toUpperCase()}`);

  })

  let socket = io.connect('https://coincap.io'); 

  let currCap = 0;
  let currvwapData = 0;
  let currPrice = 0;
  socket.on('trades', tradeMsg => {
    let coin = tradeMsg.coin;

    if(tradeMsg.message.msg.mktcap > currCap) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="mktcap"]`).removeClass('red').addClass('green');
    } else if(tradeMsg.message.msg.mktcap < currCap) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="mktcap"]`).addClass('red').removeClass('green');
    }

    $(`#coin-list tr[data-id="${coin}"] td[data-id="mktcap"]`).html("$" + tradeMsg.message.msg.mktcap);
    currCap = tradeMsg.message.msg.mktcap; 

    $(`#coin-list tr[data-id="${coin}"] td[data-id="supply"]`).html(tradeMsg.message.msg.supply);

    if(tradeMsg.message.msg.price > currPrice) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="price"]`).removeClass('red').addClass('green');
    } else if(tradeMsg.message.msg.price < currPrice) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="price"]`).addClass('red').removeClass('green');
    }

    $(`#coin-list tr[data-id="${coin}"] td[data-id="price"]`).html("$" + tradeMsg.message.msg.price);
    currPrice = tradeMsg.message.msg.price; 

    if(tradeMsg.message.msg.vwapData > currvwapData) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="vwapData"]`).removeClass('red').addClass('green');
    } else if(tradeMsg.message.msg.vwapData < currvwapData) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="vwapData"]`).addClass('red').removeClass('green');
    }

    $(`#coin-list tr[data-id="${coin}"] td[data-id="vwapData"]`).html("$" + tradeMsg.message.msg.vwapData);
    currvwapData = tradeMsg.message.msg.vwapData;
    
    if(Math.sign(tradeMsg.message.msg.cap24hrChange) === -1) {
        $(`#coin-list tr[data-id="${coin}"] td[data-id="cap24hrChange"]`).removeClass('green').addClass('red'); 
    } else if(Math.sign(tradeMsg.message.msg.cap24hrChange) === 1) {
        $(`#coin-list tr[data-id="${coin}"]`).removeClass('red').addClass('green'); 
    }
    $(`#coin-list tr[data-id="${coin}"] td[data-id="cap24hrChange"]`).html(tradeMsg.message.msg.cap24hrChange + "%");
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

 $(document).on("scroll", function () {
	if ($(document).scrollTop() > 5) {
		$("header").addClass("small");
    $(".nav").addClass("small2");
    // $("header").removeClass("section")
	} else {
		$("header").removeClass("small");
     $(".nav").removeClass("small2");
    // $("header").addClass("section");
	}
});
})(app)
