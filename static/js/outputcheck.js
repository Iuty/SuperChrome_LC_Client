var alarmlogtable;


function initOutputCheckLog(){
	layui.use('table', function(){
  var table = layui.table;
  
  //第一个实例
  table.render({
    elem: '#output_check_table',
    height: '480%',
    //url: '/demo/table/user/', //数据接口
    //page: true ,//开启分页
    data:[
		{'cid':'s1-17','cap':'1L','timestamp':'20-02-18 14:34:00','pure':'90.34%'},
		{'cid':'s1-18','cap':'1L','timestamp':'20-02-18 14:34:00','pure':'90.34%'},
		{'cid':'s1-19','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-20','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-21','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-22','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-23','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-24','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-25','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		{'cid':'s1-26','cap':'1L','timestamp':'20.02.18 14:34:00','pure':'90.34%'},
		],
    cols: [[ //表头
      {field: 'cid', title: '容器', width:'19%'},
      {field: 'cap', title: '容量', width:'16%'},
      {field: 'timestamp', title: '时间', width:'42%'},
      {field: 'pure', title: '纯度', width:'23%'}
      
    ]]
  });
  
});

}

$(document).ready(function(){
	
	initOutputCheckLog();
})
