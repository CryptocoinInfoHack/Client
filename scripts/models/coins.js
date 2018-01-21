var app = app || {};

(module => {
    const __COINCAPAPI__ = 'http://coincap.io/';

    function Coin() {};

    Coin.fetchAll = () => $.getJSON(__COINCAPAPI__ + 'front');
    Coin.fetchOne = (id) => $.getJSON(__COINCAPAPI__ + 'page/' + id);
    module.Coin = Coin;
})(app)