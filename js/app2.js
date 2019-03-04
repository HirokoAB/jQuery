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
  
//  要素の表示
//  
//  fadeIn(数字);
//  
//  
//  要素の非表示
//  
//  fadeOut(数字);

  
  $('#js-show-btn').on('click',function(){
    
    $('#js-target-element').fadeIn(1000);
    
  });
  $('#js-hide-btn').on('click',function(){
    
    $('#js-target-element').fadeOut(1000);
    
  });
  
  
  //２つの要素を同時に動かす
//   $('#js-show-btn').on('click',function(){
//    
//    $('#js-target-element').fadeIn(1000, function(){
//      $('.description').fadeOut(1000)
//    });
//    
//  });
//
//  $('#js-hide-btn').on('click',function(){
//    
//    $('#js-target-element').fadeOut(1000, function(){
//      $('.description').fadeIn(1000)
//    });
//    
//  });
  
  
  //要素の追加
  //要素の前後に追加(外に)
  $('#js-add-btn').on('click', function(){
    
    $(this).before('<li class="btn">ボタンの前に追加</li>');
    
    $(this).after('<li class="btn">ボタンの後ろに追加</li>');
  
  });
  
  
  //要素の前後に追加(中に)
  $('#js-add-btn2').on('click',function(){
    
    $(this).prepend('<li>前</li>');
    $(this).append('<li>後ろ</li>');    
    
  });
  
  
  //toggleメニュー作るよ
  $('.js-toggle').on('click',function(){
    
    $(this).toggleClass('on');
    $(this).siblings().slideToggle();
    
  });
  
  
    //ハンバーガーメニュー
//  $('.js-hamburger').on('click',function(){
//    
//    $(this).toggleClass('on');
//    
//  });
  
  //ハンバーガーマウスオーバー
//  $('.js-hamburger').mouseover(function(){
//    $(this).addClass('on');
//  }).mouseleave(function(){
//    $(this).removeClass('on');
//  });
  
  //ハンバーガーマウスオーバー
  $('.js-hamburger').on('mouseover mouseout', function(){
    $(this).toggleClass('on');
  });
  
  
  //スムーズスクロール
  $('.js-scroll').on('click',function(){
    
//    任意の場所へ行く方法
    $('html,body').animate({ scrollTop: $("#test").offset().top }, 500);
    
  });

  
  
  //モーダルウィンドウ表示したるでこら！
  $('.js-modal').on('click',function(){
    
    $('.modal-content').fadeIn('slow');
    $('#modal-bg').fadeIn('slow');
    
  });
  
  $('.js-modal-close').on('click',function(){
    
    $('.modal-content').fadeOut(1000);
    $('#modal-bg').fadeOut(1000);
    
  });
  
  
//  タブメニュー作る
  

  // タブメニュー
  $('.tab-nav a').on('click', function() {
    if ($(this).hasClass('active')) {
      return false;
    }

    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');

    $('.tab-content > div').removeClass('active');
    $('.tab-content > div').filter(this.hash).addClass('active');

  });

  
  
  //スライダー
  //クラスslideの要素の幅だよ(marginは含まない)
  let slideWidth = $('.slide').outerWidth();
  console.log(slideWidth);
  
  //slideクラスがついているdivの数(5)
  let slideNum = $('.slide').length;
  console.log(slideNum);
  
  let slideWrapperWidth = slideWidth * slideNum;
  console.log(slideWrapperWidth);
  
  let currentSlide = 0;
  
  $('slide-wrapper').css('width', slideWrapperWidth);

  console.log('slide-wrapper')
  
  //次へ
  $('.next-slider').on('click',function(){
    //最後のスライドだった場合
    if(currentSlide === slideNum -1){
        return false;
    }

    
    currentSlide++;
    console.log(currentSlide)
    
    slide();
  });
  
//  前へ
  $('.prev-slider').on('click',function(){
    
    if(currentSlide === 0){
        return false;
    }
    currentSlide--;
    slide();
    
  });
  
  
function slide() {
    //押せば強制スタートの為にstop()
    $('.slide-wrapper').stop().animate({
      left: currentSlide * -slideWidth
    });
    console.log(currentSlide * -slideWidth)
  }
  
  //動かす時間がかかる動作の場合に.stopを折れることで連打が動作する
  
  //sbsoluteがあるのでleftが使える
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
});