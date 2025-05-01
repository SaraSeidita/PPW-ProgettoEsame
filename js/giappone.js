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

//gestori sezione Giappone

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
	} catch ( e ) {
		alert ('gestoreFoto' + e);
	}
}

var nodoStoria;
var nodoCibo;
var nodoLuoghi;
var nodoTesto;
var tabella;


function gestoreLoad () {
   try {
	   
		//menu
		
		nodoMenu = document.getElementById("menu");
		nodoApri = document.getElementById("btn");
		nodoChiudi = document.getElementById("chiudi");
		
		nodoApri.onclick = gestoreApriMenu;
		nodoChiudi.onclick = gestoreChiudiMenu;
		
		
		//gestoreFoto 
		nodoStoria = document.getElementById("storia");
		nodoCibo = document.getElementById("cibo");
		nodoLuoghi = document.getElementById("luoghi");
		
		nodoStoria.onclick = gestoreFoto;
		nodoCibo.onclick = gestoreFoto;
		nodoLuoghi.onclick = gestoreFoto;
		
		tabella = {
			storia : "testo1",
			cibo : "testo2",
			luoghi : "testo3"
		}
		inizializza();
		
		
	
     
   } catch ( e ) {
        alert("gestoreLoad " + e);
   }
}

window.onload = gestoreLoad;



	
	



