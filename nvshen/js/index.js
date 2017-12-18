var btn = document.getElementById('btn');
var obj = document.getElementById('myarticle');


var total_height = obj.scrollHeight;


btn.onclick = function () {
    if (obj.style.height<total_height){
        obj.style.height = total_height + 'px';
        btn.src = "img/组-8-拷贝@2x.png";
    }else {
        obj.style.height = 135+ 'px';
        btn.src = "img/组-8@2x.png";
        obj.style.height =""
    }

}



$('#home>.hd>.ir').on('click', function () {
    $('#home>.hd>.ir>.hd-name>img').removeClass('none');
    $('#home>.hd>.il>.hd-name>img').addClass('none');
    $('#home>.xy-r').removeClass('none');
    $('#home>.xy-l').addClass('none');

});

$('#home>.hd>.il').on('click', function () {
    $('#home>.hd>.il>.hd-name>img').removeClass('none')
    $('#home>.hd>.ir>.hd-name>img').addClass('none');
    $('#home>.xy-l').removeClass('none');
    $('#home>.xy-r').addClass('none');
});

$('#profile1>.hd>.ir').on('click', function () {
    $('#profile1>.hd>.ir>.hd-name>img').removeClass('none');
    $('#profile1>.hd>.if>.hd-name>img').addClass('none');
    $('#profile1>.xy-r').removeClass('none');
    $('#profile1>.xy-l').addClass('none');
});

$('#profile1>.hd>.if').on('click', function () {
    $('#profile1>.hd>.if>.hd-name>img').removeClass('none');
    $('#profile1>.hd>.ir>.hd-name>img').addClass('none');
    $('#profile1>.xy-l').removeClass('none');
    $('#profile1>.xy-r').addClass('none');
})




