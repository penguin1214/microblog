/**
 * Created by yang on 2/8/16.
 */

$(document).ready(function(){//DOM的onload事件
    $(window).scroll( function() {//定义滚动条位置改变时触发的事件。
        //回到顶部按钮
        if (getScrollTop() > 1000) {//当滚动条离开顶端时，显示"回到顶部"。这里写20的原因是，"回到顶端"按钮也不是需要马上出现，根据自己的需求 而设置。
            //$("#top_div").show();
            //alert("left");
            $("#back-to-top").show();
        }
        else {//当滚动条回到顶端时，将"回到顶端按钮"  隐藏
            $("#back-to-top").hide();
            //     alert("back");
        }
        //点击返回顶部
        $("#back-to-top").click(function() {
            $(document).scrollTop(0);
        });
        //滑动加载更多
        var len = $(document).height();
        if (getScrollTop() > 0.7 * len){
            load("index-addition", ".col-lg-9");
        }

    });


});
//获取滚动条的位置
function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset)
    {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body)
    {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}
/*
* load()加载更多内容
* url：加载的页面
* position：加载内容所放的元素
*/
function load(url, position){
    //alert("show");
    $.get(url, function(data) {//利用jquery的get方法得到table.html内容

        $(position).append(data);//用append方法追加内容到mypage元素。

        //hght = 0;//恢复滚动条总长，因为$(”#mypage”).scroll事件一触发，又会得到新值，不恢复的话可能会造成判断错误而再次加载……
        //top = 0;//原因同上。
    });
}
//跨浏览器获取滚动条位置，sp == scroll position
function getSP(){
    top = document.documentElement.scrollTop || document.body.scrollTop;

    return top;
    //left : document.documentElement.scrollLeft || document.body.scrollLeft;

}