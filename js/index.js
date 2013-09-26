
$(function(){
	iniEleEvents();
})

function iniEleEvents(){
	$("#c").mouseout(function(){
		$("#tiptxt1").hide();
	})
	$("#hCent").mouseout(function(){
		$("#tiptxt2").hide();
	})
	$("#smusou7m").mouseover(function(){
		$(this).css("backgroundPosition","0px -371px");
	})
	$("#smusou7m").mouseout(function(){
		$(this).css("backgroundPosition","0px 0px");
	})
	$("#smusou7m2").mouseover(function(){
		$(this).css("backgroundPosition","0px -159px");
	})
	$("#smusou7m2").mouseout(function(){
		$(this).css("backgroundPosition","0px 0px");
	})
	$("#zanbtn").mouseover(function(){
		$(this).css("border","1px solid rgb(157,172,206)");
	})
	$("#zanbtn").mouseout(function(){
		$(this).css("border","1px solid rgb(202, 212, 231)");
	})
	$(".twfotter li a").mouseover(function(){
		$(this).addClass("yanse");
		var idnun= $(this).attr("id");
		if (idnun=="xingxing"){
		$(this).css("backgroundPosition","-59px -86px");
		$(this).next().show();	
		}
		if (idnun=="shuaxin") {
		$(this).css("backgroundPosition","-29px -86px");
		$(this).next().show();	
		}
		if (idnun=="fanhui") {
		$(this).css("backgroundPosition","0px -87px");	
		$(this).next().show();	
		}
		
	})
	$(".twfotter li a").mouseout(function(){
		$(this).removeClass("yanse");
		var idnun= $(this).attr("id");
		if (idnun=="xingxing") {
			$(this).css("backgroundPosition","-80px -122px");
			$(this).next().hide();	
			}
		if (idnun=="shuaxin") {
		$(this).css("backgroundPosition","-80px -102px");	
		$(this).next().hide();	
		}
		if (idnun=="fanhui") {
		$(this).css("backgroundPosition","-80px -85px");
		$(this).next().hide();	
		}	
	})	
	$(".twli").mouseover(function(){
		$(this).find(".twfotter").css("display","block"); 
		var height=$(this).css("height");
		var arr=new Array();
 		arr= height.split('px'); 
 		$(this).find(".twfotter").css("top",arr[0]-15+"px");
	})
	$(".twli").mouseout(function(){
		$(this).find(".twfotter").css("display","none"); 		
	})
	$("#smusou7m").click(function(){
		window.open("smusou.html");
	})

}


$(document).ready(function(){
	$("#c").bind("mouseover",function(e){
	//这里可得到鼠标X坐标
	var pointX = e.pageX;
	//这里可以得到鼠标Y坐标
	var pointY = e.pageY;	
	$("#tiptxt1").css("top",pointY+ 20 +"px");
	$("#tiptxt1").css("left",pointX-40+"px");
	$("#tiptxt1").show();
	});

	$("#hCent").bind("mouseover",function(e){
	//这里可得到鼠标X坐标
	pointX = e.pageX;
	//这里可以得到鼠标Y坐标
	pointY = e.pageY;	
	$("#tiptxt2").css("top",pointY+ 15 +"px");
	$("#tiptxt2").css("left",pointX+10+"px");
	$("#tiptxt2").show();
	});

});