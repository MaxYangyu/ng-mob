$(function () {
    $('.wx').on('click', function () {
        $('.alipay-info').addClass('none');
        $('.ali').removeClass('active');
        $('.weixin-info').removeClass('none')
        $('.wx').addClass('active');
    })
    $('.ali').on('click', function () {
        $('.weixin-info').addClass('none');
        $('.wx').removeClass('active');
        $('.alipay-info').removeClass('none')
        $('.ali').addClass('active');
    })
});