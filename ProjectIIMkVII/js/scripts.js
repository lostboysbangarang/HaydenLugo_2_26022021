var tryFunky;
$(document).ready(function(){
	$(document).delegate("#lCost", "mouseover", function () {
		$("#lCost").css("background-color", "#DEEBFF")
		$("#lCost .circ").css("background-color", "#0065FC")
		$("#lCost #circIcn").css("color", "#FFFFFF")
	});
	$(document).delegate("#fFriendly", "mouseenter", function () {
		$("#fFriendly").css("background-color", "#DEEBFF")
		$("#fFriendly .circ").css("background-color", "#0065FC")
		$("#fFriendly #circIcn").css("color", "#FFFFFF")
	});
	$(document).delegate("#rom", "mouseenter", function () {
		$("#rom").css("background-color", "#DEEBFF")
		$("#rom .circ").css("background-color", "#0065FC")
		$("#rom #circIcn").css("color", "#FFFFFF")
	});
	$(document).delegate("#pAllow", "mouseenter", function () {
		$("#pAllow").css("background-color", "#DEEBFF")
		$("#pAllow .circ").css("background-color", "#0065FC")
		$("#pAllow #circIcn").css("color", "#FFFFFF")
	});
	
	
	$(document).delegate(".fils", "mouseleave", function () {
		$(".fils").css("background-color", "transparent")
		$(".fils .circ").css("background-color", "#DEEBFF")
		$(".fils #circIcn").css("color", "#0065FC")
	});
	
	
	
});
	function setElms (I,II,III,IV,V, funk) {
		var i = I;
		var ii = II;
		var iii = III;
		var iv = IV;
		var v = V;
		setHightPls(i, ii, iii, iv, v);
		funk();
		
	};
	function setElmsII (I,II,III,IV,V, funk) {
		alert("Yo")
		var i = I;
		var ii = II;
		var iii = III;
		var iv = IV;
		var v = V;
		setHightPls(i, ii, iii, iv, v);
		funk();
	};
	function setHightPls(yum,intH, intW, centi, boars){
		console.log("Uh? centi?: ", centi)
		//alert("step one js");
		var windW = $(window).width();
		var withd = $(yum).width;
		//alert("step two js");
		var ratio = intH/intW;
		console.log("js Id: ", yum);
		console.log("js Window width: ", windW);
		console.log("js percentage of windowspace: ", centi);
		console.log("js centi*WinWidth: ", centi*windW);
		console.log("js starting width: ", withd);
		withd=centi*windW;
		console.log("js boar: ", boar);
		console.log("js boars: ", boars);
		var heigth = ratio * withd * 1.5;
		for (i=0; i<boars.length; i++) {
			if (boars[i]==1) {
				boars[i]= heigth/3.5;
			}
		}
		console.log("js boars: ", boars);
		$(yum).css("border-radius", boars);


		console.log("js ratio: ", ratio);
		console.log("js height to set: ", heigth);
		console.log("Current height js: ", $(yum).height());
		$(yum).css("height", heigth);
		console.log("New height js: ", $(yum).height());

		$(yum).css("width", withd);
		console.log("New width js: ", $(yum).width());

	};
