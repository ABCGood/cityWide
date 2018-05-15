// 获取数据
var result = "";
$(document).ready(function () {
    // console.log(screen.availWidth);
    console.log(window.innerWidth);
    var windowWidth = screen.availWidth;
    var widths = windowWidth-115-25;
    document.getElementById("cardContentCenter").style.width = widths+"px";
    // console.log(index_content)
    $.ajax({
        url : "https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/vistitingcard",//请求地址
        dataType : "json",//数据格式
        type : "get",//请求方式
        async : false,//是否异步请求
        success : function(data) {   //如何发送成功
            result = data;
        },
    });
    console.log(result)
    laytpl($('#cardContent').html()).render(result.data, function (html) {
        // console.log(html)
        console.log(result.data.user)
        if (result.data){
            $('#textCardContent').append(html)
            // for (var i = 0; i < result.data.user.length; i++){
            //     document.getElementById("cardContBotBtn"+i).style.width = widths+"px";
            //     // document.getElementById("memImg"+i).style.width = widths+"px";
            // }
        } else {
            $('#textCardContent').html(html)
        }
    });
});