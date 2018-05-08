$(document).ready(function() {
	$(".sec").click(function() {
		$("#xiaLa").css({"transform":"rotate(90deg)"});
		
	});
});

$(window).load(function() {
	$.ajax({
				type:"post",
				url:"http://172.17.164.36:8080/blog/View.do",
				data: {
					page: 1
				}
				dataType: "json"
				success: function(msg) {
					alert(msg.id);
				}
			});
	
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