
var lng = "";
var lat = "";

var map = new BMap.Map("allmap");
var point = new BMap.Point(116.331398,39.897445);
map.centerAndZoom(point,12);

// 创建地址解析器实例
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野
myGeo.getPoint("广东省揭阳市榕城区东湖大酒店", function(point){
    if (point) {
        // 终点经纬度
        var pointLng = point.lng;
        var pointLat = point.lat;

        //获取当前地理位置
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);

                //当前地理位置的经纬度
                lng = r.point.lng;
                lat = r.point.lat;

                var myP1 = new BMap.Point(lng,lat);    // 所定位的经纬度
                var myP2 = new BMap.Point(pointLng, pointLat);    // 目的地的经纬度
                var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车实例
                driving2.search(myP1, myP2);    //显示一条公交线路

                window.run = function () {
                    var driving = new BMap.DrivingRoute(map);    //驾车实例
                    driving.search(myP1, myP2);
                };
                setTimeout(function () {
                    run();
                },3000)
            }
            else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true});

        map.centerAndZoom(point, 16);
        map.addOverlay(new BMap.Marker(point));
    }else{
        alert("您选择地址没有解析到结果!");
    }
}, "北京市");