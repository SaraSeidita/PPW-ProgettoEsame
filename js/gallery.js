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

function gestoreAvanti () {
	try {
		if (!automatico) {
			cambiaFoto(+1);
		}
	} catch ( e ) {
		alert("gestoreAvanti " + e);
	}
}

function gestoreIndietro () {
	try {
		if (!automatico) {
			cambiaFoto(-1);
		}
	} catch ( e ) {
		alert("gestoreIndietro " + e);
	}
}

function cambiaFoto (x) {
	indiceFoto += x;
	if (indiceFoto == numeroFoto) {
		indiceFoto = 0;
	}
	if (indiceFoto < 0) {
		indiceFoto = numeroFoto -1;
	}
	nodoFoto.setAttribute("src", galleria[indiceFoto]);
}

function gestoreStartStop () {
	try {
		if (automatico) {
			nodoStartStop.value = "start";
			automatico = false;
		} else {
			nodoStartStop.value = "stop";
			automatico = true;
			cambiaFotoInAutomatico();
		}
	} catch ( e ) {
		alert("gestoreStartStop " + e);
	}
}


function cambiaFotoInAutomatico () {
	try {
		if (automatico) {
			cambiaFoto(+1);
			setTimeout(cambiaFotoInAutomatico, NFOTO);
		}
	} catch ( e ) {
		alert("cambiaFotoInAutomatico " + e);
	}
}


const NFOTO = 2000;
var indiceFoto;
var numeroFoto;
var automatico;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;
var nodoStartStop;

function gestoreLoad () {
	try {
		
		//menu
		nodoMenu = document.getElementById("menu");
		nodoApri = document.getElementById("btn");
		nodoChiudi = document.getElementById("chiudi");
		
		nodoApri.onclick = gestoreApriMenu;
		nodoChiudi.onclick = gestoreChiudiMenu;
		
		//gallery 
		nodoAvanti = document.getElementById("avanti");
		nodoIndietro = document.getElementById("indietro");		
		nodoStartStop = document.getElementById("startStop");
		nodoFoto = document.getElementById("foto");
		
		nodoAvanti.onclick = gestoreAvanti;
		nodoIndietro.onclick = gestoreIndietro;
		nodoStartStop.onclick = gestoreStartStop;
		
		nodoStartStop.value = "stop";
		
		numeroFoto = galleria.length;
		automatico = true;
		cambiaFotoInAutomatico();
		indiceFoto = 0;
		cambiaFoto(0);
		
	} catch ( e ) {
		alert("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;

var galleria = [
	"./img/giappone1.jpg",
	"./img/giappone2.jpg",
	"./img/giappone3.jpg",
	"./img/giappone4.jpg",
	"./img/giappone5.jpg",
	"./img/giappone7.jpg",
	"./img/giappone6.jpg"
	]
	
	
		






