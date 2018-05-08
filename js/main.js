$(document).ready(function() {
	$(".sec").click(function() {
		$("#xiaLa").css({"transform":"rotate(90deg)"});
		
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