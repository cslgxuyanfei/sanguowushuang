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
		$("#content-article-char").hide();
		$("#sum7-content-body").show();
	})
	$("#sum7mbtn").click(function(){	
		$(this).attr("src","css/images/switch-m-active.png");
		$(this).removeClass("cursor");
		$("#sum7btn").attr("src","css/images/switch-original.png");
		$("#sum7btn").addClass("cursor");
		$("#content-article-char").show();
		$("#sum7-content-body").hide();
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
		$("#fazhenginfo").show();
		
	})
	$("#zhuran").click(function(){
		$("#mengban").show();
		$("#zhuruaninfo").show();
	})
	$("#mengban").click(function(){
		$(this).hide();
		$("#fazhenginfo").hide();
		$("#zhuruaninfo").hide();
		$("#yujininfo").hide();
		$("#chengonginfo").hide();
		$(".giwujiang").hide();
	
	})
	var imgfull="no";
	$("#btnquanshen").click(function(){		
		if(imgfull=="no") {
			$(this).attr("src","css/images/bt-img-full.jpg");
			$("#fazhengbg").attr("src","css/images/housei-full.jpg");
			imgfull="yes";
			
		}
		else if(imgfull=="yes"){
			$(this).attr("src","css/images/bt-img-def.jpg");
			$("#fazhengbg").attr("src","css/images/housei-def.jpg");
			imgfull="no";
			
		}		
	})
	$("#zhuruanquanshen").click(function(){		
		if(imgfull=="no") {			
			$(this).attr("src","css/images/bt-img-full.jpg");
			$("#zhuruanbg").attr("src","css/images/syuzen-full.jpg");
			imgfull="yes";
			
		}
		else if(imgfull=="yes"){
			$(this).attr("src","css/images/bt-img-def.jpg");
			$("#zhuruanbg").attr("src","css/images/syuzen-def.jpg");
			imgfull="no";
			
		}		
	})
	$("#yujingquanshen").click(function(){		
		if(imgfull=="no") {			
			$(this).attr("src","css/images/bt-img-full.jpg");
			$("#yujinbg").attr("src","css/images/ukin-full.jpg");
			imgfull="yes";
			
		}
		else if(imgfull=="yes"){
			$(this).attr("src","css/images/bt-img-def.jpg");
			$("#yujinbg").attr("src","css/images/ukin-def.jpg");
			imgfull="no";
			
		}		
	})
	$("#chengongquanshen").click(function(){		
		if(imgfull=="no") {			
			$(this).attr("src","css/images/bt-img-full.jpg");
			$("#chengongbg").attr("src","css/images/chinkyu-full.jpg");
			imgfull="yes";
			
		}
		else if(imgfull=="yes"){
			$(this).attr("src","css/images/bt-img-def.jpg");
			$("#chengongbg").attr("src","css/images/chinkyu-def.jpg");
			imgfull="no";
			
		}		
	})


	$("#fazhengnextbtn").click(function(){
		$("#zhuruaninfo").show();
		$("#fazhenginfo").hide();
	})
	$("#zhurannextbtn").click(function(){
		$("#zhuruaninfo").hide();
		$("#yujininfo").show();
	})
	$("#zhuranprebtn").click(function(){
		$("#zhuruaninfo").hide();
		$("#fazhenginfo").show();
	})
	$("#yujin").click(function(){
		$("#yujininfo").show();
		$("#mengban").show();
	})
	$("#yujinprebtn").click(function(){
		$("#yujininfo").hide();
		$("#zhuruaninfo").show();
	})
	$("#chengong").click(function(){
		$("#chengonginfo").show();
		$("#mengban").show();
	})
	$("#chengongprebtn").click(function(){
		$("#chengonginfo").hide();
		$("#yujininfo").show();
	})
	$("#yujinnextbtn").click(function(){
		$("#yujininfo").hide();
		$("#chengonginfo").show();
	})
	$(".sb-nav-close").click(function(){
		$("#mengban").hide();
		$("#fazhenginfo").hide();
		$("#zhuruaninfo").hide();
		$("#yujininfo").hide();
		$("#chengonginfo").hide();
	})

	$(".normal").mouseover(function(){
		$(this).css("background-position","0 -102px");
	})
	$(".normal").mouseout(function(){
		$(this).css("background-position","0 0");
	})
	$(".sp").mouseover(function(){
		$(this).css("background-position","0 -59px");
	})
	$(".sp").mouseout(function(){
		$(this).css("background-position","0 0");
	})
	var wflags;
	$(".normal").click(function(){
		 wflags=$(this).attr("wflag");
		$("#wujiang"+wflags).show();
		$("#mengban").show();
	})
	$(".sp").click(function(){
		 wflags=$(this).attr("wflag");
		$("#wujiang"+wflags).show();
		$("#mengban").show();
	})
	var nflags;
	$(".wjquanshenbtn").click(function(){
		nflag=$(this).attr("nflag");
		if(imgfull=="no") {			
			$(this).attr("src","css/images/bt-img-full.jpg");
		$("#" + nflag +"bg").attr("src","css/images/" + nflag +"-full.jpg");
			imgfull="yes";
			
		}
		else if(imgfull=="yes"){
			$(this).attr("src","css/images/bt-img-def.jpg");
			$("#" + nflag +"bg").attr("src","css/images/" + nflag +"-def.jpg");
			imgfull="no";			
		}		
	})
	var wjflag;
	$(".sb-nav-next").click(function(){
		wjflag=$(this).attr("wjflag");
		var wjflagnext=parseInt(wjflag)+1;
		$("#wujiang"+wjflagnext).show();
		$("#wujiang"+wjflag).hide();
	})
	var wjflagpre;
	$(".sb-nav-previous").click(function(){
		wjflagpre=$(this).attr("wjflag");
		var wjflagp=parseInt(wjflagpre)-1;
		$("#wujiang"+wjflagp).show();
		$("#wujiang"+wjflagpre).hide();
	})

	$("#submenu a").click(function(){
		$("#submenu a").css("background-position","50% 0px");
		$(this).css("background-position","50% -35px");
		$(".sum7wujiang").hide();
		var smflags= $(this).attr("smflag");
		$("#"+smflags).show();
	})
}
