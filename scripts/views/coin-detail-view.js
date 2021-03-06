var app = app || {};

(module => {
  const coinDetailView = {}

  coinDetailView.init = (coin) => {
    let source = $('#coin-detail-template').html()

    let template = Handlebars.compile(source)

    $('#coin-detail-page').empty().append(template(coin));

    $('#coin-detail-page').show();

  }
  coinDetailView.history = (history) => {

    let labels = history.market_cap.map(arr => {
      return app.Coin.getCurrentTimeFromStamp(arr[0]);
    })
    history.market_cap.unshift(['x', 'y']);
    console.log('unshift try: ', history.market_cap);
    let keys = history.market_cap.shift();

    var objects = history.market_cap.map(function (values) {
      values = [app.Coin.getCurrentTimeFromStamp(values[0]), values[1]];
      return keys.reduce(function (o, k, i) {
        o[k] = values[i];
        return o;
      }, {});
    });

    new Chart(document.getElementById("coin-detail-page-chart"), {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          data: objects,
          label: "somenumbers",
          borderColor: "#3e95cd",
          fill: false
        }]
      },
      options: {
        title: {
          display: true,
          text: 'some data per month'
        }
      }
    });
  }

  module.coinDetailView = coinDetailView;

})(app)