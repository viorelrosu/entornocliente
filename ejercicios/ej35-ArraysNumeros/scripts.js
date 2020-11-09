var numeros = new Array(9,5,3,7,1);
var index = 0;

var inputNum = document.getElementById('inputNum');
var btnAceptar = document.getElementById('btnAceptar');
var btnCancel = document.getElementById('btnCancel');
var alertError = document.getElementById('idAlertError');
var alertSuccess = document.getElementById('idAlertSuccess');
var alertWarning = document.getElementById('idAlertWarning');
var divListaOrdenadaAsc = document.getElementById('divListaOrdenadaAsc');
var divListaOrdenadaDesc = document.getElementById('divListaOrdenadaDesc');
var divList = document.getElementById('divList');
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
disableElements['new'] = new Array('btnNew','btnEdit', 'btnDel', 'btnList', 'btnFirst', 'btnPrev', 'btnNext', 'btnLast');
disableElements['edit'] = new Array('btnNew','btnEdit', 'btnDel', 'btnList');
disableElements['del'] = new Array('btnNew','btnEdit', 'btnDel', 'btnList');

function inicializar(){
	btnAceptar.style.display = 'none';
	btnCancel.style.display = 'none';
	alertError.style.display = 'none';
	alertSuccess.style.display = 'none';
	alertWarning.style.display = 'none';
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
}

function setAccion(tipo){
	accion = tipo;
	//console.log(tipo);
	setEscenario(tipo);
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

function setAlertError(mensaje){
	alertError.innerHTML = mensaje;
	alertError.style.display = 'block';
	alertSuccess.style.display = 'none';
	alertWarning.style.display = 'none';
}

function setAlertSuccess(mensaje){
	alertSuccess.innerHTML = mensaje;
	alertSuccess.style.display = 'block';
	alertError.style.display = 'none';
	alertWarning.style.display = 'none';
}

function setAlertWarning(){
	document.getElementById('mensajeConfirm').innerHTML = '¿Estás seguro de eliminar el número '+ numeros[index]+' ?'
	alertWarning.style.display = 'block';
}

function confirmCancel(){
	alertWarning.style.display = 'none';
}

function confirm(){
	switch(accion){
		case 'del':
			var numLength = numeros.length;
			numeros.splice(index, 1);
			setAlertSuccess('Muy bien, número eliminado correctamente');
			if(index == numLength-1) {
				index = 0;
			}
			if(index == 0) {
				index = numeros.length-1;
			}
			inputNum.value = numeros[index];
			list();
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
			if(!isNaN(inputNum.value)) {
				numeros[index] = parseInt(inputNum.value);
				setAlertSuccess('Muy bien, número modificado correctamente');
				list();
			} else {
				// alert no es numero
				setAlertError('Hay que introducir un número');
			}
			break;
		case 'del':
			//pedir confirmación
			setAlertWarning();
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
	var numOrdAsc = numeros;
	numOrdAsc.sort(compareAsc);
	numOrdAsc.forEach((value,index,ar)=>{
		if(index == ar.length-1) {
			cadena += value;
		} else {
			cadena += value + ', ';
		}
	});

	divListaOrdenadaAsc.innerHTML = cadena;

	numOrdAsc.sort(compareDesc);
	cadena = '';
	numOrdAsc.forEach((value,index,ar)=>{
		if(index == ar.length-1) {
			cadena += value;
		} else {
			cadena += value + ', ';
		}
	});
	divListaOrdenadaDesc.innerHTML = cadena;
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
divList.style.display = 'block';
