
if (!localStorage.getItem('beenHere')){
   console.log(localStorage.getItem('beenHere'))
   $('#intro').dialog();
}else{
    $('#intro').hide();
}
    
  
    
$('#intro').on('click','button',function(e){
    e.preventDefault(); 
    let answer = $(event.target).attr('id')
    
    if(answer === 'yes')localStorage.setItem('beenHere',true)
    
})

$('.page').hide()