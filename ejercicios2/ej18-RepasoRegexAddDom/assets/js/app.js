var inputNombre, inputApellidos, inputTelefono, inputDNI,
radioGenero, inputCalle, inputNumero, inputPiso, inputPuerta,
selectPais, selectCiudad, btnSubmit, btnReset, miTabla;

var patternNombre = /^([a-záéíóúçñ\-\ ]){3,30}$/;
var patternApellidos = /^([a-záéíóúçñ\-\ ]){3,40}$/;
var patternTelefono = /^(\()(\+)([\d]{2,3})(\))(\-)([\d]{9})$/;
var patternDNI = /^([\d]{8})([A-Z]{1})$/;
var patternCalle = /^([a-záéíóúçñ\-\ \(\)]){3,25}$/;
var patternNumero = /^([1-9]{1})([0-9]{0,1})$/;
var patternPiso = /^([1-9]{1})([0-9]{0,1})$/;
var patternPuerta = /^([1-9]|[ABCDEFGHI]){1}$/;

window.onload = function() {
	document.form.onsubmit = ()=>false;

	inputNombre = document.form.nombre;
	inputApellidos = document.form.apellidos;
	inputTelefono = document.form.telefono;
	inputDNI = document.form.dni;
	radioGenero = document.form.genero;
	inputCalle = document.form.calle;
	inputNumero = document.form.numero;
	inputPiso = document.form.piso;
	inputPuerta = document.form.puerta;
	selectPais = document.form.pais;
	selectCiudad = document.form.ciudad;
	btnSubmit = document.form.btnSubmit;
	btnReset = document.form.btnReset;
	miTabla = document.getElementById("miTabla");

	inputNombre.onkeyup = function() { validarCampo(this,patternNombre) };
	inputApellidos.onkeyup = function() { validarCampo(this,patternApellidos) };
	inputTelefono.onkeyup = function() { validarCampo(this,patternTelefono) };
	inputDNI.onkeyup = function() { validarDNI(this,patternDNI) };
	inputCalle.onkeyup = function() { validarCampo(this,patternCalle) };
	inputNumero.onkeyup = function() { validarCampo(this,patternNumero) };
	inputPiso.onkeyup = function() { validarCampo(this,patternPiso) };
	inputPuerta.onkeyup = function() { validarCampo(this,patternPuerta,false) };
	selectPais.onchange = ()=>insertCiudad();
	btnSubmit.onclick = () => validar();
	btnReset.onclick = () => resetForm();

	insertDataForm();
}

function insertCiudad(){
	var selectedPais = getSelectPaisCiudadSelected("pais");

	for (var i = selectCiudad.options.length; i > 0; i--) {
		selectCiudad.options[i] = null;
	}

	if(selectedPais != '') {
		switch(selectedPais) {
			case "España":
				selectCiudad.options[0] = new Option("Selecciona una ciudad de España","");
				selectCiudad.options[1] = new Option("Madrid","Madrid");
				selectCiudad.options[2] = new Option("Barcelona","Barcelona");
				selectCiudad.options[3] = new Option("Segovia","Segovia");
				break;
			case "Francia":
				selectCiudad.options[0] = new Option("Selecciona una ciudad de Francia","");
				selectCiudad.options[1] = new Option("Paris","Paris");
				selectCiudad.options[2] = new Option("Marsella","Marsella");
				selectCiudad.options[3] = new Option("Lyon","Lyon");
				break;
			case "Portugal":
				selectCiudad.options[0] = new Option("Selecciona una ciudad de Portugal","");
				selectCiudad.options[1] = new Option("Lisboa","Lisboa");
				selectCiudad.options[2] = new Option("Oporto","Oporto");
				selectCiudad.options[3] = new Option("Sintra","Sintra");
				break;
		}

	} else {
		selectCiudad.options[0] = new Option("Selecciona primero un país","");
	}

}

function validarCampo(inputText,pattern, small=true){
	var isValid = false;
	var mensaje = "El campo es obligatorio.";
	var valor = inputText.value.trim();
	var divError = document.getElementById("error-"+inputText.name);

	if(valor != '' && valor != null) {
		if(small){
			valor = valor.toLowerCase();
		}
		if(pattern.test(valor)) {
			isValid = true;
		} else {
			mensaje = "El campo no es válido.";
		}
	}

	showError(inputText, isValid, divError, mensaje);

	return isValid;
}

function validarDNI(inputText,pattern){
	var isValid = false;
	var mensaje = "El campo es obligatorio.";
	var valor = inputText.value.trim();
	var divError = document.getElementById("error-"+inputText.name);

	if(valor != '' && valor != null) {
		if(pattern.test(valor)) {
			var letra = valor.substring(8);
			var numero = valor.substring(0,8);
			var letrasAdmitidas = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'N', 'J', 'S', 'Z', 'Q', 'V', 'H', 'L', 'C', 'K', 'E');
			// console.log(letra);
			// console.log(numero);
			// console.log(letrasAdmitidas[numero%23]);
			if(letra == letrasAdmitidas[numero%23]) {
				isValid = true;
			} else {
				mensaje = "La letra no coincide.";
			}
		} else {
			mensaje = "El campo no es válido.";
		}
	}

	showError(inputText, isValid, divError, mensaje);

	return isValid;
}

function validarRadioGenero(){
	var isValid = false;
	var divError = document.getElementById("error-genero");
	for (var i = 0; i < radioGenero.length; i++) {
		if(radioGenero[i].checked == true){
			isValid = true;
		};
	}

	if(isValid) {
		//radioGenero.style.color = "black";
		divError.style.display = "none";
	} else {
		//radioGenero.style.color = "red";
		divError.style.display = "block";
		divError.innerHTML = "El campo es obligatorio";
	}

	return isValid;
}

function validarSelectPaisCiudad(tipo){
	var isValid = false;
	var selectTipo = (tipo == 'pais') ? selectPais : selectCiudad;
	var divError = document.getElementById("error-"+tipo);
	for (var i = 0; i < selectTipo.options.length; i++) {
		if(selectTipo.options[i].selected == true){
			isValid = true;
		};
	}

	if(isValid) {
		selectTipo.style.color = "black";
		divError.style.display = "none";
	} else {
		selectTipo.style.color = "red";
		divError.style.display = "block";
		divError.innerHTML = "El campo es obligatorio";
	}

	return isValid;
}

function showError(inputText, isValid, divError, mensaje){
	if(isValid) {
		inputText.style.color = "black";
		divError.style.display = "none";
	} else {
		inputText.style.color = "red";
		divError.style.display = "block";
		divError.innerHTML = mensaje;
	}
}

function validar(){
	var isValid = true;

	isValid = validarCampo(inputNombre, patternNombre);

	if(isValid)
		isValid = validarCampo(inputApellidos, patternApellidos);

	if(isValid)
		isValid = validarCampo(inputApellidos, patternApellidos);

	if(isValid)
		isValid = validarCampo(inputTelefono, patternTelefono);

	if(isValid)
		isValid = validarDNI(inputDNI, patternDNI);

	if(isValid)
		isValid = validarRadioGenero();

	if(isValid)
		isValid = validarCampo(inputCalle, patternCalle);

	if(isValid)
		isValid = validarCampo(inputNumero, patternNumero);

	if(isValid)
		isValid = validarCampo(inputPiso, patternPiso);

	if(isValid)
		isValid = validarCampo(inputPuerta, patternPuerta,false);

	if(isValid)
		isValid = validarSelectPaisCiudad('pais');

	if(isValid)
		isValid = validarSelectPaisCiudad('ciudad');

	if(isValid) {
		insertFila();
	}
}

function insertFila(){
	var td, text;
	var tr = document.createElement("tr");

	td = document.createElement("td");
	text = document.createTextNode(inputNombre.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputApellidos.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputTelefono.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputDNI.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(getRadioGeneroSelected());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputCalle.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputNumero.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputPiso.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(inputPuerta.value.trim());
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(getSelectPaisCiudadSelected("pais"));
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	text = document.createTextNode(getSelectPaisCiudadSelected("ciudad"));
	td.appendChild(text);
	tr.appendChild(td);

	td = document.createElement("td");
	var btnDel = document.createElement("button");
	btnDel.setAttribute("class","btn btn-danger");
	btnDel.setAttribute("onclick","delFila(this);");
	var i = document.createElement("i");
	i.setAttribute("class","fas fa-trash");
	btnDel.appendChild(i);
	td.appendChild(btnDel);
	tr.appendChild(td);

	console.log(tr);
	console.log(miTabla.children);

	miTabla.children[1].appendChild(tr);
};

function delFila(btn){
	var fila = btn.parentNode.parentNode;
	miTabla.children[1].removeChild(fila);
}

function getRadioGeneroSelected(){
	var selected;
	for (var i = 0; i < radioGenero.length; i++) {
		if(radioGenero[i].checked == true){
			selected = radioGenero[i].value;
		};
	}

	return selected;
}

function getSelectPaisCiudadSelected(tipo){
	var selectTipo = (tipo == 'pais') ? selectPais : selectCiudad;
	return selectTipo.options[selectTipo.options.selectedIndex].value;
}

function resetForm(){
	inputNombre.value = "";
	inputNombre.style.color = "black";
	document.getElementById("error-nombre").style.display="none";

	inputApellidos.value = "";
	inputApellidos.style.color = "black";
	document.getElementById("error-apellidos").style.display="none";

	inputTelefono.value = "";
	inputTelefono.style.color = "black";
	document.getElementById("error-telefono").style.display="none";

	inputDNI.value = "";
	inputDNI.style.color = "black";
	document.getElementById("error-dni").style.display="none";

	inputCalle.value = "";
	inputCalle.style.color = "black";
	document.getElementById("error-calle").style.display="none";

	inputNumero.value = "";
	inputNumero.style.color = "black";
	document.getElementById("error-numero").style.display="none";

	inputPiso.value = "";
	inputPiso.style.color = "black";
	document.getElementById("error-piso").style.display="none";

	inputPuerta.value = "";
	inputPuerta.style.color = "black";
	document.getElementById("error-puerta").style.display="none";

	for (var i = 0; i < radioGenero.length; i++) {
		radioGenero[i].checked = false;
	}
	document.getElementById("error-genero").style.display="none";

	for (var i = 0; i < selectPais.options.length; i++) {
		selectPais.options[i].selected = false;
	}
	selectPais.options[0].selected = true;
	document.getElementById("error-pais").style.display="none";

	for (var i = selectCiudad.options.length; i > 0; i--) {
		selectCiudad.options[i] = null;
	}
	selectCiudad.options[0] = new Option("Selecciona primero un país","");
	selectCiudad.options[0].selected = true;
	document.getElementById("error-ciudad").style.display="none";

	inputNombre.focus();
}

function insertDataForm(){
	inputNombre.value = "John";
	inputApellidos.value = "Doe";
	inputTelefono.value = "(+34)-900900900"
	inputDNI.value = "12345678Z";
	radioGenero[0].checked = true;
	inputCalle.value = "Calle Irun";
	inputNumero.value = "20";
	inputPiso.value = "4";
	inputPuerta.value = "C";
	selectPais.options[1].selected = true;

	selectCiudad.options[0] = new Option("Selecciona ciudad de España","");
	selectCiudad.options[1] = new Option("Madrid","Madrid");
	selectCiudad.options[2] = new Option("Barcelona","Barcelona");
	selectCiudad.options[3] = new Option("Segovia","Segovia");
	selectCiudad.options[1].selected = true;
}