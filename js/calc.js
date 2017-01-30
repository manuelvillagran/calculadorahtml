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

/*
function cero() {
	var pera = document.getElementById('res').value
		if pera =! ""
			pera = pera + "0"
		else 
			pera = ""
		document.getElementById('res').value = pera;
//aca tengo el problema!
}
*/

function borrar() {
	var element = document.getElementById("res");
	element.parentNode.removeChild(element);
	document.getElementById('res').value = "";
}
/*
function punto() {
	var puntito = document.getElementById("res");
	if puntito != ""
			puntito = puntito + "0"
		else 
			puntito = ""
		document.getElementById('res').value = puntito;
}

*/




