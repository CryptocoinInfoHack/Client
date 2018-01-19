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

page('/front', () => {
    app.Coin.fetchAll().then(coins => {
        app.coinsListView.init(coins);
    })
})