var diasYear = new Array();
diasYear[01] = 31;
diasYear[02] = 29;
diasYear[03] = 31;
diasYear[04] = 30;
diasYear[05] = 31;
diasYear[06] = 30;
diasYear[07] = 31;
diasYear[08] = 31;
diasYear[09] = 30;
diasYear[10] = 31;
diasYear[11] = 30;
diasYear[12] = 31;



function validarNombre(){
	var isValid = true;
	var campoName = 'nombre';
	var divError = document.getElementById('error-'+campoName);
	var campoText = document.getElementById(campoName).value.trim().toLowerCase();
	var mensaje = '';

	if( (campoText == '') || (campoText.length < 1)) {
		isValid = false;
		mensaje = 'El campo '+campoName+' es obligatorio.';
	}

	if( isValid && ((campoText.length < 3) || (campoText.length > 20)) ) {
		isValid = false;
		mensaje = 'El '+campoName+' tiene que tener entre 3 y 20 carácteres';
	}

	if( isValid ) {
		var permitido = 'abcdefghijklmnñopqrstuvxyzw+ç- ';
		var noPermitidos = '';
		for (var i = campoText.length - 1; i >= 0; i--) {
			if( permitido.indexOf(campoText.charAt(i)) == -1 ) {
				isValid = false;
				noPermitidos += campoText.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(divError, isValid, mensaje);

	return isValid;
}

function validarApellidos(){
	var isValid = true;
	var campoName = 'apellidos';
	var divError = document.getElementById('error-'+campoName);
	var campoText = document.getElementById(campoName).value.trim().toLowerCase();
	var mensaje = '';

	if( (campoText == '') || (campoText.length < 1)) {
		isValid = false;
		mensaje = 'El campo '+campoName+' es obligatorio.';
	}

	if( isValid && ((campoText.length < 3) || (campoText.length > 30)) ) {
		isValid = false;
		mensaje = 'El campo '+campoName+' tiene que tener entre 3 y 30 carácteres';
	}

	if( isValid ) {
		var permitido = 'abcdefghijklmnñopqrstuvxyzw+ç- ';
		var noPermitidos = '';
		for (var i = campoText.length - 1; i >= 0; i--) {
			if( permitido.indexOf(campoText.charAt(i)) == -1 ) {
				isValid = false;
				noPermitidos += campoText.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(divError, isValid, mensaje);

	return isValid;
}

function validarDireccion(){
	var isValid = true;
	var campoName = 'direccion';
	var divError = document.getElementById('error-'+campoName);
	var campoText = document.getElementById(campoName).value.trim().toLowerCase();
	var mensaje = '';

	if( (campoText == '') || (campoText.length < 1)) {
		isValid = false;
		mensaje = 'El campo '+campoName+' es obligatorio.';
	}

	if( isValid && ((campoText.length < 3) || (campoText.length > 35)) ) {
		isValid = false;
		mensaje = 'El '+campoName+' tiene que tener entre 3 y 35 carácteres';
	}

	if( isValid ) {
		var permitido = 'abcdefghijklmnñopqrstuvxyzw+ç-0123456789,/. ';
		var noPermitidos = '';
		for (var i = campoText.length - 1; i >= 0; i--) {
			if( permitido.indexOf(campoText.charAt(i)) == -1 ) {
				isValid = false;
				noPermitidos += campoText.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(divError, isValid, mensaje);

	return isValid;
}

function validarFechaNacimiento(){
	var isValid = true;
	var campoName = 'fecha_nacimiento';
	var divError = document.getElementById('error-'+campoName);
	var campoText = document.getElementById(campoName).value.trim();
	var mensaje = '';

	if( (campoText == '') || (campoText.length < 1)) {
		isValid = false;
		mensaje = 'El campo fecha de nacimiento es obligatorio.';
	}

	if( isValid ) {
		var permitido = '0123456789/';
		var noPermitidos = '';
		for (var i = campoText.length - 1; i >= 0; i--) {
			if( permitido.indexOf(campoText.charAt(i)) == -1 ) {
				isValid = false;
				noPermitidos += campoText.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Formato de fecha dd/mm/yyyy.<br>';
			mensaje += 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	if( isValid ) {
		var fechaArray = campoText.split('/');
		var anio = parseInt(fechaArray[2]);
		var mes = parseInt(fechaArray[1]);
		var dia = parseInt(fechaArray[0]);
		var fechaNacimiento = new Date(anio,mes,dia);
		var fechaActual = new Date();
		var anioActual = fechaActual.getFullYear();
		var mesActual = fechaActual.getMonth();
		var diaActual = fechaActual.getDate();

		if (mes != 2) {
			if( (dia<1) || (dia>diasYear[mes]) ) {
				isValid = false;
				mensaje = 'Día incorrecto.'
			}
		} else {
			var diasMax = 28;
			if ( ( (anio % 4 == 0) && (anio % 100 != 0 ) ) || (anio % 400 == 0) ) {
				diasMax = 29;
				//console.log('ano bisiesto');
			}

			if( (dia<1) || (dia>diasMax) ) {
				isValid = false;
				mensaje = 'Día incorrecto.'
			}
		}

		if( isValid && (mes<1) || (mes>12) ) {
			isValid = false;
			mensaje = 'Mes incorrecto.'
		}

		if( isValid && (anio>anioActual) ) {
			isValid = false;
			mensaje = 'El año no puede ser menor que el año actual.';
		}

		if( isValid && (fechaActual < fechaNacimiento ) ) {
			isValid = false;
			mensaje = 'La fecha de nacimiento no puede ser posterior a la fecha actual.';
		}

	}

	showError(divError, isValid, mensaje);

	return isValid;
}

function validarGenero(){
	var isValid = true;
	var campoName = 'genero';
	var divError = document.getElementById('error-'+campoName);
	var campoText = document.getElementById(campoName).value.trim();
	var mensaje = '';

	if( (campoText == '') || (campoText.length < 1)) {
		isValid = false;
		mensaje = 'El campo género es obligatorio.';
	}

	if( isValid && (campoText != 'Masculino') && (campoText != 'Femenino') ) {
		isValid = false;
		mensaje = 'Opciones permitidos son: Masculino o Femenino.';
	}

	showError(divError, isValid, mensaje);

	return isValid;
}

function validarCodigoPostal(){
	var isValid = true;
	var campoName = 'codigo_postal';
	var divError = document.getElementById('error-'+campoName);
	var campoText = document.getElementById(campoName).value.trim().toLowerCase();
	var mensaje = '';

	if( (campoText == '') || (campoText.length < 1)) {
		isValid = false;
		mensaje = 'El campo código postal es obligatorio.';
	}

	if( isValid && ((campoText.length != 5)) ) {
		isValid = false;
		mensaje = 'El código postal tiene que tener 5 carácteres';
	}

	if( isValid ) {
		var permitido = '0123456789';
		var noPermitidos = '';
		for (var i = 0; i <= campoText.length - 1; i++) {
			if( isNaN(campoText.charAt(i)) ) {
				isValid = false;
				noPermitidos += campoText.charAt(i) + ' ';
			}
		}

		if(!isValid) {
			mensaje = 'Has introducido carácteres no permitidos: ' + noPermitidos;
		}
	}

	showError(divError, isValid, mensaje);

	return isValid;
}

function showError(divError, isValid, mensaje) {
	if(!isValid) {
		divError.style.display = 'block';
		divError.innerHTML = mensaje;
	} else {
		divError.style.display = 'none';
		divError.innerHTML = '';
	}
}