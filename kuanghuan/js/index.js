$(function () {
    $('.fr').on('click',function () {
        $(".fr>img").attr("src","img/圆角矩形-1@2x.png");
        $(".fl>img").attr("src","img/圆角矩形-2@2x.png");
        $('.wj').removeClass('none')
        $('.zb').addClass('none')
    })
    $('.fl').on('click',function () {
        $(".fl>img").attr("src","img/圆角矩形-1@2x.png");
        $(".fr>img").attr("src","img/圆角矩形-2@2x.png");
        $('.wj').addClass('none')
        $('.zb').removeClass('none')
    });
    $('.img').on('click',function () {
        window.location.href="http://www.imooc.com"
    })
})