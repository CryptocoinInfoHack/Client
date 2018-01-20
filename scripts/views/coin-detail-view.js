var app = app || {};

(module => {
    const coinDetailView = {}

    const $view = $('#coin-template')
    coinDetailView.init = (coin) => {
        $('.page').hide()
        console.log(coin);
        $view.show();
    }

    module.coinDetailView = coinDetailView;
    
})(app)