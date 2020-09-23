// Mouse Hovers over Function
function mouseOver(){
	document.getElementById("result").innerHTML = "You are in the circle.";
}

// Mouse Leaves the Circle
function mouseOut(){
	document.getElementById("result").innerHTML = "You are outside of the circle.";
}

// Clicking on the Circle - Background Gray
function clickIt(){
	document.getElementById("circle").style.background = "grey";
}

// dbClicking o t Circle - Background Blue
function dbClick(){
	document.getElementById("circle").style.background = "blue";
}

//SetUp for Output
//MouseOver
document.getElementById("circle").addEventListener("mouseover", mouseOver , false);
//MouseOut
document.getElementById("circle").addEventListener("mouseout", mouseOut , false);
//Click
document.getElementById("circle").addEventListener("click", clickIt , false);
//dblClick
document.getElementById("circle").addEventListener("dblclick",dbClick , false);




