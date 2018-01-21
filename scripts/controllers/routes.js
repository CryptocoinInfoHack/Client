if(window.location.pathname !== '/') {
    page.base('/Client')
    console.log('We got you-2')
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

page('Client/', () => {
 $('#coin-name tr:nth-child(n+2)').remove()
 console.log('Take me Home')
    app.Coin.fetchAll().then(coins => {
       console.log(coins)
        app.coinsListView.init(coins);
    }).catch(error => console.error(error))
})

page('Client/coin/:id',(ctx) => {
    $('coin-detail-page tr:nth-child(n+2)').remove()
    console.log(ctx.params.id)
    app.Coin.fetchOne(ctx.params.id).then(coin => {
        console.log('this is from route', coin);
        app.coinDetailView.init(coin);
    })
})

page('Client/news', () => {
    $('#news-list').empty();
    app.News.fetchAll().then(news => {
       console.log(news)
        app.newsView.init(news);
    })
})
page.start()