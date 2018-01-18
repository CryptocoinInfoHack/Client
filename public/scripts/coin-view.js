$.getJSON('http://coincap.io/front', data => {
  data.forEach(coin => {
      console.log(coin.long);
      $('#coin-name').append(`<li>${coin.long}</li>`);
  })
});