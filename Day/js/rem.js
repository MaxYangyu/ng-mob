/**
 * Created by 杨宇 on 2017/6/9.
 */
/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
var html=document.getElementsByTagName("html")[0];var width=window.innerWidth;var fontSize=100/750*width;html.style.fontSize=fontSize+"px";window.onresize=function(){var a=document.getElementsByTagName("html")[0];var b=window.innerWidth;var c=100/750*b;a.style.fontSize=c+"px"};
