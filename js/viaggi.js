// menu 

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


//Sezione viaggi
function inizializza () {
	for (var foto in tabella) {
		nodoTesto = document.getElementById(tabella[foto]);
		nodoTesto.setAttribute('style', 'display : none');
		
		modificaVisibilita(tabella[foto], 'none');
	}
}
function modificaVisibilita ( idFoto, visibilita) {
	nodoTesto = document.getElementById (idFoto);
	nodoTesto.setAttribute('style', 'display :' + visibilita);
}
function gestoreFoto () {

	try {
		inizializza();
		modificaVisibilita(this.id, 'display : none');
		nodoTesto = document.getElementById(tabella[this.id]);
		nodoTesto.setAttribute('style', 'display : display');
	} catch (e) {
		alert ('gestoreFoto ' + e);
	}
}

var nodoInverno;
var nodoPrimavera;
var nodoEstate;
var nodoAutunno;
var nodoTesto;
var tabella;


function gestoreLoad () {
   try {
	   
		// menu 
		nodoMenu = document.getElementById("menu");
		nodoApri = document.getElementById("btn");
		nodoChiudi = document.getElementById("chiudi");
		
		nodoApri.onclick = gestoreApriMenu;
		nodoChiudi.onclick = gestoreChiudiMenu;
		
	    //sezione viaggi
		nodoInverno = document.getElementById("inverno");
		nodoPrimavera = document.getElementById("primavera");
		nodoEstate = document.getElementById("estate");
		nodoAutunno = document.getElementById("autunno");	
		nodoInverno.onclick = gestoreFoto;
		nodoPrimavera.onclick = gestoreFoto;
		nodoEstate.onclick = gestoreFoto;
		nodoAutunno.onclick = gestoreFoto;
		
		tabella = {
			inverno : "txt1",
			primavera : "txt2",
			estate : "txt3",
			autunno : "txt4"
		}
		inizializza();
		
	    
   } catch (e) {
        alert("gestoreLoad " + e);
   }
}
window.onload = gestoreLoad;