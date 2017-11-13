$(function() 
{       
	//必要的数据     //今天的年 月 日 ；本月的总天数；本月第一天是周几？？？     
	var iNow=0;           
	function run(n) 
	{        
		var oDate = new Date();//定义时间      
		oDate.setMonth(oDate.getMonth()+n);//设置月份
		var year = oDate.getFullYear();//年      
		var month = oDate.getMonth(); //月      
		var today = oDate.getDate(); //日        
		//计算本月有多少天
		var allDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];        
		//判断闰年      
		if(month == 1) 
		{       
			if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
			{        
				allDay = 29;       
			}      
		}        
		//判断本月第一天是星期几      
		oDate.setDate(1); //时间调整到本月第一天      
		var week = oDate.getDay(); //读取本月第一天是星期几 
		//插入空白        
		for(var i = 0; i < week; i++) 
		{       
			$(".date1").append("<li></li>");      
		}        
		//日期插入到date1      
		for(var i = 1; i <= allDay; i++) 
		{       
			$(".date1").append("<li>" + i + "</li>")      
		}
		//定义标题日期      
		$("#calendar h4").text(year + "年" + (month + 1) + "月");     
	};     
	run(0);           
	$(".a1").click(function()
	{      
		iNow--;      
		run(iNow);     
	});           
	$(".a2").click(function()
	{      
		iNow++;      
		run(iNow);     
	})    
});