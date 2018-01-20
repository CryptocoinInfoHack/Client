var app = app || {};

(module => {
const filterListView = {}

filterListView.init = (coins) => {
    $('#filter').on(click,event => {
        $('.filter').show();
    })
}

})(app)