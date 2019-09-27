// 百度地图API功能
var map = new BMap.Map('allmap');
var poi = new BMap.Point(106.513008,29.536612);
map.centerAndZoom(poi, 16);
map.enableScrollWheelZoom();

var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    '地址：重庆大坪龙湖时代天街3号写字楼2407室<br/>电话：+86 023-867-7848<br/>简介：DUZU大厦位于重庆市大坪龙湖时代天街附近。' +
    '</div>';

//创建检索信息窗口对象
var searchInfoWindow = null;
searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
    title  : "DUZU总部",      //标题
    width  : 290,             //宽度
    height : 105,              //高度
    panel  : "panel",         //检索结果面板
    enableAutoPan : true,     //自动平移
    searchTypes   :[
        BMAPLIB_TAB_SEARCH,   //周边检索
        BMAPLIB_TAB_TO_HERE,  //到这里去
        BMAPLIB_TAB_FROM_HERE //从这里出发
    ]
});
var marker = new BMap.Marker(poi); //创建marker对象
//marker.enableDragging(); //marker可拖拽
marker.addEventListener("click", function(e){
    searchInfoWindow.open(marker);
})
map.addOverlay(marker); //在地图中添加marker