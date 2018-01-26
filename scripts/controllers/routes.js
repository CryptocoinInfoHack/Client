if(window.location.pathname !== '/') {
    page.base('/Client')
    console.log('We got you-5')
}
page('/*', (ctx,next) => {
    console.log('I made it')
    if(localStorage.getItem('token')){
        $('.protected').show()
    } else{
        $('.protected').hide()
    }
    $('.page').hide()
    next()
})
page('/', () => {
 $('#coin-name tr:nth-child(n+2)').remove()
 console.log('Take me Home')
    app.Coin.fetchAll().then(coins => {
     
        app.coinsListView.init(coins);
    }).catch(error => console.error(error))
})
page('/coin/:id',(ctx) => {

   
    console.log(ctx.params.id)
    app.Coin.fetchOne(ctx.params.id).then(coin => {
        console.log('this is from inside single coin', coin);
        
        app.coinDetailView.init(coin, history);
    })
    app.Coin.fetchHistory(ctx.params.id).then(graphData =>{
        console.log('graph data from route!!',graphData);
        app.coinDetailView.history(graphData);
    })
    let socket = io.connect('http://socket.coincap.io');
    socket.on('trades', function (tradeMsg) {
        if(tradeMsg.message.coin == ctx.params.id){
            console.log('individual coin update',tradeMsg.message.msg.price)
            let coin = tradeMsg.message.coin;
            console.log('checking id',coin)
            
            $(`#coin-detail-page div[data-id="price"]`).html("$" + tradeMsg.message.msg.price);
            console.log('price',tradeMsg.message.msg.price)
            $(`#coin-detail-page div[data-id="rank"]`).html("$" + tradeMsg.message.msg.rank);
            console.log('price',tradeMsg.message.msg.price)
            $(`#coin-detail-page div[data-id="cap24hrChange"]`).html("$" + tradeMsg.message.msg.cap24hrChange);
            console.log('price',tradeMsg.message.msg.cap24hrChange)
            $(`#coin-detail-values div[data-id="mktcap"]`).html("$" + tradeMsg.message.msg.mktcap);
            console.log('price',tradeMsg.message.msg.mktcap)
            $(`#coin-detail-values div[data-id="volume"]`).html("$" + tradeMsg.message.msg.volume);
            console.log('price',tradeMsg.message.msg.volume)
            $(`#coin-detail-values div[data-id="supply"]`).html("$" + tradeMsg.message.msg.supply);
            console.log('price',tradeMsg.message.msg.supply)
         
           }
    })
})
page('/news', () => {
    $('#news-list').empty();
    app.News.fetchAll().then(news => {
       console.log(news)
        app.newsView.init(news);
    })
})


page('/About_Us', () => {
    console.log('Made it Mike')
    app.aboutUsView.init();
})

page.start()
