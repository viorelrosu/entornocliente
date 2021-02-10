$(document).ready(function(){

	var formTipoRadioButton = document.formTipoRadioButton;
	var divPreview = document.getElementById("divPreview");
	var divCajaTexto = document.getElementById("divCajaTexto");
	var divBoton = document.getElementById("divBoton");
	var divRadioButton = document.getElementById("divRadioButton");
	var divRadioPreview = document.getElementById("divRadioPreview");
	var divAlertMensaje = document.getElementById("divAlertMensaje");
	var divConfirmMensaje = document.getElementById("divConfirmMensaje");
	var labelCajaTexto = document.getElementById("labelCajaTexto");
	var labelBoton = document.getElementById("labelBoton");
	var labelRadioButton = document.getElementById("labelRadioButton");
	var labelPreviewCajaTexto = document.getElementById("labelPreviewCajaTexto");
	var previewBoton = document.getElementById("previewBoton");
	var radioClassType = "form-check-inline";
	var buttonType = "submit";
	var buttonColor = "btn-dark";

	labelCajaTexto.onkeyup = function(){
		setPreviewCajaTexto();
	};

	labelBoton.onkeyup = function(){
		setPreviewBoton();
	};

	ocultarDivs();
	mostrarDiv('texto');
	setTypeRadioButton(document.getElementById('tipoHorizontal'));
	setTypeButton(document.getElementById('tipoSubmit'));
	setColorButton(document.getElementById('tipoDark'));

});

function mostrarModalError(texto='No se puede crear un elemento sin etiqueta',inputFocus){
	var textoOld = divAlertMensaje.firstChild;
	divAlertMensaje.replaceChild(document.createTextNode(texto), textoOld);
	$('#alertModal').modal('show').on('hidden.bs.modal',function() {
		inputFocus.focus();
	});
}

function mostrarModalConfirm(texto='¿Estás seguro?', divNode){
	var textoOld = divConfirmMensaje.firstChild;
	divConfirmMensaje.replaceChild(document.createTextNode(texto), textoOld);
	$('#alertConfirmModal').modal('show').on('shown.bs.modal',function() {
		$(this).find('.btn-ok').unbind('click').on('click', function () { 
			removeNode(divNode);
		} );
	});
}

function removeNode(divNode) {
	var rowToDel = divNode.parentNode.parentNode;
	var hrToDel = rowToDel.previousElementSibling;
	divPreview.removeChild(rowToDel);
	if(hrToDel) {
		divPreview.removeChild(hrToDel);
	}
	$('#alertConfirmModal').modal('hide');

	checkDivPreview();
}

function checkDivPreview(){
	if(divPreview.children.length == 0) {
		var div = document.createElement('div');
		div.setAttribute("class","p-5");
		div.appendChild(document.createTextNode('Introduzca elementos'));
		divPreview.appendChild(div);
	}
}

function setTypeRadioButton(elem){
	radioClassType = (elem.value == 'horizontal' ? 'form-check-inline' : 'form-check-vertical');

	if(divRadioPreview.children.length > 0) {
		for (var i = 0; i < divRadioPreview.children.length; i++) {
			divRadioPreview.children[i].setAttribute("class","form-check " + radioClassType);
		}
	}
}

function setTypeButton(elem){
	buttonType = elem.value;
	previewBoton.setAttribute("type",elem.value);
}

function setColorButton(elem){
	buttonColor = elem.value;
	previewBoton.setAttribute("class","btn " + elem.value);
}

function setPreviewCajaTexto(){
	labelPreviewCajaTexto.innerHTML = labelCajaTexto.value+':';
}

function setPreviewBoton(){
	previewBoton.value = labelBoton.value;
}

function ocultarDivs(){
	divCajaTexto.setAttribute('class','d-none');
	divBoton.setAttribute('class','d-none');
	divRadioButton.setAttribute('class','d-none');
};

function mostrarDiv(tipo){
	ocultarDivs();
	switch(tipo){
		case 'texto':
			divCajaTexto.setAttribute('class','d-block');
		break;
		case 'boton':
			divBoton.setAttribute('class','d-block');
		break;
		case 'radio':
			divRadioButton.setAttribute('class','d-block');
		break;

	}
};

function addBoton(){
	var buttonValue = labelBoton.value;

	if(buttonValue == '' || buttonValue == null) {
		var errorMens = 'No puedes insertar un botón sin etiqueta';
		mostrarModalError(errorMens,labelBoton);
		return false;
	}

	var idRow = getRandomString(7);
	var divRow = document.createElement("div");
	divRow.setAttribute("class","row m-0 p-3");
	divRow.setAttribute("id",idRow);

	var divCol8 = document.createElement("div");
	divCol8.setAttribute("class","col-8 text-left");

	var inputBoton = document.createElement("input");
	inputBoton.type = buttonType;
	inputBoton.value = buttonValue;
	inputBoton.setAttribute("class","btn " + buttonColor);

	divCol8.appendChild(inputBoton);

	var divCol4Del = getDivCol4Del();

	divRow.appendChild(divCol8);
	divRow.appendChild(divCol4Del);

	var hr = document.createElement("hr");

	divPreview.appendChild(hr);
	divPreview.appendChild(divRow);

	resetButtonPreview();

	window.location = '#'+idRow;
}

function addCajaTexto(){
	var inputLabel = labelCajaTexto.value;
	var inputType = 'text';

	if(inputLabel == '' || inputLabel == null) {
		var errorMens = 'No puedes insertar una caja de texto sin etiqueta';
		mostrarModalError(errorMens,labelCajaTexto);
		labelCajaTexto.focus();
		return false;
	}

	var idRow = getRandomString(7);
	var divRow = document.createElement("div");
	divRow.setAttribute("class","row m-0 p-3");
	divRow.setAttribute("id",idRow);

	var divCol3 = document.createElement("div");
	divCol3.setAttribute("class","col-3 text-left");

	var label = document.createElement("label");
	label.appendChild(document.createTextNode(inputLabel+':'));

	divCol3.appendChild(label);

	var divCol5 = document.createElement("div");
	divCol5.setAttribute("class","col-5");

	var inputText = document.createElement("input");
	inputText.type = inputType;
	inputText.setAttribute("class","form-control");

	divCol5.appendChild(inputText);

	var divCol4Del = getDivCol4Del();

	divRow.appendChild(divCol3);
	divRow.appendChild(divCol5);
	divRow.appendChild(divCol4Del);

	var hr = document.createElement("hr");

	divPreview.appendChild(hr);
	divPreview.appendChild(divRow);

	resetLabelCajaTexto();
	window.location = '#'+idRow;
}

function addRadioButtons(){
	var options = divRadioPreview.children;

	if(options.length == 0 || options == null) {
		var errorMens = 'No puedes insertar un radio button sin etiqueta';
		mostrarModalError(errorMens,labelRadioButton);
		return false;
	}

	var idRow = getRandomString(7);
	var divRow = document.createElement("div");
	divRow.setAttribute("class","row m-0 p-3");
	divRow.setAttribute("id",idRow);

	var divCol8 = document.createElement("div");
	divCol8.setAttribute("class","col-8 text-left");

		for (var i = 0; i < options.length; i++) {
			var labelRadio = options[i].firstChild.nextSibling.firstChild.nodeValue;
			var nameRadio = options[i].firstChild.name;
			var idRadio = options[i].firstChild.id;
			var divFormCheck = getDivFormCheck(labelRadio, nameRadio, idRadio);
			divCol8.appendChild(divFormCheck);
		}

	var divCol4Del = getDivCol4Del();

	divRow.appendChild(divCol8);
	divRow.appendChild(divCol4Del);

	var hr = document.createElement("hr");

	divPreview.appendChild(hr);
	divPreview.appendChild(divRow);

	removeChildrenRadioPreview();

	window.location = '#'+idRow;
}

function getDivFormCheck(label, name, id){

	var divFormCheck = document.createElement("div");
		divFormCheck.setAttribute("class","form-check "+radioClassType);

			var inputRadio = document.createElement("input");
			inputRadio.setAttribute("class","form-check-input ");
			inputRadio.setAttribute("id",id);
			inputRadio.type = "radio";
			inputRadio.name = name;
			inputRadio.value = label;

			var labelRadio = document.createElement("label");
			labelRadio.setAttribute("class","form-check-label");
			labelRadio.setAttribute("for",id);
			labelRadio.appendChild(document.createTextNode(label));

		divFormCheck.appendChild(inputRadio);
		divFormCheck.appendChild(labelRadio);

	return divFormCheck;
}

function addRadioPreview(){
	var labelRadio = labelRadioButton.value;
	var nameRadio = '';
	if(labelRadio == '' || labelRadio == null) {
		var errorMens = 'No puedes insertar un radio button sin etiqueta';
		mostrarModalError(errorMens,labelRadioButton);
		return false;
	}

	if(divRadioPreview.children.length > 0) {
		nameRadio = divRadioPreview.children[0].firstChild.name;
	} else {
		nameRadio = getRandomString(10);
	}

	var divFormCheck = getDivFormCheck(labelRadio, nameRadio, getRandomString(10));
	divRadioPreview.appendChild(divFormCheck);

	labelRadioButton.value = '';
}

function removeChildrenRadioPreview(){
	for (var i = divRadioPreview.children.length-1; i >= 0; i--) {
		divRadioPreview.removeChild(divRadioPreview.children[i]);
	}
}

function resetButtonPreview(){
	previewBoton.setAttribute("value","Inserta una etiqueta");
	labelBoton.value = '';
}

function resetLabelCajaTexto(){
	labelPreviewCajaTexto.removeChild(labelPreviewCajaTexto.firstChild);
	labelPreviewCajaTexto.appendChild(document.createTextNode("Etiqueta ejemplo:"));
	labelCajaTexto.value='';
}

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function getDivCol4Del(){
	var divCol4 = document.createElement("div");
	divCol4.setAttribute("class","col-4 text-left");

	var btnDel = document.createElement("button");
	btnDel.setAttribute("class","btn btn-danger");
	//btnDel.onclick = function() { delRowBoton(this) };
	btnDel.onclick = function() { mostrarModalConfirm('¿Estás seguro de eliminar esta fila?',this) };

	var i = document.createElement("i");
	i.setAttribute("class","fas fa-trash");
	btnDel.appendChild(i);

	divCol4.appendChild(btnDel);

	return divCol4;
}

function delRowBoton(btn) {
	var padre = btn.parentNode.parentNode;
	var hr = padre.previousSibling;
	divPreview.removeChild(hr);
	divPreview.removeChild(padre);
}