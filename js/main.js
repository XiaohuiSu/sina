$(document).ready(function() {
	$(".sec").click(function() {
		$("#xiaLa").css({"transform":"rotate(90deg)"});
		
	});
});

$(window).load(function() {
	var t=new XMLHttpRequest,
			 	obj;
			t.onreadystatechange=function() {
				if(t.readyState==4&&t.status==200)
				{
					obj=JSON.parse(this.responseText);
					alert(obj);
				}
			}
			t.open("POST","http://172.17.164.36:8080/blog/View.do",true);
			t.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			t.send("page=Bingo");
// 	$.ajax({
// 				type:"post",
// 				url:"http://172.17.164.36:8080/blog/View.do",
// 				data: {
// 					page: 1
// 				},
// 				dataType: "json",
// 				success: function(msg) {
// 					alert(msg[0].id);
// 				}
// 			});
	
});

$("#myInput").bind('input propertychange',function() {
	var text = $("#myInput").val();
	if(!text) {
		document.querySelector("#myFa").style.disabled = "disabled"
	}
	else {
		document.querySelector("#myFa").removeAttribute("disabled");
	}
});



// document.querySelector("#myInput").onchange = function() {
// 	console.log("Bingo");
// 	document.querySelector("#myFa").removeAttribute("disabled");
// }