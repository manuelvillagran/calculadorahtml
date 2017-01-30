function boton1() {
   
    //<input type="text" name="res" id="res" value="" class="calc-display-input" onfocus="this.blur()">

    var valor_de_antes = document.getElementById('res').value;
    	//alert(valor_de_antes);
    valor_de_antes = valor_de_antes + '1';
		//alert(valor_de_antes);

    document.getElementById('res').value = valor_de_antes;
}

function boton2() {
	var valor_anterior = document.getElementById('res').value
	valor_anterior = valor_anterior + '2';
	    document.getElementById('res').value = valor_anterior;
}


function boton3() {
	var valor_antes = document.getElementById('res').value
	valor_antes = valor_antes + '3';
	 document.getElementById('res').value = valor_antes;
}


function calculo4() {
	var valor = document.getElementById('res').value
	valor = valor + '4';
	 document.getElementById('res').value = valor;
}

function calculo5() {
	var numero = document.getElementById('res').value
	numero = numero + '5'
	document.getElementById('res').value = numero;
}

function calculo6() {
	var num = document.getElementById('res').value
	num = num + '6';
	document.getElementById('res').value = num;
}

function valor7() {
	var var7 = document.getElementById('res').value
	var7 = var7 + '7';
	document.getElementById('res').value = var7;
}
function valor8	() {
	var var8 = document.getElementById('res').value
	var8 = var8 + '8';
	document.getElementById('res').value = var8;
}
function valor9() {
	var number = document.getElementById('res').value
	number = number + '9';
	document.getElementById('res').value = number;
}

function cero() {
	var pera = document.getElementById('res').value
		if (pera != "")
			pera = pera + "0"
		else 
			pera = ""
		document.getElementById('res').value = pera;
//aca tengo el problema!
}

function borrar() {
	document.getElementById('res').value = "";
}
function punto() {
	var caracter = document.getElementById('res').value;	
	caracter2 = caracter.length+1
	caracter3 = caracter.charAt(caracter2)
		if (caracter3 == ".") {
			caracter3 = caracter}
		else 
			{caracter = caracter + "." }
	document.getElementById('res').value = caracter;
}
	/*
	/*var display = document.getElementById("res").value;*/
	/*
	var puntito = document.getElementById("res").value;
	if (puntito != "")
			puntito = puntito + "."
		else 
			puntito = ""
		document.getElementById('res').value = puntito;
		*/

	/*document.getElementById("text").value = display.charAt(0);
	for (var i = 0      ;         i < display.length       ;       i =  i + 1) {
		var caracter = display.charAt(i);	
		if (caracter == "5") {
			alert('encontre un 5 en la posicion ' + i + '. en una cadena de ' +display.length + 'de largo' );
		}

	}*/

	//document.getElementById('res').value = eval(display);
	/**
	que soporta eval
	2+4
	1-6
	2*5
	10/3
	10.5+1.9
	10+-7

	*/

	/*
ayuda camilo
cadena.length dice que tan larga es la cadena
cadena.charAt(0) nos entrega el primer caracter de la cadena
cadena.charAt(1) nos entrega el segundo caracter de la cadena
cadena.charAt(3) nos entrega el tercero caracter de la cadena	*/

function suma() {
	var number = document.getElementById('res').value;
	document.getElementById('res').value = number + '+';
}

function resta() {
	var restar = document.getElementById('res').value;
	document.getElementById('res').value = restar + '-';
}

function multiplicacion() {
	var producto = document.getElementById('res').value;
	document.getElementById('res').value = producto + '*';
}

function division () {
	var dividir = document.getElementById('res').value;
	document.getElementById('res').value = dividir + '/';
}





