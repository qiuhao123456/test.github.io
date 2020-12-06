//获取元素
var img = document.getElementById("img");
var li = document.getElementsByTagName("lii");
var left = document.getElementById("left");
var right = document.getElementById("right");
var num = 0;
var timer = null;

//左滑
var arrUrl = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
left.onclick = function () {
    num--;
    if (num == -1){
        num = arrUrl.length-1;//如果到了第一张，返回最后一张
    }
    changeImg();
}

//右滑
right.onclick = function () {
    num++;
    if (num == arrUrl.length){
        num = 0;//如果是最后一张，则返回第一张
    }
    changeImg();
}

//点击小圆点跳转到对应的图片
for (var i=0;i<arrUrl.length;i++){
       li[i].index = i;
       li[i].onclick = function () {
           num = this.index;
           console.log(num);
           changeImg();
       }
}

setTimeout(autoPlay(),1000);//延迟1秒执行自动切换

//鼠标移入清除定时器，鼠标移出恢复
content.onmouseover = function () {
    clearInterval(timer);
};
content.onmouseout = autoPlay;

//图片切换
function changeImg() {
    img.src = arrUrl[num]; //改变图片src位置
    for (var i = 0;i< li.length;i++){ //改变原点样式
        li[i].className = "";
    }
    li[num].className = "active";
}

//设置定时器
function autoPlay() {
    timer = setInterval(function () {
        num++;
        num %= arrUrl.length;
        changeImg();
    },3000); 
} 