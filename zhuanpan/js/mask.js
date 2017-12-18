var left = ($(window).width() - $('.hj').width())/2;
var scrollLeft = $(document).scrollLeft();
var flag=0;

/*点击出现遮罩层*/
$('.fr>a').on('click',function () {
    showOverlay();
    loaded()
    $('.hj').css('display','block');
    $('.hj').css('position' ,'fixed').css('left',left + scrollLeft).css('top','35%');
    flag=1;
    $('#wrapper').css('position' ,'fixed').css('top','35%');
    $('body').css('overflow','hidden');

});

document.addEventListener('touchmove', function (event) { 　　 //监听滚动事件
    if(flag==1){　　　　　　　　　　　　　　　　　　　　　　　　　　　　//判断是遮罩显示时执行，禁止滚屏
        event.preventDefault();　　　　　　　　　　　　　　　　　　　//最关键的一句，禁止浏览器默认行为
    }
})

/*点击关闭遮罩层*/
$('.hj>.close-btn').on('click',function () {
    $('.hj').css('display','none');
    hideOverlay()
    flag=0;
    $('body').css('overflow','auto');
    $('#wrapper').css('top','-800px')
})

//
$('.ok-btn').on('click',function () {
    hideOverlay()
    $('.info').css("display",'none')
    $('body').css('overflow','auto');
})

/* 显示遮罩层 */
function showOverlay() {
    $("#overlay").height($(document).height());
    $("#overlay").width(pageWidth());

    // fadeTo第一个参数为速度，第二个为透明度
    $("#overlay").fadeTo(100, 0.8);
}

/* 隐藏覆盖层 */
function hideOverlay() {
    $("#overlay").fadeOut(100);

}

/* 当前页面高度 */
function pageHeight() {
    return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
    return document.body.scrollWidth;
}

//浏览器视口的高度
function windowHeight() {
    var de = document.documentElement;

    return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
}

//浏览器视口的宽度
function windowWidth() {
    var de = document.documentElement;

    return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth
}

/* 浏览器垂直滚动位置 */
function scrollY() {
    var de = document.documentElement;

    return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
}

/* 浏览器水平滚动位置 */
function scrollX() {
    var de = document.documentElement;

    return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
}