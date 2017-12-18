var btn = document.getElementById('btn');
var obj = document.getElementById('myarticle');


var total_height = obj.scrollHeight;


btn.onclick = function () {
    if (obj.style.height<total_height){

        obj.style.height = total_height + 'px';
        $('.foot-img').css('display','none');
        $('#nav-ui').css('top',)
    }

}








