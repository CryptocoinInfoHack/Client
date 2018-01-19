var app = app || {}

(module => {
    const coinDetailView = {}

    const $view = $('coin-template')
    coinDetailView.init = () => {
        $('.page').hide()
        
        $view.show()
    }

    module.coinDetailView = coinDetailView
    
})(app)