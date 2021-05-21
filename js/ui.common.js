$(function () {
    introFunc();
});


function introFunc(){
    var introWrap = $(".intro-wrap"),
        body = $("body");

    introWrap.addClass("on");
    body.css("overflow-y","hidden"); // 스크롤 방지

    setTimeout(function(){ // 1초뒤 실행 함수
        introWrap.addClass("off");
    },1000);

    setTimeout(function(){ // 2초뒤 실행 함수
        introWrap.fadeOut(500);
        body.css("overflow-y","auto"); // 스크롤 방지 해제
    },2000);
}
