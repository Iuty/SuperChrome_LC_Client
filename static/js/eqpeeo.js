var EeoChart
function initEeoChart(){

    EeoChart = echarts.init($('#eqp_status_charts')[0]);
    
}

function setEeoChartOption(data){
    option = {
    
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
    
        legend: {
        
            textStyle:{
                            //fontSize: 8,//字体大小
                            color: '#ffffff'//字体颜色
                        },
            itemWidth:15,
            itemHeight:8,
            data:["A班_运行","A班_待机","A班_故障","A班_维护","B班_运行","B班_待机","B班_故障","B班_维护","C班_运行","C班_待机","C班_故障","C班_维护"]
        

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                    },
            data: data['xlabel']
            
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
                    }

        }
    ],
    series: [
        {
            name: 'A班_运行',
            type: 'bar',
            stack:'A班',
            itemStyle:{
                color:"#209920"
            },
            data: data['data']['class1']['run']

        },
        {
            name: 'A班_待机',
            type: 'bar',
            stack:'A班',
            itemStyle:{
                color:"#aaaa00"
            },
            data: data['data']['class1']['idle']
        },
        {
            name: 'A班_故障',
            type: 'bar',
            stack:'A班',
            itemStyle:{
                color:"#aa2020"
            },
            data: data['data']['class1']['alarm']
        },
        {
            name: 'A班_维护',
            type: 'bar',
            stack:'A班',
            itemStyle:{
                color:"#2020aa"
            },
            
            data: data['data']['class1']['pm']
        },
        
        {
            name: 'B班_运行',
            type: 'bar',
            stack:'B班',
            itemStyle:{
                color:"#209920"
            },
            data: data['data']['class2']['run']
        },
        {
            name: 'B班_待机',
            type: 'bar',
            stack:'B班',
            itemStyle:{
                color:"#aaaa00"
            },
            data: data['data']['class2']['idle']
        },
        {
            name: 'B班_故障',
            type: 'bar',
            stack:'B班',
            itemStyle:{
                color:"#aa2020"
            },
            data: data['data']['class2']['alarm']
        },
        
        {
            name: 'B班_维护',
            type: 'bar',
            stack:'B班',
            itemStyle:{
                color:"#2020aa"
            },
            data: data['data']['class2']['pm']
        },
        {
            name: 'C班_运行',
            type: 'bar',
            stack:'C班',
            itemStyle:{
                color:"#209920"
            },
            data: data['data']['class3']['run']
        },
        {
            name: 'C班_待机',
            type: 'bar',
            stack:'C班',
            itemStyle:{
                color:"#aaaa00"
            },
            data: data['data']['class3']['idle']
        },
        {
            name: 'C班_故障',
            type: 'bar',
            stack:'C班',
            itemStyle:{
                color:"#aa2020"
            },
            data: data['data']['class3']['alarm']
        },
        
        {
            name: 'C班_维护',
            type: 'bar',
            stack:'C班',
            itemStyle:{
                color:"#2020aa"
            },
            data: data['data']['class3']['pm']
        }
    ]
};

if (option && typeof option === "object") {
    EeoChart.setOption(option, true);
}
}

function refreshEeoChart(){
    $.ajax({
        type:'post',
        async:true,
        url:'/status',
        data:{'cmd':'getEeoSerial','param':' '},
        success:function(result){setEeoChartOption(result);}
    });
}

$(document).ready(function(){
	//var dom = document.getElementById('eqp_status_charts');
	initEeoChart();
    refreshEeoChart()
});