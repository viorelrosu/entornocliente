var inputNombre, inputApellidos, inputTelefono, inputDNI, inputCalle, inputNumero, inputPiso, inputPuerta, btnSubmit;

var patternNombre = /^[a-záéíóúçñ\-\ ]{3,30}$/;
var patternApellidos = /^[a-záéíóúçñ\-\ ]{3,40}$/;;
var patternTelefono = /^(\()(\+)(\d{2,3})(\))(\-)(\d{9})$/;
var patternDNI = /^([\d]{8})([A-Z]{1})$/;
var patternCalle = /^[a-záéíóúçñ\-\ \(\)]{3,30}$/;
var patternNumero = /^([1-9]{1})([0-9]{0,3})$/;
var patternPiso = /^([1-9]{1})([0-9]?)$/;
var patternPuerta = /^([1-9]|[A-I]){1}$/;

window.onload = function() {

	inputNombre = document.form.nombre;
	inputApellidos = document.form.apellidos;
	inputTelefono = document.form.telefono;
	inputDNI = document.form.dni;
	inputCalle = document.form.calle;
	inputNumero = document.form.numero;
	inputPiso = document.form.piso;
	inputPuerta = document.form.puerta;
	btnSubmit = document.form.btnInsert;
	btnReset = document.form.btnReset;

	document.form.onsubmit = () => false;
	inputNombre.onkeyup = () => validarCampo(inputNombre,patternNombre, true);
	inputApellidos.onkeyup = () => validarCampo(inputApellidos,patternApellidos, true);
	inputTelefono.onkeyup = () => validarCampo(inputTelefono,patternTelefono, true);
	inputDNI.onkeyup = () => validarDNI(inputDNI, patternDNI, false);
	inputCalle.onkeyup = () => validarCampo(inputCalle, patternCalle, true);
	inputNumero.onkeyup = () => validarCampo(inputNumero, patternNumero, true);
	inputPiso.onkeyup = () => validarCampo(inputPiso,patternPiso, true);
	inputPuerta.onkeyup = () => validarCampo(inputPuerta,patternPuerta, false);
	btnSubmit.onclick = () => validar();
	btnReset.onclick = () => resetForm();

	document.form.pais.onchange = function(){ insertarCiudades() ;}

	insertData();
}

function validarCampo(inputText, pattern, small) {
	var isValid = false;
	var mensaje = 'El campo es obligatorio';
	var divError = document.getElementById("error-"+inputText.name);
	var valorText = inputText.value.trim();

	if(valorText != '' && valorText != null) {
		if(small) {
			valorText = valorText.toLowerCase();
		}
		//console.log(valorText);
		if(pattern.test(valorText)) {
			isValid = true;
		} else {
			mensaje = 'El campo es inválido';
		}
	}

	showError(inputText, isValid, divError, mensaje);
	return isValid;
}

function validarDNI(inputText, pattern, small=true) {
	var isValid = false;
	var mensaje = 'El campo es obligatorio';
	var divError = document.getElementById("error-"+inputText.name);
	var valorText = inputText.value.trim();

	if(valorText != '' && valorText != null) {
		mensaje = 'El campo es inválido';
		if(small) {
			valorText = valorText.toLowerCase();
		}
		if(pattern.test(valorText)) {
			var letrasAdmitidas = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'N', 'J', 'S', 'Z', 'Q', 'V', 'H', 'L', 'C', 'K', 'E');
			var letra = valorText.substring(valorText.length-1);
			var numero = valorText.substring(0,valorText.length-1);
			var index = (numero%23);

			if(letra == letrasAdmitidas[index]) {
				isValid = true;
			}
		}
	}

	showError(inputText, isValid, divError, mensaje);
	return isValid;
}

function showError(inputText, isValid, divError, mensaje){
	var valorText = inputText.value;

	if(isValid) {
		inputText.setAttribute("class","form-control");
		divError.setAttribute("style","display:none");
	} else {
		inputText.setAttribute("class","form-control error");
		divError.setAttribute("style","display:block");
		divError.innerHTML = mensaje;
		inputText.focus();
	}
}

function validar() {
	var isValid = true;

	isValid = validarCampo(inputNombre,patternNombre, true);

	if(isValid)
		isValid = validarCampo(inputApellidos,patternApellidos, true);

	if(isValid)
		isValid = validarCampo(inputTelefono,patternTelefono, true);

	if(isValid)
		isValid = validarDNI(inputDNI, patternDNI, false);

	if(isValid)
		isValid = validarGenero();

	if(isValid)
		isValid = validarCampo(inputCalle, patternCalle, true);

	if(isValid)
		isValid = validarCampo(inputNumero, patternNumero, true);

	if(isValid)
		isValid = validarCampo(inputPiso,patternPiso, true);

	if(isValid)
		isValid = validarCampo(inputPuerta,patternPuerta,false);

	if(isValid)
		isValid = validarPaisyCiudad('pais');

	if(isValid)
		isValid = validarPaisyCiudad('ciudad');

	if(isValid) {
		insertarFila();
	}
}

function validarGenero(){
	var isValid = false;
	var options = document.form.genero;
	var divError = document.getElementById("error-genero");
	for (var i = 0; i < options.length; i++) {
		if( options[i].checked == true) {
			isValid = true;
		}
	}

	if(isValid) {
		divError.setAttribute("style","display:none");
	} else {
		divError.setAttribute("style","display:block");
		divError.innerHTML = "El campo es obligatorio";
		options[0].focus();
	}

	return isValid;
}

function validarPaisyCiudad(tipo){
	var isValid = false;
	var options, divError;
	switch(tipo){
		case "pais":
			options = document.form.pais.options;
			divError = document.getElementById("error-pais");
		break;
		case "ciudad":
			options = document.form.ciudad.options;
			divError = document.getElementById("error-ciudad");
		break;
	}

	for (var i = 0; i < options.length; i++) {
		if( options[i].selected == true && options[i].value != '') {
			isValid = true;
		}
	}

	if(isValid) {
		divError.setAttribute("style","display:none");
	} else {
		divError.setAttribute("style","display:block");
		divError.innerHTML = "El campo es obligatorio";
		document.form.pais.focus();
	}

	return isValid;
}

function insertarCiudades(){
	var selectPais = document.form.pais;
	var selectCiudad = document.form.ciudad;
	var paisSelected = selectPais.options[selectPais.selectedIndex].value;
	var ciudad = '';
	if(paisSelected != '') {
		switch(paisSelected) {
			case "España":
				var ciudad = new Option("Selecciona una ciudad de España","");
				selectCiudad.options[0] = ciudad;
				ciudad = new Option("Barcelona","Barcelona");
				selectCiudad.options[1] = ciudad;
				ciudad = new Option("Madrid","Madrid");
				selectCiudad.options[2] = ciudad;
				ciudad = new Option("Sevilla","Sevilla");
				selectCiudad.options[3] = ciudad;
			break;
			case "Francia":
				var ciudad = new Option("Selecciona una ciudad de Francia","");
				selectCiudad.options[0] = ciudad;
				ciudad = new Option("París","París");
				selectCiudad.options[1] = ciudad;
				ciudad = new Option("Marsella","Marsella");
				selectCiudad.options[2] = ciudad;
				ciudad = new Option("Lyon","Lyon");
				selectCiudad.options[3] = ciudad;
			break;
			case "Portugal":
				var ciudad = new Option("Selecciona una ciudad de Portugal","");
				selectCiudad.options[0] = ciudad;
				ciudad = new Option("Lisboa","Lisboa");
				selectCiudad.options[1] = ciudad;
				ciudad = new Option("Oporto","Oporto");
				selectCiudad.options[2] = ciudad;
				ciudad = new Option("Sintra","Sintra");
				selectCiudad.options[3] = ciudad;
			break;
		}
	} else {
		var ciudad = new Option("Selecciona primero un País","");
		selectCiudad.options[0] = ciudad;
		selectCiudad.options[3] = null;
		selectCiudad.options[2] = null;
		selectCiudad.options[1] = null;
	}
}

function insertarFila(){
	var tr = document.createElement("tr");
	var td;

	td = getElementTd("nombre");
	tr.appendChild(td);

	td = getElementTd("apellidos");
	tr.appendChild(td);

	td = getElementTd("telefono");
	tr.appendChild(td);

	td = getElementTd("dni");
	tr.appendChild(td);

	td = getElementTd("genero");
	tr.appendChild(td);

	td = getElementTd("calle");
	tr.appendChild(td);

	td = getElementTd("numero");
	tr.appendChild(td);

	td = getElementTd("piso");
	tr.appendChild(td);

	td = getElementTd("puerta");
	tr.appendChild(td);

	td = getElementTd("pais");
	tr.appendChild(td);

	td = getElementTd("ciudad");
	tr.appendChild(td);

	td = getElementTd("botones");
	tr.appendChild(td);

	document.getElementById("miTabla").children[1].appendChild(tr);
	resetForm();
}

function getElementTd(tipo) {
	var td = document.createElement("td");
	var text;
	switch(tipo) {
		case "nombre":
			text = document.createTextNode(inputNombre.value);
			td.appendChild(text);
		break;
		case "apellidos":
			text = document.createTextNode(inputApellidos.value);
			td.appendChild(text);
		break;
		case "telefono":
			text = document.createTextNode(inputTelefono.value);
			td.appendChild(text);
		break;
		case "dni":
			text = document.createTextNode(inputDNI.value);
			td.appendChild(text);
		break;
		case "genero":
			var index;
			for(var i=0; i<document.form.genero.length; i++) {
				if(document.form.genero[i].checked == true) {
					index = i;
				}
			}
			text = document.createTextNode(document.form.genero[index].value);
			td.appendChild(text);
		break;
		case "calle":
			text = document.createTextNode(inputCalle.value);
			td.appendChild(text);
		break;
		case "numero":
			text = document.createTextNode(inputNumero.value);
			td.appendChild(text);
		break;
		case "piso":
			text = document.createTextNode(inputPiso.value);
			td.appendChild(text);
		break;
		case "puerta":
			text = document.createTextNode(inputPuerta.value);
			td.appendChild(text);
		break;
		case "pais":
			var selectedPais = document.form.pais.options[document.form.pais.selectedIndex].value;
			text = document.createTextNode(selectedPais);
			td.appendChild(text);
		break;
		case "ciudad":
			var selectedCiudad = document.form.ciudad.options[document.form.ciudad.selectedIndex].value;
			text = document.createTextNode(selectedCiudad);
			td.appendChild(text);
		break;
		case "botones":
			var btnDel = document.createElement("button");
			btnDel.setAttribute("onclick","delFila(this);");
			btnDel.setAttribute("class","btn btn-danger");
			var i = document.createElement("i");
			i.setAttribute("class","fas fa-trash");
			btnDel.appendChild(i);
			td.appendChild(btnDel);
		break;
	}
	return td;
}

function insertData(){
	inputNombre.value = "Nombre";
	inputApellidos.value = "Apellidos";
	inputTelefono.value = "(+34)-900900900";
	inputDNI.value = "12345678Z";
	inputCalle.value = "Segovia";
	inputNumero.value = "23";
	inputPiso.value = "4";
	inputPuerta.value = "C";
}

function resetForm(){
	document.form.reset();

	for(var i = document.form.ciudad.options.length; i >= 0; i--){
		document.form.ciudad.options[i] = null;
	}
	var ciudad = new Option("Selecciona primero un País","");
	document.form.ciudad.options[0] = ciudad;
	document.form.ciudad.options[0].selected = true;

	inputNombre.focus();
}

function delFila(btn) {
	var fila = btn.parentNode.parentNode;
	document.getElementById("miTabla").children[1].removeChild(fila);
}



