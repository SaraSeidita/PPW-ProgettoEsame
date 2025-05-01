function gestoreApriMenu () {
	try {
		nodoMenu.style.width = "30%";
	} catch ( e ) {
		alert("gestoreApriMenu " + e);
	}
}

function gestoreChiudiMenu () {
	try {
		nodoMenu.style.width = "0";
	} catch ( e ) {
		alert("gestoreChiudiMenu " + e);
	}
}

var nodoMenu;
var nodoApri;
var nodoChiudi;

function gestoreLoad () {
	try {
		nodoMenu = document.getElementById("menu");
		nodoApri = document.getElementById("btn");
		nodoChiudi = document.getElementById("chiudi");
		
		nodoApri.onclick = gestoreApriMenu;
		nodoChiudi.onclick = gestoreChiudiMenu;
	
	} catch ( e ) {
		alert("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;


		






