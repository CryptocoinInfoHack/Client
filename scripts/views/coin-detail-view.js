var app = app || {};

(module => {
    const coinDetailView = {}

    coinDetailView.init = (coin) => {
        console.log('hi coin', coin)
        let source = $('#coin-detail-template').html()
      
        let template = Handlebars.compile(source)
      
        $('#coin-detail-page').append(template(coin));
        
        $('#coin-detail-page').show();    
    }

    module.coinDetailView = coinDetailView;
    
})(app)