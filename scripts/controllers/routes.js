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
    app.Coin.fetchAll().then(coins => {
     
        app.coinsListView.init(coins);
    })
})

page('/coin/:id',(ctx) => {
    $('coin-detail-page').remove()
    console.log(ctx.params.id)
    app.Coin.fetchOne(ctx.params.id).then(coin => {
        console.log('this is from inside single coin', coin);
        app.Coin.fetchHistory(ctx.params.id).then(graphData =>{
            console.log('graph data!!',graphData);
        })
        app.coinDetailView.init(coin);
    })
})

page('/news', () => {
    $('#news-list').empty();
    app.News.fetchAll().then(news => {
       console.log(news)
        app.newsView.init(news);
    })
})
page.start()