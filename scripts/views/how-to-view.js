if (!localStorage.getItem('beenHere')){
    console.log(localStorage.getItem('beenHere'))
    console.log('been here is not here');
    $('#intro').dialog();
 }else{
     $('#intro').hide();
     console.log('been here is here')
 }
    
      
 $('#intro').on('click','button',function(e){
     e.preventDefault();
     let answer = $(event.target).attr('id')
    
     if(answer === 'yes'){localStorage.setItem('beenHere',true)
    $('.ui-dialog').hide();
    } else if(answer === 'no') {
      alert('Welcome you bad ombre!')
      $('.page').hide()
      $('#intro').hide()
      $('#howThisWorks').show()
      $('#howto-page').html(`<h1>What Is Crypto Currency</h1>
<p>To better understand crypto currency, here are a couple videos to better understand things. 
   <p><iframe width="560" height="315" src="https://www.youtube.com/embed/KP_hGPQVLpA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
      <p><iframe width="560" height="315" src="https://www.youtube.com/embed/kubGCSj5y3k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
    <h1>How to Buy Cryptocurrency</h1>
      <p>There are many diffrent formats available to buy and sell crypto currency, but here is one way. You can start by making an account on <a href="http://www.coinbase.com"> Coinbase</a>. Coinbase will allow you to buy and trade the better known cryptocurrencies like, Bitcoin, Bitcoin Cash, Ethereum, and Litecoin. You can link a credit/debit card for immediate trading or you can use a direct link to your bank account and wait four to five days. To trade some of the other cryptocurrencies like Ripple, Tron, and Cardano other sites are available like <a href="http://www.binance.com"> Binance</a>.</p>`)
      $('#howto-page').show()
    }
 })
 
 $('.page').hide()