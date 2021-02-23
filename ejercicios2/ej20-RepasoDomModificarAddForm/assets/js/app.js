var divCajaTexto, divBoton, divRadioButton, divPreview, divRadioPreview,
labelCajaTexto, labelPreviewCajaTexto,
labelBoton, previewBoton, buttonColor, buttonType,
labelRadioButton, radioClassType ;

window.onload = function() {
	divCajaTexto = document.getElementById("divCajaTexto");
	divBoton = document.getElementById("divBoton");
	divRadioButton = document.getElementById("divRadioButton");
	divRadioPreview = document.getElementById("divRadioPreview");
	divPreview = document.getElementById("divPreview");

	labelCajaTexto = document.getElementById("labelCajaTexto");
	labelPreviewCajaTexto = document.getElementById("labelPreviewCajaTexto");
	labelCajaTexto.onkeyup = function() { setPreviewCajaTexto() };

	labelBoton = document.getElementById("labelBoton");
	previewBoton = document.getElementById("previewBoton");
	labelBoton.onkeyup = function() { setPreviewBoton() };

	buttonColor = "btn-dark";
	buttonType = "submit";

	labelRadioButton = document.getElementById("labelRadioButton");

	radioClassType = "form-check-inline";

	console.log(divCajaTexto.children)

	resetDivs();
}

function addRadioPreview(){
	var div = document.createElement("div");
	div.setAttribute("class","form-check " + radioClassType)

	var input = document.createElement("input");
	input.setAttribute("class","form-check-input");
	input.type = "radio";
	input.name = "radioPrueba";
	input.value = labelRadioButton.value;

	var label = document.createElement("label");
	label.appendChild(document.createTextNode(labelRadioButton.value));

	div.appendChild(input);
	div.appendChild(label);

	divRadioPreview.appendChild(div);
}

function addRadioButtons(){
	var options = divRadioPreview.children;
	console.log(options);

	if(options == null || options.length == 0) {
		alert("No puedes insertar un radio vacio");
	} else {

		var div = document.createElement("div");
		div.setAttribute("class","row m-0 p-3");

		var divCol8 = document.createElement("div");
		divCol8.setAttribute("class","col-8 text-left");

			for (var i = 0; i < options.length; i++) {
				var divInput = getDivInput(options[i]);
				divCol8.appendChild(divInput);
			}

		var divCol4 = document.createElement("div");
		divCol4.setAttribute("class","col-4 text-left");

			var btnDel = document.createElement("button");
			btnDel.setAttribute("class", "btn btn-danger");
			btnDel.onclick = function(){ delFila(this); };

			var icon = document.createElement("i");
			icon.setAttribute("class", "fas fa-trash");

			btnDel.appendChild(icon);
			divCol4.appendChild(btnDel);

		div.appendChild(divCol8);
		div.appendChild(divCol4);

		divPreview.appendChild(document.createElement("hr"));
		divPreview.appendChild(div);

		removeRadioPreview();
	}
}

function removeRadioPreview(){
	var options = divRadioPreview.children;

	for (var i = options.length - 1; i >= 0; i--) {
		//console.log(options[i]);
		divRadioPreview.removeChild(options[i]);
	}
}

function getDivInput(node){
	//console.log(node);
	var div = document.createElement("div");
	div.setAttribute("class",node.getAttribute("class"));

		var input = document.createElement("input");
		input.type = "radio";
		input.setAttribute("class", node.firstChild.getAttribute("class"));
		input.name = node.firstChild.getAttribute("name");
		input.value = node.firstChild.getAttribute("value");

		div.appendChild(input);

		var label = document.createElement("label");
		label.appendChild(document.createTextNode(node.firstChild.nextSibling.firstChild.nodeValue));

		div.appendChild(label);

	return div;
}

function setTypeRadioButton(elem) {
	radioClassType = (elem.value == 'horizontal' ? 'form-check-inline' : 'form-check-vertical');
	if(divRadioPreview.children.length > 0) {
		for (var i = 0; i < divRadioPreview.children.length; i++) {
			divRadioPreview.children[i].setAttribute("class","form-check " + radioClassType);
		}
	}
}

function setPreviewBoton(){
	previewBoton.value = labelBoton.value.trim();
}

function setTypeButton(inputRadio){
	buttonType = inputRadio.value;
	previewBoton.type = inputRadio.value;
}

function setColorButton(inputRadio){
	buttonColor = inputRadio.value;
	previewBoton.setAttribute("class", "btn " + inputRadio.value);
}

function addBoton(){
	var div = document.createElement("div");
	div.setAttribute("class","row m-0 p-3");

	var divCol8 = document.createElement("div");
	divCol8.setAttribute("class","col-8 text-left");

		var btnInput = document.createElement("input");
		btnInput.setAttribute("class", "btn " + buttonColor);
		btnInput.setAttribute("type", buttonType);
		btnInput.value = labelBoton.value;

		divCol8.appendChild(btnInput);

	var divCol4 = document.createElement("div");
	divCol4.setAttribute("class","col-4 text-left");

		var btnDel = document.createElement("button");
		btnDel.setAttribute("class", "btn btn-danger");
		btnDel.onclick = function(){ delFila(this); };

		var icon = document.createElement("i");
		icon.setAttribute("class", "fas fa-trash");

		btnDel.appendChild(icon);
		divCol4.appendChild(btnDel);

	div.appendChild(divCol8);
	div.appendChild(divCol4);

	divPreview.appendChild(document.createElement("hr"));
	divPreview.appendChild(div);
}

function setPreviewCajaTexto(){
	labelPreviewCajaTexto.removeChild(labelPreviewCajaTexto.firstChild);
	labelPreviewCajaTexto.appendChild(document.createTextNode(labelCajaTexto.value.trim() + ': '));
}

function addCajaTexto(){
	var div = document.createElement("div");
	div.setAttribute("class","row m-0 p-3");

	var divCol3 = document.createElement("div");
	divCol3.setAttribute("class","col-3 text-left");

		var labelText = document.createElement("label");
		labelText.appendChild(document.createTextNode(labelCajaTexto.value.trim() + ': '));

		divCol3.appendChild(labelText);

	var divCol5 = document.createElement("div");
	divCol5.setAttribute("class", "col-5");

		var inputText = document.createElement("input");
		inputText.type = "text";
		inputText.name = "elemCajaTexto";
		inputText.setAttribute("class", "form-control");

		divCol5.appendChild(inputText);

	var divCol4 = document.createElement("div");
	divCol4.setAttribute("class", "col-4 text-left");

		var btnDel = document.createElement("button");
		btnDel.setAttribute("class", "btn btn-danger");
		btnDel.onclick = function(){ delFila(this); };

		var icon = document.createElement("i");
		icon.setAttribute("class", "fas fa-trash");

		btnDel.appendChild(icon);
		divCol4.appendChild(btnDel);

	div.appendChild(divCol3);
	div.appendChild(divCol5);
	div.appendChild(divCol4);

	divPreview.appendChild(document.createElement("hr"));
	divPreview.appendChild(div);
}

function delFila(btn){
	var fila = btn.parentNode.parentNode;
	var hrFila = fila.previousSibling;
	divPreview.removeChild(hrFila);
	divPreview.removeChild(fila);
};

function resetDivs(){
	divCajaTexto.style.display = "block";
	divBoton.style.display = "none";
	divRadioButton.style.display = "none";
}

function mostrarDiv(tipo){
	divCajaTexto.style.display = "none";
	divBoton.style.display = "none";
	divRadioButton.style.display = "none";
	switch(tipo){
		case 'texto':
			divCajaTexto.style.display = "block";
			break;
		case 'boton':
			divBoton.style.display = "block";
			break;
		case 'radio':
			divRadioButton.style.display = "block";
			break;
	}
}