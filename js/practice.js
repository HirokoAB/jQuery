$(function(){
    $('#js-click-btn').on('click',function(){
        $(this).addclass('large-btn');
    });

$('#js-hover-btn').mouseover(function(){
    $(this).addclass('opacity');
}).mouseleave(function(){
    $(this).remoneClass('opasity');
});


$('#js-show-btn').on('click',function(){
    $('.box'),fadeIn(2000);
})
$('#js-hide-btn').on('click',function(){
    $('.box').fadeOut(2000);
});


});