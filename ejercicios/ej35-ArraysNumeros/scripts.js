var numeros = new Array(9,53,5,24,1,7);
var numOrdAsc = new Array();
var numOrdDesc = new Array();
var index = 0;
var myWindow;
var inputNum = document.getElementById('inputNum');
var btnAceptar = document.getElementById('btnAceptar');
var btnCancel = document.getElementById('btnCancel');
var alertError = document.getElementById('idAlertError');
var alertSuccess = document.getElementById('idAlertSuccess');
var alertWarning = document.getElementById('idAlertWarning');
var alertInfo = document.getElementById('idAlertInfo');
var divListaOrdenadaAsc = document.getElementById('divListaOrdenadaAsc');
var divListaOrdenadaDesc = document.getElementById('divListaOrdenadaDesc');
var divList = document.getElementById('divList');
var divListNumeros = document.getElementById('divListNumeros');
var accion = '';

var elements = new Array(
	'inputNum',
	'btnFirst',
	'btnPrev',
	'btnNext',
	'btnLast',
	'btnNew',
	'btnDel',
	'btnEdit',
	'btnList',
);

var disableElements = new Array();
disableElements['new'] = new Array('btnNew','btnEdit', 'btnDel', 'btnFirst', 'btnPrev', 'btnNext', 'btnLast');
disableElements['edit'] = new Array('btnNew','btnEdit', 'btnDel', 'btnFirst', 'btnPrev', 'btnNext', 'btnLast');
disableElements['del'] = new Array('btnNew','btnEdit', 'btnDel', 'btnFirst', 'btnPrev', 'btnNext', 'btnLast');

function inicializar(){
	btnAceptar.style.display = 'none';
	btnCancel.style.display = 'none';
	alertError.style.display = 'none';
	alertSuccess.style.display = 'none';
	alertWarning.style.display = 'none';
	alertInfo.style.display = 'none';
	divList.style.display = 'block';
	inputNum.value = numeros[index];
}

function recorrerArray(tipo) {
	switch(tipo) {
		case 'first':
			index = 0;
		break;
		case 'prev':
			if(index == 0) {
				index = numeros.length-1;
			} else {
				index--;
			}
		break;
		case 'next':
			if(index == numeros.length-1) {
				index = 0;
			} else {
				index++;
			}
		break;
		case 'last':
			index = numeros.length-1;
		break;
	}
	inputNum.value = numeros[index];
}

function showAll() {
	//console.log(value);
	elements.forEach((value)=>{
		document.getElementById(value).disabled = false;
	});
	inicializar();
}

function hideElements(tipo) {
	//console.log(value);
	disableElements[tipo].forEach((value)=>{
		document.getElementById(value).disabled = true;
	});
}

function setEscenario(tipo){
	showAll();
	hideElements(tipo);
	btnCancel.style.display = 'inline';
	btnAceptar.style.display = 'inline';

	if(tipo == 'new') {
		inputNum.value = '';
		inputNum.removeAttribute('readonly');
	}

	if(tipo == 'edit') {
		inputNum.removeAttribute('readonly');
	}

	if(tipo == 'del') {
		inputNum.setAttribute('readonly','readonly');
	}
}

function setAccion(tipo){
	accion = tipo;

	setEscenario(tipo);

	//informamos;
	setAlertInfo();
}

function cancel(){
	showAll();
}

function comprobarNumero(){
	var res = false;
	var prohibido = 'abcdefghijklmnopqrstuvxwçáéíóú ';
	//console.log(inputNum.value);
	if( prohibido.indexOf(inputNum.value) == -1 )  {
		res = true;
	}

	return res;
}

function setAlertInfo(){
	switch(accion){
		case 'new':
			alertInfo.innerHTML = 'Introduce un número';
			break;

		case 'edit':
			alertInfo.innerHTML = 'Estas modificando el número: ' + numeros[index];
			break;

		case 'del':
			alertInfo.innerHTML = 'Estas eliminado el número: ' + numeros[index];
			break;
	}
	alertInfo.style.display = 'block';
	alertError.style.display = 'none';
	alertSuccess.style.display = 'none';
	alertWarning.style.display = 'none';
	console.log(alertInfo);
}

function setAlertError(mensaje){
	alertError.innerHTML = mensaje;
	alertError.style.display = 'block';
	alertSuccess.style.display = 'none';
	alertWarning.style.display = 'none';
	alertInfo.style.display = 'none';
}

function setAlertSuccess(mensaje){
	alertSuccess.innerHTML = mensaje;
	alertSuccess.style.display = 'block';
	alertError.style.display = 'none';
	alertWarning.style.display = 'none';
	alertInfo.style.display = 'none';
}

function setAlertWarning(mensaje){
	document.getElementById('mensajeConfirm').innerHTML = mensaje;
	alertWarning.style.display = 'block';
}

function confirmCancel(){
	alertWarning.style.display = 'none';
}

function checkIndex(){
	if(index == numLength-1) {
		index = 0;
	}
	if(index == 0) {
		index = numeros.length-1;
	}
}

function confirm(){
	switch(accion){
		case 'del':
			var numLength = numeros.length;
			numeros.splice(index, 1);
			setAlertSuccess('Muy bien, número eliminado correctamente');
			checkIndex();
			inputNum.value = numeros[index];
			list();
			break;

		case 'edit':
			if(!isNaN(inputNum.value)) {
				numeros[index] = parseInt(inputNum.value);
				setAlertSuccess('Muy bien, número modificado correctamente');
				list();
			} else {
				// alert no es numero
				setAlertError('Hay que introducir un número');
			}
			break;
	}
}


function aceptar(){
	//console.log(accion);
	switch(accion){
		case 'new':
			if(!isNaN(inputNum.value)) {
				numeros.push(parseInt(inputNum.value));
				setAlertSuccess('Muy bien, número insertado correctamente');
				inputNum.value='';
				list();
			} else {
				// alert no es numero
				setAlertError('Hay que introducir un número');
			}
			break;
		case 'edit':
			//pedir confirmación
			setAlertWarning('¿Estás seguro de modificar el número '+ numeros[index]+' ?');
			break;
		case 'del':
			//pedir confirmación
			setAlertWarning('¿Estás seguro de eliminar el número '+ numeros[index]+' ?');
			break;
	}
}

function compareAsc(first, second) {
 if (first == second)
 	return 0;
 if (first < second)
 	return -1;
 else
 	return 1;
}

function compareDesc(first, second) {
 if (first == second)
 	return 0;
 if (first < second)
 	return +1;
 else
 	return -1;
}

function list(){
	var cadena = '';

	numeros.forEach((value,index,ar)=>{
		numOrdAsc.push(value);
		numOrdDesc.push(value);
		if(index == ar.length-1) {
			cadena += value;
		} else {
			cadena += value + ', ';
		}
	});

	divListaNumeros.innerHTML = cadena;

	cadena = '';

	numOrdAsc.sort(compareAsc);
	numOrdAsc.forEach((value,index,ar)=>{
		if(index == ar.length-1) {
			cadena += value;
		} else {
			cadena += value + ', ';
		}
	});

	divListaOrdenadaAsc.innerHTML = cadena;

	numOrdDesc.sort(compareDesc);
	cadena = '';
	numOrdDesc.forEach((value,index,ar)=>{
		if(index == ar.length-1) {
			cadena += value;
		} else {
			cadena += value + ', ';
		}
	});
	divListaOrdenadaDesc.innerHTML = cadena;
}

function verList(){
	if( (typeof(myWindow) == 'undefined') || (myWindow.closed) ) {
		myWindow= window.open("","Nueva Ventana","width=500,height=400,top=100,left=100");

		// Abre la corriente de datos del documento para escribir
		myWindow.document.open();

		// Crea el documento
		myWindow.document.write("<html><head><title>Números Ordenados</title></head><body>");
		myWindow.document.write("<div style=\"text-align:center;\">");
		myWindow.document.write("<h1>Nuestros números</h1>");
		myWindow.document.write("<table border=\"1\" style=\"margin: 0 auto;\" >");
		myWindow.document.write("<tr><th>Num.</th><th>Ord. Asc</th><th>Ord. Desc</th></tr>");
		for (var i = numeros.length - 1; i >= 0; i--) {
			myWindow.document.write("<tr><td>"+numeros[i]+"</td><td>"+numOrdAsc[i]+"</td><td>"+numOrdDesc[i]+"</td></tr>");
		}
		myWindow.document.write("</table>");
		myWindow.document.write('<p><button onClick="window.close()">Cerrar ventana</button>');
		myWindow.document.write("</div></body></html>");

		// cierra la corriente de datos del documento 
		myWindow.document.close();
	} else {
		myWindow.focus();
	}
}

function toggleList(){
	if(divList.style.display == 'block') {
		divList.style.display = 'none';
	} else {
		divList.style.display = 'block';
	}
}

//al iniciar la página
inicializar();
list();

