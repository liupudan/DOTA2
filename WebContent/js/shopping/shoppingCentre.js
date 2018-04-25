//$("document").ready(function(){
//
//});
//轮播
window.onload = function(){
		var imgChange = document.getElementsByName("imgChange");
	var liChange = document.getElementsByName("liChange");
	var num;
	var idx = 0;
	liChange[0].onmouseover = function(){
		num = 0;
		moveChange();
		idx = num;
	}
	liChange[1].onmouseover = function(){
		num = 1;
		moveChange();
		idx = num;
	}
	liChange[2].onmouseover = function(){
		num = 2;
		moveChange();
		idx = num;
	}
	liChange[3].onmouseover = function(){
		num = 3;
		moveChange();
		idx = num;
	}
	function moveChange(){
		for(var i=0;i<imgChange.length;i++){			
			if(i == num){
				imgChange[i].style.opacity = "1";
				liChange[i].style.backgroundColor = "#f85535";
			}else{
				imgChange[i].style.opacity = "0";
				liChange[i].style.backgroundColor = "";
			}
			
		}
	}
	var imgChangeDiv = document.getElementById("imgChangeDiv");
	var setChange = setInterval(setChangeFun,3000);	
	function setChangeFun(){
		idx++;
		if(idx >= imgChange.length){
			idx = 0;
		}
		for(var i=0;i<imgChange.length;i++){			
			if(i == idx){
				imgChange[i].style.opacity = "1";
				liChange[i].style.backgroundColor = "#f85535";
			}else{
				imgChange[i].style.opacity = "0";
				liChange[i].style.backgroundColor = "";
			}				
		
		}
	}
	
	imgChangeDiv.onmouseover = function(){
		clearInterval(setChange);
	}
	imgChangeDiv.onmouseout = function(){
		setChange = setInterval(setChangeFun,3000);
	}
	//登录窗口弹窗
	var login_box = document.getElementById("login_box");
	var login_shut = document.getElementById("login_shut");
	var login_up = document.getElementById("login_up");

	login_up.onclick = function(){
		login_box.style.display = "block";
	}
	login_shut.onclick = function(){
		login_box.style.display = "none";
	}	

//导航条切换
	var shop_nav_a = document.getElementsByClassName("shop_nav_a");
	var shop_nav_div = document.getElementById("shop_nav_div");
	var a = (shop_nav_div.childNodes);
	//a[1].className = "on";
	//alert(a[1].className);
//alert(shop_nav_a.length);
	var numa;
	a[0].mouseup = function(){
		numa = 0;
		navChange()
	}
	a[1].onclick = function(){
		numa = 1;
		navChange()
	}
	a[2].onclick = function(){
		numa = 2;
		navChange()
	}
	a[3].onclick = function(){
		numa = 3;
		navChange()
	}
	a[4].onclick = function(){
		numa = 4;
		navChange()
	}
	a[5].onclick = function(){
		numa = 5;
		navChange()
	}
	a[6].onclick = function(){
		numa = 6;
		navChange()
	}
	function navChange(){
		for(var i=0;i<a.length;i++){			
			if(i == numa){
				a[i].style.borderBottomColor = "#f85535";
				a[i].style.color = "#f85535";
//				a[i].className = "on";
			}else{
				a[i].style.borderBottomColor = "";
				a[i].style.color = "";
//				a[i].className = "";
			}	
		}
	}
	
	var dota2 = document.getElementById("dota2");
	var classify = document.getELementById("classify");
	
	dota2.onclick = function(){
		classify.style.Display = "none";
	}
	
}


	

