var result = "";
$(document).ready(function () {
    $.ajax({
        url : "https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/party_mem",//请求地址
        dataType : "json",//数据格式
        type : "get",//请求方式
        async : false,//是否异步请求
        success : function(data) {   //如果发送成功
            result = data;
        }
    });
    console.log(result.data);
    laytpl($('#memContent').html()).render(result.data, function (html) {
        // console.log(html)
        if (result.data){
            // console.log(result.data.content.length);
            $('#textMemContent').append(html);
            // var windowWidth = screen.availWidth;
            // var widths = (windowWidth-20)/4-8;
            // console.log(widths);
            // for (var i = 0; i < result.data.content.length; i++){
            //     document.getElementById("memName"+i).style.width = widths+"px";
            //     document.getElementById("memImg"+i).style.width = widths+"px";
            // }
        } else {
            $('#textMemContent').html(html)
        }
    });
});