/*点击出现遮罩层*/
$('#btn').on('click',function () {
    showOverlay();
    $('.mask-box').removeClass('none')
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);
})

/*点击关闭遮罩层*/
$('#overlay').on('click',function () {
    $('.mask-box').css('display','none');
    hideOverlay();
    document.addEventListener('touchmove', function (e) {
        e.returnValue = true;
    }, false);

});

$('#close').on('click',function () {
    hideOverlay();
    $('.mask-box').addClass('none');
    document.addEventListener('touchmove', function (e) {
        e.returnValue = true;
    }, false);
    window.location.href='info.html'
})

/* 显示遮罩层 */
function showOverlay() {
    $("#overlay").height($(document).height());
    $("#overlay").width(pageWidth());
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