function updateOutput(){
     $('iframe').contents().find('html').html(
        "<html><head><style type='text/css'>"+ $('#cssPanel').val() + "</style></head><body>"+
        $('#htmlPanel').val()+"</body></html>");
    document.getElementById('outputPanel').contentWindow.eval($('#jsPanel').val());
}

$('.togglebutton').click(function(){
    
    $(this).toggleClass('active');
    var current = $(this).attr('id');
    console.log(current);   
    $("#"+current + "Panel").toggleClass('active');
});

$('textarea').height($(window).height() - $('header').height() - 28);
$('iframe').height($(window).height() - $('header').height() - 28);
updateOutput();

$('#htmlPanel').on('change keyup paste',function(){
    updateOutput();
});

$('#run').on('click',function(){
    updateOutput();
});