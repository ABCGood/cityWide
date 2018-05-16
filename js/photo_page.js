// 获取数据
var result = "";
$(document).ready(function () {
    $.ajax({
        url : "https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/photo_page",//请求地址
        dataType : "json",//数据格式
        type : "get",//请求方式
        async : false,//是否异步请求
        success : function(data) {   //如何发送成功
            result = data;
        },
    });
    console.log(result)
    laytpl($('#photoBottomContent').html()).render(result.data, function (html) {
        console.log(result.data.photo)
        if (result.data){
            $('#textPhotoBottomContent').append(html)
        } else {
            $('#textPhotoBottomContent').html(html)
        }
    });
});