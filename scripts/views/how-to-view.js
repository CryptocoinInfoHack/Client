if (!localStorage.getItem('beenHere')){
    console.log(localStorage.getItem('beenHere'))
    console.log('been here is not here');
    $('#intro').dialog({
        minWidth: 400
    });
 }else{
     $('#intro').hide();
     console.log('been here is here')
 }

 $(".ui-dialog-titlebar").hide()
    
      
 $('#intro').on('click','button',function(e){
     e.preventDefault();
     let answer = $(event.target).attr('id')
    
     if(answer === 'yes'){localStorage.setItem('beenHere',true)
    $('.ui-dialog').hide();
    } else if(answer === 'no') {
      localStorage.setItem('beenHere',true)
      alert('Welcome you bad ombre!')
      $('.page').hide()
      $('#intro').hide()
      $('#howThisWorks').show()
      $('#howto-page').show()
    }

        // Target your .container, .wrapper, .post, etc.
    $("#howto-page").fitVids();
 })
 
 $('.page').hide()