var app = app || {}

(module => {
    const __COINCAPAPI__ = 'http://coincap.io/';

    //FIX THE FUNCTION THAT FEEDS THE DATA........
    const Coin = {}

    Coin.fetchAll = () => $.getJSON(__COINCAPAPI__).catch(error => console.error(error));

    module.Coin = Coin;
})(app)