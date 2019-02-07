$(function(){
//ボタンのサイズ変更
$('#js-click-btn').on('click',function(){
    $(this).addClass('large-btn');
});
//ボタンの透明度変更

$('#js-hover-btn').mouseover(function(){
    $(this).addClass('opacity');
}).mouseleave(function(){
    $(this).removeClass('opacity');
});

//要素の表示、非表示切り替え
// 表示の要素
$('#js-show-btn').on('click',function(){
    $('.box').fadeIn(1000);
})
$('#js-hide-btn').on('click',function(){
    $('.box').fadeOut(1000);
});



// fadeIn(数字);

// 要素の非表示
// fadeOut(数字);




});



