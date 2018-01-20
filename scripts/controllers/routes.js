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
    app.Coin.fetchAll().then(coins => {
       console.log(coins)
        app.coinsListView.init(coins);
    })
})

page('/coin/:id',(ctx) => {
    console.log(ctx.params.id)
    app.Coin.fetchOne(ctx.params.id).then(coin => {
        console.log('this is from route', coin);
        app.coinDetailView.init(coin);
    })
})
page.start()