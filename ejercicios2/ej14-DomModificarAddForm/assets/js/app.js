$(document).ready(function(){
	//$('#alertModal').modal('show');

	var divPreview = document.getElementById("divPreview");
	var divCajaTexto = document.getElementById("divCajaTexto");
	var divBoton = document.getElementById("divBoton");
	var divRadioButton = document.getElementById("divRadioButton");
	var labelCajaTexto = document.getElementById("labelCajaTexto");
	var labelBoton = document.getElementById("labelBoton");
	var labelRadioButton = document.getElementById("labelRadioButton");
	var labelPreviewCajaTexto = document.getElementById("labelPreviewCajaTexto");
	var previewBoton = document.getElementById("previewBoton");

	labelCajaTexto.onkeyup = function(){
		setPreviewCajaTexto();
	};

	labelBoton.onkeyup = function(){
		setPreviewBoton();
	};

	ocultarDivs();
	mostrarDiv('texto');

	addBoton();
	addCajaTexto();
	addRadioButtons();
	
});

function setPreviewCajaTexto(){
	labelPreviewCajaTexto.innerHTML = labelCajaTexto.value;
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
	var inputValue = 'Enviar';
	var inputType = 'submit';

	var divRow = document.createElement("div");
	divRow.setAttribute("class","row m-0 p-3");

	var divCol8 = document.createElement("div");
	divCol8.setAttribute("class","col-8 text-left");

	var inputBoton = document.createElement("input");
	inputBoton.type = inputType;
	inputBoton.value = inputValue;
	inputBoton.setAttribute("class","btn btn-dark");

	divCol8.appendChild(inputBoton);

	var divCol4 = document.createElement("div");
	divCol4.setAttribute("class","col-4 text-left");

	var btnDel = document.createElement("button");
	btnDel.setAttribute("class","btn btn-danger");
	btnDel.onclick = function() { delRowBoton(this) };

	var i = document.createElement("i");
	i.setAttribute("class","fas fa-trash");
	btnDel.appendChild(i);

	divCol4.appendChild(btnDel);

	divRow.appendChild(divCol8);
	divRow.appendChild(divCol4);

	var hr = document.createElement("hr");

	divPreview.appendChild(hr);
	divPreview.appendChild(divRow);

}

function addCajaTexto(){
	var inputLabel = 'Introduzca tu Nombre'+':';
	var inputType = 'text';

	var divRow = document.createElement("div");
	divRow.setAttribute("class","row m-0 p-3");

	var divCol3 = document.createElement("div");
	divCol3.setAttribute("class","col-3 text-left");

	var label = document.createElement("label");
	label.appendChild(document.createTextNode(inputLabel));

	divCol3.appendChild(label);

	var divCol5 = document.createElement("div");
	divCol5.setAttribute("class","col-5");

	var inputText = document.createElement("input");
	inputText.type = inputType;
	inputText.setAttribute("class","form-control");

	divCol5.appendChild(inputText);

	var divCol4Del = getDivCol4Del()

	divRow.appendChild(divCol3);
	divRow.appendChild(divCol5);
	divRow.appendChild(divCol4Del);

	var hr = document.createElement("hr");

	divPreview.appendChild(hr);
	divPreview.appendChild(divRow);

}

function addRadioButtons(){
	var opt1Label = 'Option 1';
	var opt2Label = 'Option 2';
	var opt2Label = 'Option 3';
	
	var divRow = document.createElement("div");
	divRow.setAttribute("class","row m-0 p-3");

	var divCol8 = document.createElement("div");
	divCol8.setAttribute("class","col-8 text-left");

		//for todos los elementos
		var divFormCheck = document.createElement("div");
		divFormCheck.setAttribute("class","form-check");

			var inputRadio = document.createElement("input");
			inputRadio.setAttribute("class","form-check-input");
			inputRadio.type = "radio";
			inputRadio.name = "example";
			inputRadio.id = "exampleRadios1";
			inputRadio.value = opt1Label;

			var label = document.createElement("label");
			label.setAttribute("class","form-check-label");
			label.setAttribute("for","exampleRadios1"); 
			label.appendChild(document.createTextNode(opt1Label));

		divFormCheck.appendChild(inputRadio);
		divFormCheck.appendChild(label);

		divCol8.appendChild(divFormCheck);

	var divCol4Del = getDivCol4Del()

	divRow.appendChild(divCol8);
	divRow.appendChild(divCol4Del);

	var hr = document.createElement("hr");

	divPreview.appendChild(hr);
	divPreview.appendChild(divRow);

}

function getDivCol4Del(){
	var divCol4 = document.createElement("div");
	divCol4.setAttribute("class","col-4 text-left");

	var btnDel = document.createElement("button");
	btnDel.setAttribute("class","btn btn-danger");
	btnDel.onclick = function() { delRowBoton(this) };

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