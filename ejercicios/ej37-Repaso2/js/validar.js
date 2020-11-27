var caracteres = 'abcdefghijklmnñopqrstuvxzywç';
var numeros = '0123456789';
var especiales = '/,.';

function validarNombre(){
	var isValid = true;
	var campoName = 'nombre';
	var campoTexto = document.getElementById(campoName).value.trim().toLowerCase();
	var divError = document.getElementById('error-'+campoName);
	var mensaje = '';

	if( (campoTexto == '') && (campoTexto.length < 1)) {
		isValid = false;
		mensaje = 'El campo es obligatorio.'
	}

	if (isValid && ( (campoTexto.length < 3) || (campoTexto.length > 20) ) ) {
		isValid = false;
		mensaje = 'Carácteres permitidos entre 3 y 20.'
	}

	if (isValid) {
		var permitido = caracteres + ' ';
		var noPermitidos = '';
		for (var i = 0; i <= campoTexto.length-1; i++) {
			if( permitido.indexOf( campoTexto.charAt(i) ) == -1){
				isValid = false;
				noPermitidos += campoTexto.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(isValid, divError,mensaje);

	return isValid;
};
function validarApellidos(){
	var isValid = true;
	var campoName = 'apellidos';
	var campoTexto = document.getElementById(campoName).value.trim().toLowerCase();
	var divError = document.getElementById('error-'+campoName);
	var mensaje = '';

	if( campoTexto == '' && campoTexto.length < 1) {
		isValid = false;
		mensaje = 'El campo es obligatorio.'
	}

	if (isValid && ((campoTexto.length < 3) || (campoTexto.length > 30)) ) {
		isValid = false;
		mensaje = 'Carácteres permitidos entre 3 y 30.'
	}

	if (isValid) {
		var permitido = caracteres + ' ';
		var noPermitidos = '';
		for (var i = 0; i <= campoTexto.length-1; i++) {
			if( permitido.indexOf( campoTexto.charAt(i) ) == -1){
				isValid = false;
				noPermitidos += campoTexto.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(isValid, divError,mensaje);

	return isValid;
};
function validarDireccion(){
	var isValid = true;

	var campoName = 'direccion';
	var campoTexto = document.getElementById(campoName).value.trim().toLowerCase();
	var divError = document.getElementById('error-'+campoName);
	var mensaje = '';

	if( campoTexto == '' && campoTexto.length < 1) {
		isValid = false;
		mensaje = 'El campo es obligatorio.'
	}

	if (isValid && ((campoTexto.length < 3) || (campoTexto.length > 30)) ) {
		isValid = false;
		mensaje = 'Carácteres permitidos entre 3 y 30.'
	}

	if (isValid) {
		var permitido = caracteres + especiales + numeros + ' ';
		var noPermitidos = '';
		for (var i = 0; i <= campoTexto.length-1; i++) {
			if( permitido.indexOf( campoTexto.charAt(i) ) == -1){
				isValid = false;
				noPermitidos += campoTexto.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(isValid, divError,mensaje);

	return isValid;
};
function validarTelefono(){
	var isValid = true;

	var campoName = 'telefono';
	var campoTexto = document.getElementById(campoName).value;
	var divError = document.getElementById('error-'+campoName);
	var mensaje = '';

	if( campoTexto == '' && campoTexto.length < 1) {
		isValid = false;
		mensaje = 'El campo es obligatorio.'
	}

	if (isValid && (campoTexto.length != 9) ) {
		isValid = false;
		mensaje = 'Teléfono mal introducido, debe tener 9 dígitos.'
	}

	if (isValid) {
		switch(parseInt(campoTexto.substr(0,1))){
			case 6:
			case 7:
			case 9:
				break;
			default:
				isValid = false;
				mensaje = 'Teléfono mal introducido, debe empezar por 6/7/9';
		}
	}

	if (isValid) {
		var permitido = numeros;
		var noPermitidos = '';
		for (var i = 0; i <= campoTexto.length-1; i++) {
			if( permitido.indexOf( campoTexto.charAt(i) ) == -1){
				isValid = false;
				noPermitidos += campoTexto.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Solamente numeros: ' + noPermitidos;
		}
	}

	showError(isValid, divError,mensaje);

	return isValid;
};
function validarSueldo(){
	var isValid = true;

	var campoName = 'sueldo';
	var campoTexto = document.getElementById(campoName).value;
	var divError = document.getElementById('error-'+campoName);
	var mensaje = '';

	if( campoTexto == '' && campoTexto.length < 1) {
		isValid = false;
		mensaje = 'El campo es obligatorio.'
	}

	if (isValid && ((parseInt(campoTexto) < 500) || ( parseInt(campoTexto) > 1350)) ) {
		isValid = false;
		mensaje = 'El mínimo es de 500 y el máximo es de 1350.';
	}

	if (isValid) {
		var permitido = numeros;
		var noPermitidos = '';
		for (var i = 0; i <= campoTexto.length-1; i++) {
			if( permitido.indexOf( campoTexto.charAt(i) ) == -1){
				isValid = false;
				noPermitidos += campoTexto.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Solamente números: ' + noPermitidos;
		}
	}

	showError(isValid, divError,mensaje);

	return isValid;
};

function showError(isValid, divError, mensaje){
	if(!isValid) {
		divError.innerHTML = mensaje;
		divError.style.display = 'block';
	} else {
		divError.innerHTML = '';
		divError.style.display = 'none';
	}
}