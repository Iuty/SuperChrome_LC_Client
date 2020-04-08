

function getOutput(){
    var myChart = echarts.init($('#eqp_output_charts')[0]);
    option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },

    legend: {
        textStyle:{
                            fontSize: 8,//字体大小
                            color: '#ffffff'//字体颜色
                        },
        data: ['产出', '平均纯度']
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
            data: ['今日', '1日前', '2日前', '3日前', '4日前', '5日前', '6日前', '7日前', '8日前', '9日前', '10日前', '11日前'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '产量',
            min: 0,
            max: 250,
            //interval: 50,
            nameTextStyle:{
                color:'#fff'
            },
            axisLabel: {
                formatter: '{value} L',
                show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
            }
        },
        {
            type: 'value',
            name: '纯度',
            min: 70,
            max: 100,
            interval: 5,
            nameTextStyle:{
                color:'#fff'
            },
            axisLabel: {
                formatter: '{value} %',
                show: true,
                            textStyle: {
                                color: '#ffffff'
                            }
            }
        }
    ],
    series: [
        
        {
            name: '产出',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '平均纯度',
            type: 'line',
            yAxisIndex: 1,
            data: [82.0, 82.2, 93.3, 84.5, 86.3, 80.2, 80.3, 83.4, 83.0, 86.5, 82.0, 86.2]
        }
    ]
};
    if (option && typeof option === "object") {
    myChart.setOption(option, true);

}
}


$(document).ready(function(){
	//var dom = document.getElementById('eqp_status_charts');
    //getAlarmItem();
    getOutput();

    
});