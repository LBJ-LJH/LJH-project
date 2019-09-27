//主页列表切换效果js
var navlis = document.getElementsByClassName("nav-lis");
var mains = document.getElementsByTagName("main")[0];
var page = mains.children;
var l1 = navlis.length;
var l2 = page.length;
for(var k=0; k<l1; k++)
{
    navlis[k].onclick = function () {
        var nums = parseInt(this.getAttribute("navsq"));
        if(nums == 1)
        {
            for(var h=0; h<l2; h++)
            {
                page[h].className = "page-main";
            }
            page[0].className = "page-main-block";
        }else if(nums == 2){
            for(var h=0; h<l2; h++)
            {
                page[h].className = "page-main";
            }
            page[1].className = "page-main-block";
        }else if(nums == 3){
            for(var h=0; h<l2; h++)
            {
                page[h].className = "page-main";
            }
            page[2].className = "page-main-block";
        }else if(nums == 4){
            for(var h=0; h<l2; h++)
            {
                page[h].className = "page-main";
            }
            page[3].className = "page-main-block";
        }else{
            for(var h=0; h<l2; h++)
            {
                page[h].className = "page-main";
            }
            page[4].className = "page-main-block";
        }
    }
}

// 关于我们页面js
var cbox = document.getElementsByClassName("content-box")[0];
var cboxson = cbox.children;
var abuslis = document.getElementsByClassName("nav-li");
var len1 = cboxson.length;
var len2 = abuslis.length;
for(var i=0; i<len2; i++)
{
    abuslis[i].onclick = function () {
        var num = parseInt(this.getAttribute("sq"));
        if(num == 1){
            for(var j=1;j<len1;j++)
            {
                cboxson[j].className = "content-item";
            }
            cboxson[1].className = "content-item1";
        }else if(num == 2){
            for(var j=1;j<len1;j++)
            {
                cboxson[j].className = "content-item";
            }
            cboxson[2].className = "content-item1";
        }else{
            for(var j=1;j<len1;j++)
            {
                cboxson[j].className = "content-item";
            }
            cboxson[3].className = "content-item1";
        }
    }
}