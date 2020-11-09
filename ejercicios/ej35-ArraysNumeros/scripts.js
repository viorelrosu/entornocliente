var numeros = new Array(1,3,5,7,9);
var index = 0;
var inputNum = document.getElementById('inputNum');
var btnFirst = document.getElementById('btnFirst');
var btnPrev = document.getElementById('btnPrev');
var btnNext = document.getElementById('btnNext');
var btnLast = document.getElementById('btnLast');
var btnNew = document.getElementById('btnNew');
var btnDel = document.getElementById('btnDel');
var btnEdit = document.getElementById('btnEdit');
var btnList = document.getElementById('btnList');
var btnAceptar = document.getElementById('btnAceptar');
var btnCancel = document.getElementById('btnCancel');
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
	inputNum.value = numeros[index];
}

inicializar();

function recorrerArray(tipo) {
	switch(tipo) {
		case 'first':
			index = 0;
		break;
		case 'prev':
			index--;
		break;
		case 'next':
			index++;
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
}

function hideElements(tipo) {
	//console.log(value);
	disableElements[tipo].forEach((value)=>{
		document.getElementById(value).disabled = true;
	});
}

function setEscenario(tipo){
	console.log(tipo);
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

function doAccion(){
	switch(accion){
		case 'new':
			numeros.push(inputNum.value);
		break;
		case 'edit':
		break;
		case 'del':
		break;
	}
}

function list(){
	
}
