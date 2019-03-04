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
});
$('#js-hide-btn').on('click',function(){
    $('.box').fadeOut(1000);
});



//要素の追加
//要素の前後に追加(外に)
$('#js-add-btn').on('click',function(){
    $(this).before('<li class ="btn">ボタンの前に追加</li>');
    $(this).after('<li class="btn">ボタンの後ろに追加</li>');
});

//要素の前後に追加(中に)
//コメントを保存する時につけますよ（リロードしないで使える）
$('#js-add-btn2').on('click',function(){
    $(this).prepend('<li>前</li>');
    $(this).append('<li>後ろ</li>'); //append後ろ
});

//toggleメニュー作るよ
$('.js-toggle').on('click',function(){
    // $(this).toggleClass('on');
    $(this).siblings().slideToggle();
});


$('.js-hamburger').on('click',function(){
    $(this).toggleClass('on');
});


$('.js-hamburger').on('mouseover',function(){
    $(this).toggleClass('on');
}).on('mouseleave',function(){
    $(this).toggleClass('');
});

//toggle直樹さんの案
$('.js-hamburger').on('mouseover mouseleave',function(){
    $(this).toggleClass('on');
});

//スムーズスクロール
    $('.js-scroll').on('click',function(){
        $('body,html').animate({ scrollTop:0 }, 500);
        console.log('hogehoge');
    });

// //モーダルウィンドウ表示
$('.js-modal').on('click',function(){
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
});

$('.js-modal-close').on('click',function(){
    $('.modal-content').fadeOut(1000);
    $('#modal-bg').fadeOut(1000);

});


//タブメニュー作る

//タブメニュー
$('.tab-nav a').on('click',function(){
　　if($(this).hasClass('active')) {
    return false;
    }
    // console.log('test');
    console.log(this.hash);


    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');

    $('.tab-content > div').removeClass('active');
    $('.tab-content > div').filter(this.hash).addClass('active');
});

//スライダー
//クラス.slideの要素の幅maeginは含まない
let slideWidth = $('.slide').outerWidth();

//.slideクラスがついているdivの数
let slideNum = $('.slide').length;
//
let slideWrapperWidth = slideWidth * slideNum;

let currentSlide = 0;
$('slide-wrapper').css('widht'. slideWrapperWidth);


//次へ
$('.next-slider').on('click',function(){
    //最後のスライドだった場合
   if(currentSlide === slideNum -1){
        return false;
    }


    currentSlide++; 
    slide();

});

//前へ
$('.prev-slider').on('click',function(){
    //もし最初のスライドだったら処理停止
     if(currentSlide === 0){
        return false;
    }

    currentSlide--;
    slide();
});

function slide(){
    $('.slide-wrapper').stop().animate({
        left: currentSlide * -slidewidth
    });
}
























});