var app = app || {};

(module => {
 const aboutUsView = {};

 aboutUsView.init = () => {
    $('.page').hide();
    $('.stats').hide();
  $('#about-us-page').show();
 }
 
 module.aboutUsView = aboutUsView;
})(app)