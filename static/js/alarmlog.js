var alarmlogtable;

function initAlarmLog(){
	
	alarmlogtable = $('#eqp_alarm_logs').DataTable({
		
		searching: false,
		info:false,
		lengthChange:false,
		paging:false,
		processing: true, //隐藏加载提示,自行处理
		//serverSide: true,
		
		scrollY: '60%',
		//scrollX: '90%',
  		scrollCollapse: true,
		//autoWidth: true,
		ordering: false,
		pageLength: 20,
		
		data:[
		{'time':'20.02.01','equipment':'super_chrome','alarm id':11,'alarm status':'clear'},
		{'time':'20.02.02','equipment':'schrome','alarm id':13,'alarm status':'occur'},
		{'time':'20.02.03','equipment':'schrome','alarm id':13,'alarm status':'occur'},
		{'time':'20.02.01','equipment':'schrome','alarm id':11,'alarm status':'clear'},
		{'time':'20.02.02','equipment':'schrome','alarm id':13,'alarm status':'occur'},
		{'time':'20.02.03','equipment':'schrome','alarm id':13,'alarm status':'occur'}
		],
		
		columns: [
				{ "data": "time",
				  "width": "20" },
				{ "data": "equipment",
				  "width": "20" },
				{ "data": "alarm id",
				  "width": "10" },
				{ "data": "alarm status",
				  "width": "10" }
			]
	}); 
}

function getLayuiTable(){
	layui.use('table', function(){
  var table = layui.table;
  tab_height = $(document).height()*0.96*0.3*0.75
  
  //第一个实例
  table.render({
    elem: '#eqp_alarm_logs',
    height: tab_height,
    //url: '/demo/table/user/', //数据接口
    //page: true ,//开启分页
    data:[
		{'time':'20.02.01','equipment':'heb_1_cc','alarm id':11,'alarm status':'clear'},
		{'time':'20.02.02','equipment':'heb_1_sc','alarm id':13,'alarm status':'occur'},
		{'time':'20.02.03','equipment':'heb_1_sc','alarm id':13,'alarm status':'occur'},
		{'time':'20.02.01','equipment':'heb_1_ec','alarm id':11,'alarm status':'clear'},
		{'time':'20.02.02','equipment':'heb_1_sc','alarm id':13,'alarm status':'occur'},
		{'time':'20.02.03','equipment':'heb_1_ad','alarm id':13,'alarm status':'occur'}
		],
    cols: [[ //表头
      {field: 'time', title: '触发', width:'30%'},
      {field: 'equipment', title: '设备', width:'30%'},
      {field: 'alarm id', title: 'Code', width:'20%'},
      {field: 'alarm status', title: '状态', width:'20%'} 
      
    ]]
  });
  
});

}

$(document).ready(function(){
	//initAlarmLog();
	getLayuiTable();
})
