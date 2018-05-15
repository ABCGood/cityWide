// 选项卡切换
function detailRadios(obj) {
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var triangle2 = document.getElementById("triangle2");
    var triangle1 = document.getElementById("triangle1");
    var tab_content1 = document.getElementById("tab-content1");
    var tab_content2 = document.getElementById("tab-content2");
    console.log(obj.id);
    if (obj.id == "tab2"){
        tab1.style.color = "#cf292e";
        tab1.style.backgroundColor = "#eee";
        tab2.style.color = "#ffffff";
        tab2.style.backgroundColor = "#cf292e";
        triangle2.style.display = "block";
        triangle1.style.display = "none";
        tab_content2.style.display = "block";
        tab_content1.style.display = "none";
    } else if (obj.id == "tab1"){
        tab1.style.color = "#fff";
        tab1.style.backgroundColor = "#cf292e";
        tab2.style.color = "#cf292e";
        tab2.style.backgroundColor = "#eee";
        triangle1.style.display = "block";
        triangle2.style.display = "none";
        tab_content1.style.display = "block";
        tab_content2.style.display = "none";
    }
}

// 获取数据
var result = "";
window.onload = function () {
    // console.log(index_content)
    $.ajax({
        url : "https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/details_page",//请求地址
        dataType : "json",//数据格式
        type : "get",//请求方式
        async : false,//是否异步请求
        success : function(data) {   //如何发送成功
            result = data;
        },
    });
    console.log(result)
    laytpl($('#detailsContent').html()).render(result.data, function (html) {
        // console.log(html)
        if (result.data){
            $('#textDetailsContent').append(html)
        } else {
            $('#textDetailsContent').html(html)
        }
    });
}