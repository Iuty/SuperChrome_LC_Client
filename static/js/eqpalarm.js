function getAlarmItem(){
    
    var myChart = echarts.init($('#eqp_alarm_item')[0]);
    var option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);

}
}

var EqpAlarmChart;

function getAlarmUnit(){
    EqpAlarmChart = echarts.init($('#eqp_alarm_charts')[0]);
    option = {
    
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
        //formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        //show:false,
        type:'scroll',
        orient: 'vertical',
        left: '5%',
        right: '80%',
        top: 'top',
        //itemWidth: 15,
        //itemHeight: 8,
        textStyle:{
                            //fontSize: 8,//字体大小
                            color: '#ffffff'//字体颜色
                        },
        data: ['提纯异常', '柱效异常', '1柱传感器异常', '结晶异常', '修饰液液位低', '目标物容器已满', '温控异常']
    },
    
    series: [
        {
            name: '面积模式',
            type: 'pie',
            //radius: [6, 22],
            center: ['65%', '45%'],
            roseType: 'area',
            data: [
                {value: 40, name: '提纯异常'},
                {value: 35, name: '柱效异常'},
                {value: 35, name: '1柱传感器异常'},
                {value: 25, name: '结晶异常'},
                {value: 20, name: '修饰液液位低'},
                {value: 35, name: '目标物容器已满'},
                {value: 30, name: '温控异常'}
            ]
        }
    ]
};
;
    if (option && typeof option === "object") {
    EqpAlarmChart.setOption(option, true);

}
}


$(document).ready(function(){
	//var dom = document.getElementById('eqp_status_charts');
    //getAlarmItem();
    getAlarmUnit();

    
});