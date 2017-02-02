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
	var cadena = document.getElementById('res').value;	
	var largo_de_la_cadena = cadena.length;


	//display = 350;
	//i = 0
	//largo_de_la_cadena =  3
	/*
	primera iteracion: i = 0  largo_de_la_cadena = 3
		0<=3
	primera iteracion: i = 1  largo_de_la_cadena = 3
		1<=3
	primera iteracion: i = 2  largo_de_la_cadena = 3
		2<=3
	primera iteracion: i = 3  largo_de_la_cadena = 3
		3<=3


	*/



/*
paso 1 : guardar valor real del display
paso 2 : recorrer display uno a uno, y ver si tiene un punto!!!!
paso 3 : escribir el punto en el display, solo enc aso que el paso 2 no encuentre punto
*/
	var cantidad_de_pntos = 0;
	for (var i = 0; i <=largo_de_la_cadena-1; i++) {
		if (cadena.charAt(i) == '.') {
			cantidad_de_pntos = cantidad_de_pntos + 1;
		} 
	}
	if (cantidad_de_pntos > 0){
		document.getElementById('res').value = cadena;
	}
	else { 
		document.getElementById('res').value = cadena + ".";
	}



/* cambiar todos los 4 rpo la letra a */

//	var nueva_cadena_temporal = document.getElementById('res').value.replace('4', 'A'); IMPORTANTE

}


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
		*/
	function canCalculate() {
    		var display = document.getElementById('res').value;
   			var lastValue = display.charAt(display.length - 1);
    		if (lastValue == '+' || lastValue == '-' || lastValue == '/' || lastValue == 'x') {
      		  return false; 
   			 }	
    		return true;
	}

	function igualdad() {
		//var nueva_cadena = document.getElementById('res').value.replace(/x/g, '*');
		   var forward = canCalculate();

    	if (forward) {
			var display = document.getElementById('res').value.replace('x', '*');
			document.getElementById('res').value = eval(display);
		}
	
	}


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
	var cadena = document.getElementById('res').value;	
	var largo_de_la_cadena = cadena.length;
	var cantidad_de_operadores_matematicos = 0;
	for (var i = 0; i <=largo_de_la_cadena-1; i++) {
		if (cadena.charAt(i) == '+') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '-') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '/') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == 'x') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
	}
	if (cantidad_de_operadores_matematicos > 0){
		document.getElementById('res').value = cadena;
	}
	else { 
		document.getElementById('res').value = cadena + "+";
	}
}


function resta() {
	var cadena = document.getElementById('res').value;	
	var largo_de_la_cadena = cadena.length;
	var cantidad_de_operadores_matematicos = 0;
	for (var i = 0; i <=largo_de_la_cadena-1; i++) {
		if (cadena.charAt(i) == '-') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 	
		if (cadena.charAt(i) == '+') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '/') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == 'x') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
	}
	if (cantidad_de_operadores_matematicos > 0){
		document.getElementById('res').value = cadena;
	}
	else { 
		document.getElementById('res').value = cadena + "-";
	}
}

function multiplicacion() {
	var cadena = document.getElementById('res').value;	
	var largo_de_la_cadena = cadena.length;
	var cantidad_de_operadores_matematicos = 0;
	for (var i = 0; i <=largo_de_la_cadena-1; i++) {
		if (cadena.charAt(i) == 'x') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;                                      
		} 
		if (cadena.charAt(i) == '+') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '-') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '/') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
	}
	if (cantidad_de_operadores_matematicos > 0){
		document.getElementById('res').value = cadena;
	}
	else { 
		document.getElementById('res').value = cadena + "x";
	}
}
function division () {
	var cadena = document.getElementById('res').value;	
	var largo_de_la_cadena = cadena.length;
	var cantidad_de_operadores_matematicos = 0;
	for (var i = 0; i <=largo_de_la_cadena-1; i++) {
		if (cadena.charAt(i) == '/') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '+') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == '-') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
		if (cadena.charAt(i) == 'x') {
			cantidad_de_operadores_matematicos = cantidad_de_operadores_matematicos + 1;
		} 
	}
	if (cantidad_de_operadores_matematicos > 0){
		document.getElementById('res').value = cadena;
	}
	else { 
		document.getElementById('res').value = cadena + "/";
	}
}




