if (Window.localStorage.getItem('beenHere')){
    if(){
        $('#intro').hide();
    }else{}
}else{}

$('#intro').dialog()
$('#intro').on('click','button',function(e){
    e.preventDefault(); 
    let answer = $(event.target).attr('id')

    answer === 'yes'?
})

$('.page').hide()