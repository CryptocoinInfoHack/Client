var app = app || {};

(module => {
    const __COINCAPAPI__ = 'https://coincap.io/';

    function Coin() {};

    Coin.getCurrentTimeFromStamp = (timestamp) => {
        let date = new Date(timestamp);
        timeStampCon = date.getHours() + ':' + date.getMinutes();
    
        return timeStampCon;
    }

    Coin.fetchAll = () => $.getJSON(__COINCAPAPI__ + 'front');
    Coin.fetchOne = (id) => $.getJSON(__COINCAPAPI__ + 'page/' + id);
    Coin.fetchHistory = (id) => $.getJSON(__COINCAPAPI__ + 'history/1day/' + id);
    module.Coin = Coin;
})(app)
