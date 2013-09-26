$(function(){
	iniEleEvents();
})

function iniEleEvents(){
	$("body").addClass("top");
	$("#container").addClass("containertop");
	$("#Outlinecontent").hide();
	$("#Charactherscontent").hide();
	var containerindexclass="containertop";
	var indexclass="top";
	var menuflag="menu-top";
	$("#menu-top").css("background-position","0px -35px");
	$("#menu li a").mouseover(function(){
		$("#menu li a").css("background-position","0 0px");
		$("#"+menuflag).css("background-position","0px -35px");
		$(this).css("background-position","0px -35px");
	});
	$("#menu li a").mouseout(function(){
		$("#menu li a").css("background-position","0 0px");
		$("#"+menuflag).css("background-position","0px -35px");
	});
	$("#menu li a").click(function(){
		$("#menu li a").css("background-position","0 0px");
		menuflag=$(this).attr("id");
		$("#"+menuflag).css("background-position","0px -35px");
	});
	$("#menu-top").click(function(){
		$("#Outlinecontent").hide();
		$("#Charactherscontent").hide();
		$("#Topcontent").show();
		$("body").removeClass(indexclass);
		$("body").addClass("top");
		$("#container").removeClass(containerindexclass);
		$("#container").addClass("containertop");
		containerindexclass="containertop";
		indexclass="top";
	})
	$("#menu-outline").click(function(){
		$("#Topcontent").hide();
		$("#Charactherscontent").hide();
		$("body").removeClass(indexclass);
		$("body").addClass("outline");
		$("#container").removeClass(containerindexclass);
		$("#container").addClass("containoutline");
		containerindexclass="containoutline";
		indexclass="outline";
		$("#Outlinecontent").show();

	})
	$("#menu-characters").click(function(){
		$("#Outlinecontent").hide();
		$("#Charactherscontent").show();
		$("#Topcontent").hide();
		$("body").removeClass(indexclass);
		$("body").addClass("outline");
		$("#container").removeClass(containerindexclass);
		$("#container").addClass("containoutline");
		containerindexclass="containoutline";
		indexclass="outline";

	})
	$("#sum7btn").addClass("cursor");
	$("#sum7btn").click(function(){	
		$(this).attr("src","css/images/switch-original-active.png");
		$(this).removeClass("cursor");
		$("#sum7mbtn").attr("src","css/images/switch-m.png");
		$("#sum7mbtn").addClass("cursor");
	})
	$("#sum7mbtn").click(function(){	
		$(this).attr("src","css/images/switch-m-active.png");
		$(this).removeClass("cursor");
		$("#sum7btn").attr("src","css/images/switch-original.png");
		$("#sum7btn").addClass("cursor");
	})

	$("#fazheng").mouseover(function(){
		$(this).css("background-position","0px -179px");
	})
	$("#fazheng").mouseout(function(){
		$(this).css("background-position","0px 0px");
	})
	$("#zhuran").mouseover(function(){
		$(this).css("background-position","0px -179px");
	})
	$("#zhuran").mouseout(function(){
		$(this).css("background-position","0px 0px");
	})
	$("#yujin").mouseover(function(){
		$(this).css("background-position","0px -179px");
	})
	$("#yujin").mouseout(function(){
		$(this).css("background-position","0px 0px");
	})
	$("#chengong").mouseover(function(){
		$(this).css("background-position","0px -179px");
	})
	$("#chengong").mouseout(function(){
		$(this).css("background-position","0px 0px");
	})
	$("#fazheng").click(function(){
		$("#mengban").show();
		$("#main-image").show();
		$("#infowujing").show();
	})
	$("#mengban").click(function(){
		$(this).hide();
		$("#main-image").hide();
		$("#infowujing").hide();
	})
	var imgfull="no";
	$("#btnquanshen").click(function(){		
		if(imgfull=="no") {
			$(this).attr("src","css/images/bt-img-full.jpg");
			$("#main-image").attr("src","css/images/housei-full.jpg");
			imgfull="yes";
			
		}
		else if(imgfull=="yes"){
			$(this).attr("src","css/images/bt-img-def.jpg");
			$("#main-image").attr("src","css/images/housei-def.jpg");
			imgfull="no";
			
		}		
	})

}