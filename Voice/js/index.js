$(function () {
    $('.btn').click(function () {
        window.location.href='gz.html'
    })
    $('.left').click(function () {
        $(this).removeClass('active');
        $('.right').addClass('active');
        $('.ng').removeClass('none');
        $('.ngo').addClass('none');
        $('.f-one').removeClass('none');
        $('.f-two').addClass('none')

    })
    $('.right').click(function () {
        $(this).removeClass('active');
        $('.left').addClass('active');
        $('.ngo').removeClass('none');
        $('.ng').addClass('none');
        $('.f-two').removeClass('none');
        $('.f-one').addClass('none')
    })
})