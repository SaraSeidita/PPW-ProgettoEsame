//Menu

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

//Quiz


function nuovoQuiz () {
    numeroDomandaCorrente = 0;
    aggiornaDomanda(numeroDomandaCorrente);
    scriviMessaggio(nodoRisultato, "");
    risposteDate = [];
}

function aggiornaDomanda (i) {
    scriviMessaggio(nodoNumeroDomanda,"Domanda " + (i + 1) + " di " + numeroDomande);
    var parte = quiz[i];
    scriviMessaggio(nodoTestoDomanda, parte.domanda)
    scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
    scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
    scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
    scriviMessaggio(nodoTestoRisposta3, parte.risposte[3]);
    nodoRisposta0.checked = false;
    nodoRisposta1.checked = false;
    nodoRisposta2.checked = false;
    nodoRisposta3.checked = false;
}

function scriviMessaggio (nodo, messaggio) {
    var nodoTesto = document.createTextNode(messaggio);
    if (nodo.childNodes.length == 0) {
        nodo.appendChild(nodoTesto);
    } else {
    nodo.replaceChild(nodoTesto, nodo.firstChild);
    }
}

function gestoreClickAvanti () {
    try {
        if (numeroDomandaCorrente == numeroDomande) {
            return;
        }
        if (nodoRisposta0.checked) {
            risposteDate[numeroDomandaCorrente] = 0;
        }  else if (nodoRisposta1.checked) {
            risposteDate[numeroDomandaCorrente] = 1;
        }  else if (nodoRisposta2.checked) {
            risposteDate[numeroDomandaCorrente] = 2;
        }  else if (nodoRisposta3.checked) {
            risposteDate[numeroDomandaCorrente] = 3;
        }  else {
            risposteDate[numeroDomandaCorrente] = -1;
        }
        numeroDomandaCorrente++;
        if (numeroDomandaCorrente == numeroDomande) {
            var esito = calcolaEsito();
            var s;
            if (esito == 0){
                s = "0 risposte esatte su " + numeroDomande+ "! "  +  "Sicuro di voler venire in Giappone?";
            } else if (esito == 1){
                s = "1 risposta esatta su " + numeroDomande + "! " + "Meh..";
            } else if (esito == 2){
                s = "2 risposte esatte su " +numeroDomande + "! " + "Ne sai abbastanza, dai";
            } else if (esito == 3){
                s = "3 risposte esatte su " +numeroDomande+ "! " + "Sei quasi pronto per venire in Giappone!";
            } else if (esito == 4){
                s = "4 risposte esatte su " + numeroDomande+ "! " + "Ma sei un esperto del Giappone!";
            } 
            scriviMessaggio(nodoRisultato, s);
        }  else {
            aggiornaDomanda(numeroDomandaCorrente);
        }
    }  catch ( e ) {
        alert ("gestoreClickAvanti " + e);
    }
}

function calcolaEsito () {
    var numeroRisposteEsatte = 0;
    for (var i = 0; i < quiz.length; i++) {
        var parte = quiz[i];
        if (parte.rispostaEsatta == risposteDate[i]) {
            numeroRisposteEsatte++;
        }
    }
    return numeroRisposteEsatte;
}

function gestoreClickInizia () {
try {
    nuovoQuiz();
    } catch ( e ) {
        alert ("gestoreClickInizia " + e);
    }
}


var nodoNumeroDomanda;
var nodoTestoDomanda;
var nodoRisposta0;
var nodoTestoRisposta0;
var nodoRisposta1;
var nodoTestoRisposta1;
var nodoRisposta2;
var nodoTestoRisposta2;
var nodoRisposta3;
var nodoTestoRisposta3
var nodoAvanti;
var nodoRisultato;
var nodoInizia;
var numeroDomande;
var numeroDomandaCorrente;
var risposteDate;

function gestoreLoad () {
    try {
		
		//menu
		nodoMenu = document.getElementById("menu");
		nodoApri = document.getElementById("btn");
		nodoChiudi = document.getElementById("chiudi");
		
		nodoApri.onclick = gestoreApriMenu;
		nodoChiudi.onclick = gestoreChiudiMenu;
		
		//quiz
        nodoNumeroDomanda = document.getElementById("numeroDomandaCorrente");
        nodoTestoDomanda = document.getElementById("testoDomandaCorrente");
        nodoRisposta0 = document.getElementById("risposta0");
        nodoTestoRisposta0 = document.getElementById("testoRisposta0");
        nodoRisposta1 = document.getElementById("risposta1");
        nodoTestoRisposta1 = document.getElementById("testoRisposta1");
        nodoRisposta2 = document.getElementById("risposta2");
        nodoTestoRisposta2 = document.getElementById("testoRisposta2");
        nodoRisposta3 = document.getElementById("risposta3")
        nodoTestoRisposta3 = document.getElementById ("testoRisposta3");
        nodoAvanti = document.getElementById("avantiquiz");
        nodoRisultato = document.getElementById("risultato");
        nodoInizia = document.getElementById("inizia");
        nodoAvanti.onclick = gestoreClickAvanti;
        nodoInizia.onclick = gestoreClickInizia;
        numeroDomande = quiz.length;
        nuovoQuiz();
    }  catch ( e ) {
        alert ("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;


var quiz = [
	{  // domanda 1
		domanda: "Quale di questi piatti NON è Giapponese?",
		risposte:
			[
				"sushi",
				"ramen",
				"pizza",
				"takoyaki"
			],
		rispostaEsatta: 2
	},
	{  // domanda 1
		domanda: "Dove si trova il tempio d'oro (Kinkakuji)?",
		risposte:
			[
				"Kyoto",
				"Nara",
				"Tokyo",
				"Osaka"
			],
		rispostaEsatta: 0
	},
	{  // domanda 2
		domanda: "Nasce prima l'Era Tokugawa o il periodo Meiji?",
		risposte:
			[
				"Nascono insieme",
				"L'era Tokugawa",
				"periodo Meiji",
				"passo.."
			],
		rispostaEsatta: 1
	},
	{  // domanda 3
		domanda: "A Nara esiste un parco famoso e particolare, quale?",
		risposte:
			[
				"Parco di Ueno",
				"Passo..",
				"Parco dei Conigli",
				"Parco dei Cervi"
			],
		rispostaEsatta: 3
	}
];
