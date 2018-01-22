var app = app || {};

(module => {
    const __COINCAPAPI__ = 'http://coincap.io/';
  
    //FIX THE FUNCTION THAT FEEDS THE DATA........
    function Coin() {};

    Coin.fetchAll = () => $.getJSON(__COINCAPAPI__ + 'front');
    Coin.fetchOne = (id) => $.getJSON(__COINCAPAPI__ + 'page/' + id);
    Coin.fetchHistory = (id) => $.getJSON(__COINCAPAPI__ + 'history/1day/' + id);
    module.Coin = Coin;
})(app)