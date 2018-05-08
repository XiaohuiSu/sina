var Zhong = {
	myDian: 1
};

$(document).ready(function() {
	$(".sec").click(function() {
		var t=new XMLHttpRequest,
   				obj;
   			t.onreadystatechange=function() {
   				if(t.readyState==4&&t.status==200)
   				{
   					obj=JSON.parse(this.responseText);
   					
   					
   				}
   			}
   			t.open("GET","http://172.17.164.36:8080/blog/Fwl.do",true);
   			t.send();
		
		
		if(Zhong.myDian === 1)
		{
			$("#xiaLa").css({"transform":"rotate(90deg)"});
			Zhong.myDian = 0;
			
		}
		else 
		{
			$("#xiaLa").css({"transform":"rotate(0deg)"});
			Zhong.myDian = 1;
			
		}
		
		
		
	});
	

});




document.querySelector(".ye input").onchange = function() {
			var c = document.querySelector('.ye input');
	   		var t=new XMLHttpRequest,
   				obj;
   			t.onreadystatechange=function() {
   				if(t.readyState==4&&t.status==200)
   				{
   					obj=JSON.parse(this.responseText);
   					
   					var name = document.querySelectorAll(".name");
   					var time = document.querySelectorAll(".time");
   					var content = document.querySelectorAll(".remen-inner p");
   					var zhuan = document.querySelectorAll(".zhuan");
   					var ping = document.querySelectorAll(".ping");
   					var dian = document.querySelectorAll(".dian");
   					
   					for(var i=0; i<10; ++i) {
   						name[i].innerHTML = obj[i].nickName;
   						time[i].innerHTML = obj[i].createTime;
   						content[i].innerHTML = obj[i].content;
   						zhuan[i].innerHTML = obj[i].repostCount;
   						ping[i].innerHTML = obj[i].commentCount;
   						dian[i].innerHTML = obj[i].upvoteCount;
   						
   					}
   					
   				}
   			}
   			t.open("POST","http://172.17.164.36:8080/blog/View.do",true);
   			t.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   			t.send("page="+c.value);
	
	
};


   window.onload = function() {
   		var t=new XMLHttpRequest,
   				obj;
   			t.onreadystatechange=function() {
   				if(t.readyState==4&&t.status==200)
   				{
   					obj=JSON.parse(this.responseText);
   					
   					var name = document.querySelectorAll(".name");
   					var time = document.querySelectorAll(".time");
   					var content = document.querySelectorAll(".remen-inner p");
   					var zhuan = document.querySelectorAll(".zhuan");
   					var ping = document.querySelectorAll(".ping");
   					var dian = document.querySelectorAll(".dian");
   					
   					for(var i=0; i<10; ++i) {
   						name[i].innerHTML = obj[i].nickName;
   						time[i].innerHTML = obj[i].createTime;
   						content[i].innerHTML = obj[i].content;
   						zhuan[i].innerHTML = obj[i].repostCount;
   						ping[i].innerHTML = obj[i].commentCount;
   						dian[i].innerHTML = obj[i].upvoteCount;
   						
   					}
   					
   				}
   			}
   			t.open("POST","http://172.17.164.36:8080/blog/View.do",true);
   			t.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   			t.send("page=1");
   }
// 

		$("#myInput").bind('input propertychange',function() {
	var text = $("#myInput").val();
	if(!text) {
		document.querySelector("#myFa").style.disabled = "disabled"
	}
	else {
		document.querySelector("#myFa").removeAttribute("disabled");
	}
});
		document.querySelector("#myFa").onclick = function() {
			var c = document.querySelector("#myInput");
	   		var t=new XMLHttpRequest,
   				obj;
   			t.onreadystatechange=function() {
   				if(t.readyState==4&&t.status==200)
   				{
   					obj=JSON.parse(this.responseText);

   				}
   			}
   			t.open("POST","http://172.17.164.36:8080/blog/Pub.do",true);
   			t.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   			t.send("content="+c.value);
   			
   			document.querySelector("#myInput").value = '';
   			document.querySelector("#faSuccess").style["animation-name"] = "zoom";
   			
	
};

