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

    $('#coin-detail-page').remove()
    console.log(ctx.params.id)
    app.Coin.fetchOne(ctx.params.id).then(coin => {
        console.log('this is from inside single coin', coin);
        
        app.coinDetailView.init(coin, history);
    })
    app.Coin.fetchHistory(ctx.params.id).then(graphData =>{
        console.log('graph data from route!!',graphData);
        app.coinDetailView.history(graphData);
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
