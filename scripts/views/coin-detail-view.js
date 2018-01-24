var app = app || {};

(module => {
    const coinDetailView = {}

    coinDetailView.init = (coin) => {
        console.log('hi coin', coin)
        let source = $('#coin-detail-template').html()
      
        let template = Handlebars.compile(source)
      
        $('#coin-detail-page').append(template(coin));
        
        $('#coin-detail-page').show();    
        
        new Chart(document.getElementById("coin-detail-page-chart"), {
            type: 'line',
            data: {
              labels: [ 1, 2, 3, 4, 5, 6, 7],
              datasets: [{ 
                  data: [{x:2,y:100},{x:2,y:210},{x:3,y:250},{x:3,y:299},{x:4,y:345},{x:5,y:346},{x:6,y:400}],
                  label: "somenumbers",
                  borderColor: "#3e95cd",
                  fill: false
                }
              ]
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