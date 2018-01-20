if (!localStorage.getItem('beenHere')){
    console.log(localStorage.getItem('beenHere'))
    $('#intro').dialog();
 }else{
     $('#intro').hide();
 }
    
      
 $('#intro').on('click','button',function(e){
     e.preventDefault();
     let answer = $(event.target).attr('id')
    
     if(answer === 'yes'){localStorage.setItem('beenHere',true)
    $('.ui-dialog').hide();
    } else if(answer === 'no') {
      alert('Welcome you bad ombre!')
      $('#intro').hide()
      $('#howThisWorks').show()
    }
 })
 
 $('.page').hide()