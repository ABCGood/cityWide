// 顶部全国与本地的切换
// function test(obj){
//     var indexContent = document.getElementById("indexContent");
//     var wholeCountry = document.getElementById("wholeCountry");
//     var local = document.getElementById("local");
//     // console.log(obj.id)
//     if (obj.id == "local"){
//         indexContent.style.display = "none";
//         wholeCountry.style.backgroundColor = "#cf292e";
//         wholeCountry.style.color = "#fff";
//         local.style.backgroundColor = "#fff";
//         local.style.color = "#cf292e";
//     } else {
//         indexContent.style.display = "block";
//         wholeCountry.style.backgroundColor = "#fff";
//         wholeCountry.style.color = "#cf292e";
//         local.style.backgroundColor = "#cf292e";
//         local.style.color = "#fff";
//     }
// }


// 选项卡
layui.use('element', function(){
    var element = layui.element;
});
// 读取屏幕宽度来设置选项卡的宽度
// $(document).ready(function () {
//     // console.log(window.innerWidth);
//     // var windowWidth = screen.availWidth;
//     // // var widths = windowWidth/2-30;
//     // var menu = document.getElementsByClassName("el-cascader-menu");
//     // var x = document.getElementsByClassName("el-cascader-menu");
//     // document.getElementById("tabTop1").style.width = widths+"px";
//     // // document.getElementById("tabTop2").style.width = widths+"px";
//     // if (windowWidth == 320){
//     //     menu.style.backgroundColor = "105px"
//     // } else {
//     //     menu.style.width = "125px"
//     // }
//     var a1 = document.getElementsByClassName("el-cascader-menu");
//
//     for(var i = 0; i < a1.length; i++){
//         a1[i].style.width = "100px";
//     }
// });

// 读取数据，遍历
window.onload = function () {
    // 正在报名中
    layui.use('flow', function () {
        var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
        var flow = layui.flow;
        flow.load({
            elem: '#textIndexSignUpContent' //指定列表容器
            , done: function (page, next) { //到达临界点（默认滚动触发），触发下一页
                var lis = [];
                //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                $.get('https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/index?page='+page, function (res) {
                    //假设你的列表返回在data集合中
                    layui.each(res.data, function (index, item) {
                        console.log(item)
                        laytpl($('#indexSignUpContent').html()).render(item[0].content, function (html) {
                            if (item[0].content){
                                $('#textSignUpContent').append(html)
                            } else {
                                $('#textSignUpContent').html(html)
                            }
                        });
                    });
                    //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                    //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                    var pageCount = res.data.page[1].pageCount;
                    next(lis.join(''), page < pageCount);
                });
            }
        });
    });
    // 往期精彩活动
    layui.use('flow', function () {
        var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
        var flow = layui.flow;
        flow.load({
            elem: '#textIndexPastContent' //指定列表容器
            , done: function (page, next) { //到达临界点（默认滚动触发），触发下一页
                var lis = [];
                //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
                $.get('https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/indexPast?page='+page, function (res) {
                    //假设你的列表返回在data集合中
                    layui.each(res.data, function (index, item) {
                        console.log(item)
                        laytpl($('#indexPastContent').html()).render(item[0], function (html) {
                            if (item[0]){
                                $('#textPastContent').append(html)
                            } else {
                                $('#textPastContent').html(html)
                            }
                        });
                    });
                    //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                    //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                    var pageCount = res.data.page[1].pageCount;
                    next(lis.join(''), page < pageCount);
                });
            }
        });
    });
};
// window.onload = function () {
//     // 往期精彩活动
//     layui.use('flow', function () {
//         var $ = layui.jquery; //不用额外加载jQuery，flow模块本身是有依赖jQuery的，直接用即可。
//         var flow = layui.flow;
//         flow.load({
//             elem: '#textIndexPastContent' //指定列表容器
//             , done: function (page, next) { //到达临界点（默认滚动触发），触发下一页
//                 var lis = [];
//                 //以jQuery的Ajax请求为例，请求下一页数据（注意：page是从2开始返回）
//                 $.get('https://www.easy-mock.com/mock/5af24ab48b04ba36ed89b4cf/indexPast?page='+page, function (res) {
//                     //假设你的列表返回在data集合中
//                     layui.each(res.data, function (index, item) {
//                         console.log(item)
//                         laytpl($('#indexPastContent').html()).render(item[0], function (html) {
//                             if (item[0]){
//                                 $('#textPastContent').append(html)
//                             } else {
//                                 $('#textPastContent').html(html)
//                             }
//                         });
//                     });
//                     //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
//                     //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
//                     var pageCount = res.data.page[1].pageCount;
//                     next(lis.join(''), page < pageCount);
//                 });
//             }
//         });
//     });
// };