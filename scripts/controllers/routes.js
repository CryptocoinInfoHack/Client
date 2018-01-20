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
    app.Coin.fetchAll().then(result => {
        app.coinsListView.init(result);
    })
})

page('/coin/:id', (ctx) => {
    app.Coin.fetchOne(ctx.params.id).then(result => {
        console.log(ctx);
        app.coinDetailView.init(result);
    })
})

page('/news', () => {
    app.News.fetchAll().then(result => {
        app.newsView.init(result);
    })
})

page.start();