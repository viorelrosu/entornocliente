var numeros = new Array(5,1,7,9,3);
var index = 0;
var inputNum = document.getElementById('inputNum');
//var btnFirst = document.getElementById('btnFirst');
//var btnPrev = document.getElementById('btnPrev');
//var btnNext = document.getElementById('btnNext');
//var btnLast = document.getElementById('btnLast');

//var btnNew = document.getElementById('btnNew');
//var btnDel = document.getElementById('btnDel');
//var btnEdit = document.getElementById('btnEdit');
//var btnList = document.getElementById('btnList');

var btnAceptar = document.getElementById('btnAceptar');
var btnCancel = document.getElementById('btnCancel');
var alertError = document.getElementById('alertError');
var alertSuccess = document.getElementById('alertSuccess');
var alertInfo = document.getElementById('alertInfo');
var alertConfirm = document.getElementById('alertConfirm');
var alertConfirmMensaje = document.getElementById('alertConfirmMensaje');
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
disableElements['edit'] = new Array('btnNew','btnEdit', 'btnDel', 'btnList', 'btnFirst', 'btnPrev','btnNext', 'btnLast');
disableElements['del'] = new Array('btnNew','btnEdit', 'btnDel', 'btnList', 'btnFirst', 'btnPrev','btnNext', 'btnLast');

function inicializar(){
	btnAceptar.style.display = 'none';
	btnCancel.style.display = 'none';
	alertError.style.display = 'none';
	alertSuccess.style.display = 'none';
	alertInfo.style.display = 'none';
	alertConfirm.style.display = 'none';
	divList.style.display = 'block';

	console.log(index);

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
	btnCancel.style.display = 'none';
	btnAceptar.style.display = 'none';
	alertError.style.display = 'none';
	alertSuccess.style.display = 'none';
	alertInfo.style.display = 'none';
	alertConfirm.style.display = 'none';
}

function hideElements(tipo) {
	//console.log(value);
	disableElements[tipo].forEach((value)=>{
		document.getElementById(value).disabled = true;
	});
}

function setEscenario(tipo){
	//console.log(tipo);
	showAll();
	hideElements(tipo);
	btnCancel.style.display = 'inline';
	btnAceptar.style.display = 'inline';
	//console.log(disableElements[tipo]);
}

function setAccion(tipo){
	accion = tipo;
	setEscenario(tipo);
}

function cancel(){
	showAll();
}

function setAlertError(mensaje) {
	alertError.style.display = 'block';
	alertError.innerHTML = mensaje;
	//console.log(alertError);

	alertInfo.style.display = 'none';
	alertSuccess.style.display = 'none';
}

function setAlertSuccess(mensaje) {
	
	alertSuccess.innerHTML = mensaje;
	alertSuccess.style.display = 'block';
	
	alertError.style.display = 'none';
	alertInfo.style.display = 'none';
}

function comprobarNumero(num) {
	//console.log(num);
	var letras = 'abcdefghijklmnopqrstuvxwyáéíúóç ';
	if( letras.indexOf(num.charAt(0)) == -1 ){
		return true;
	} else {
		return false;
	}
}

function setConfirm(mensaje){
	alertConfirmMensaje.innerHTML = mensaje;
	alertConfirm.style.display = 'block';
}

function checkIndex(){
	if(index == numeros.length-1) {
		index = 0;
	} else if(index == 0) {
		index == numeros.length-1;
	} else {
		index++;
	}
}

function confirm(){
	switch(accion) {
		case 'del':
			numeros.splice(index, 1);
			setAlertSuccess('Muy bien. Número eliminado correctamente.');
			checkIndex();
			inputNum.value = numeros[index];
			showAll();
			list();
		break;
		case 'edit':
			console.log('confirm edit');
			numeros[index] = parseInt(inputNum.value);
			confirmCancel();
			list();
		break;
	}
}

function confirmCancel(){
	alertConfirm.style.display = 'none';
}

function doAccion(){
	//console.log(accion);
	switch(accion){
		case 'new':
			//comprobar el numero
			if( comprobarNumero(inputNum.value) ) {
				numeros.push(parseInt(inputNum.value));
				inputNum.value = '';
				setAlertSuccess('Muy bien. Número insertado correctamente.');
				list();
			} else {
				setAlertError('Lo siento. Solo números');
			}
			
			break;
		case 'edit':
			if( comprobarNumero(inputNum.value) ) {
				setConfirm('¿Estás seguro de modificar el número ' + numeros[index] + '?');
			} else {
				setAlertError('Lo siento. Solo números');
			}
			break;
		case 'del':
			setConfirm('¿Estás seguro de eliminar el número ' + numeros[index] + '?');
			break;
	}
}

function toggleList(){
	
	if(divList.style.display == 'block') {
		divList.style.display = 'none';
	} else {
		divList.style.display = 'block';
	}
}


function ordenarDesc(num1,num2){
	if(num1 == num2) {
		return 0;
	}

	if(num1 < num2) {
		return 1;
	} else {
		return -1;
	}
}

function list(){

	var listaAsc = '<h2>';
	var divListaAsc = document.getElementById('divListAsc');
	var numerosOrdAsc = new Array();
	var numerosOrdDesc = new Array(); 

	numeros.forEach((value)=>{
		numerosOrdAsc.push(value);
		numerosOrdDesc.push(value);
	});

	numerosOrdAsc.sort();

	numerosOrdAsc.forEach((value, index,ar)=>{
		if(index == ar.length-1) {
			listaAsc += value;
		} else {
			listaAsc += value + ', ';
		}
		
	});

	listaAsc += '</h2>';

	divListaAsc.innerHTML = listaAsc;

	var listaDesc = '<h2>';
	divListaDesc = document.getElementById('divListDesc');

	numerosOrdDesc.sort(ordenarDesc);

	numerosOrdDesc.forEach((value, index,ar)=>{
		if(index == ar.length-1) {
			listaDesc += value;
		} else {
			listaDesc += value + ', ';
		}
		
	});

	listaDesc += '</h2>';
	divListaDesc.innerHTML = listaDesc;

	console.log(numeros);
	console.log(numerosOrdAsc);
	console.log(numerosOrdDesc);
}


inicializar();
list();
