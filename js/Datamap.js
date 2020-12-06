//曲线
$(function() {
    var myChart = echarts.init(document.getElementById('diagram'));
    myChart.setOption({
        grid:{  //表格边距
            x:100,
            y:100,
            x2:50,
            y2:40,
        },
        title: {  // 图表标题
            text: '曲线图数据展示', 
            x:'center',
            y:30
        },
        xAxis: {
            axisLine:{"show":false},    //隐藏轴线
            axisTick:{"show":false},    //隐藏刻度线
            axisLabel: {    //x轴数据样式
                fontSize : 15,
                //interval:0,
                //rotate:45,
            },
            data: []			
        },
        yAxis: { 
            axisLine:{"show":false},
            axisTick:{"show":false}, 
            axisLabel: {
                formatter:'{value} 人'
            },
            splitLine:{
                lineStyle:{
                    type:'dotted'    //设置网格线类型 dotted：虚线   solid:实线
                },
            }            
        }, 
        tooltip: {},    //鼠标悬停显示数据            
        series: [{  
            type: 'line',
            smooth:true,
            data: [],			
            itemStyle:{  //曲线颜色
                normal:{
                    color:'CornflowerBlue'
                }
            },
            areaStyle: {  //曲线下方填充颜色
                color: 'CornflowerBlue',
                opacity: 0.1
            },
            label: {     //数据样式
                normal: {
                    show: true,
                    color:'CornflowerBlue',
                    position: 'top',    // 显示位置
                }
            },
        }],
    });

    $.get('data/curve.json').done(function(data){
        // 填入数据到上面空模板
        myChart.setOption({
            xAxis: {
                data: data.xAxis
            },
            series: [{
                data: data.month
            }]
        })
    })
})

//饼状图
var myChart = echarts.init(document.getElementById('pie'));
$.get('data/pie.json').done(function (data) {
    myChart.setOption({
        title:{
            text: '饼状图数据展示', 
            x:'center',
            y:50
        },
        tooltip: {},
        series : [
            {
                type: 'pie',   
                radius: '60%',  
                center: ['50%','60%'],
                data:data.week
            }
        ]
    })
},)

//柱状图
$(function() {
    var myChart = echarts.init(document.getElementById('bar'));
    myChart.setOption({
        grid:{  //表格边距
            x:100,
            y:150,
            x2:50,
            y2:40,
        },
        title: {  // 图表标题
            text: '柱状图数据展示', 
            x:'center',
            y:50
        },
        xAxis: {
            axisLine:{"show":false},    //隐藏轴线
            axisTick:{"show":false},    //隐藏刻度线
            axisLabel: {    //x轴数据样式
                fontSize : 10,
                //interval:0,
                //rotate:45,
            },
            data: []			
        },
        yAxis: { 
            name:'商品数',
            axisLine:{"show":false},
            axisTick:{"show":false}, 
            splitLine:{
                lineStyle:{
                    type:'dotted'    //设置网格线类型 dotted：虚线   solid:实线
                },
            }            
        }, 
        tooltip: {},    //鼠标悬停显示数据            
        series: [{  
            type: 'bar',
            barWidth:20,
            data: [],			
            itemStyle:{  //颜色
                normal:{
                    color:'CornflowerBlue'
                }
            },
        }],
    });

    $.get('data/bar.json').done(function(data){
        // 填入数据到上面空模板
        myChart.setOption({
            xAxis: {
                data: data.xAxis
            },
            series: [{
                data: data.week
            }]
        })
    })
})
