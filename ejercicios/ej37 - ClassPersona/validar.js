	function comprobarDatosCampos(tipo){
		var error=false;

		if(!error)
			error = validarNombre(tipo);

		if(!error)
			error = validarApellidos(tipo);

		if(!error)
			error = validarDireccion(tipo);

		if(!error)
			error = validarFechaNacimiento(tipo);

		if(!error)
			error = validarCodigoPostal(tipo);

		return error;
	};

	function validarNombre(tipo){
		var text = document.getElementById(tipo+'Nombre').value;
		var divError = document.getElementById('error-'+tipo+'-nombre');
		var mensaje = 'No hay errores'; var error = false;
		var check = checkIsCharacter(text);
		if(check['error']) {
			error = true;
			mensaje = 'Tienes carácteres no permitidos: ' + check['prohibidas'];
		}
		if(checkMin(text,3)){
			error = true;
			mensaje = 'Limite mínimo permitido: 3.';
		}
		if(checkMax(text,20)){
			error = true;
			mensaje = 'Limite máximo permitido: 20.';
		}

		showError(error, mensaje, divError);

		return error;
	}

	function validarApellidos(tipo){
		var text = document.getElementById(tipo+'Apellidos').value;
		var divError = document.getElementById('error-'+tipo+'-apellidos');
		var mensaje = 'No hay errores'; var error = false;
		var check = checkIsCharacter(text);
		if(check['error']) {
			error = true;
			mensaje = 'Tienes carácteres no permitidos: ' + check['prohibidas'];
		}
		if(checkMin(text,3)){
			error = true;
			mensaje = 'Limite máximo permitido: 3.';
		}
		if(checkMax(text,20)){
			error = true;
			mensaje = 'Limite máximo permitido: 30.';
		}

		showError(error, mensaje, divError);

		return error;
	}

	function validarDireccion(tipo){
		var text = document.getElementById(tipo+'Direccion').value;
		var divError = document.getElementById('error-'+tipo+'-direccion');
		var mensaje = 'No hay errores'; var error = false;

		var check = checkIsCharacterNumber(text);
		if(check['error']) {
			error = true;
			mensaje = 'Tienes carácteres no permitidos: ' + check['prohibidas'];
		}

		if(checkMin(text,3)){
			error = true;
			mensaje = 'Limite mínimo permitido: 3.';
		}

		if(checkMax(text,35)){
			error = true;
			mensaje = 'Limite máximo permitido: 35.';
		}
		showError(error, mensaje, divError);

		return error;
	}

	function validarGenero(tipo){
		var text = document.getElementById(tipo+'Genero').value;
		var divError = document.getElementById('error-'+tipo+'-genero');
		var permitido = new Array('Masculino','Femenino');
		var mensaje = 'No hay errores'; var error = false;
		if (!pets.includes(text)) {
			error = true;
			mensaje = 'Solamente permitidos: Masculino y Femenino.'
		};
		showError(error, mensaje, divError);

		return error;
	}

	function validarFechaNacimiento(tipo){
		var text = document.getElementById(tipo+'FechaNacimiento').value;
		var divError = document.getElementById('error-'+tipo+'-fecha_nacimiento');
		var mensaje = 'No hay errores'; var error = false;
		var textArray = text.split('/');
		var dia = parseInt(textArray[0]);
		var mes = parseInt(textArray[1]);
		var anio = parseInt(textArray[2]);
		var fechaHoy = new Date();

		//comprobamos los caracteres
		var check = checkIsCharacherDate(text);
		if(check['error']){
			error = true;
			mensaje = 'Solamente números y / son permitidos: ' + check['prohibidas'] + '<br />';
			mensaje += 'Formato de fecha permitido: dd/mm/yyyy';
		}

		//comprobamos el dia
		if(!error) {

			if( textArray[0].length != 2 ) {
				error = true;
				mensaje = 'Día incorrecto. Formato dd.';
			} else if( (dia==0) || (dia==00) || (dia>diasAnios[mes]) ) {
				error = true;
				mensaje = 'Día incorrecto.';
			}

		}

		//comprobamos el mes
		if(!error) {

			if( textArray[1].length != 2) {
				error = true;
				mensaje = 'Mes incorrecto. Formato mm.';
			} else if( (mes==0) || (mes==00) || (mes>12) ) {
				error = true;
				mensaje = 'Mes incorrecto.';
			}
		}

		//comprobamos el año
		if(!error) {

			if( textArray[2].length != 4) {
				error = true;
				mensaje = 'Año incorrecto. Formato yyyy.';
			} else if((anio==0) || (anio==0000) || ( anio>fechaHoy.getFullYear() ) ){
				error = true;
				mensaje = 'Año incorrecto.';
			}
		}

		//comprobamos si es fecha anterior
		if(!error) {
			var fechaNacimiento = new Date(anio,mes,dia);
			if(fechaHoy < fechaNacimiento) {
				error = true;
				mensaje = 'La fecha tiene que ser superior al día actual.';
			}
		}

		showError(error, mensaje, divError);

		return error;
	}

	function validarCodigoPostal(tipo){
		var text = document.getElementById(tipo+'CodigoPostal').value;
		var divError = document.getElementById('error-'+tipo+'-codigo_postal');
		var mensaje = 'No hay errores'; var error = false;

		if(text == ''){
			//console.log('estoy en text');
			error = true;
			mensaje = 'Campo obligatorio.';
		}

		if(!error) {
			var check = checkIsNumero(text);
			if(check['error']){
				error = true;
				mensaje = 'Solamente números permitidos: ' + check['prohibidas'];
			}
		}

		if(!error && checkMin(text,5)){
			error = true;
			mensaje = 'Obligatorio 5 carácteres.';
		}

		if(!error && checkMax(text,5)){
			error = true;
			mensaje = 'Obligatorio 5 carácteres.';
		}

		showError(error, mensaje, divError);

		return error;
	}

	function showError(error, mensaje, divError) {
		if(error) {
			divError.style.display = 'block';
			divError.innerHTML = mensaje;
		} else {
			divError.style.display = 'none';
			divError.innerHTML = '';
		}
	}

	function checkMin(text, num){
		return (text.length < num);
	}

	function checkMax(text, num){
		return (text.length > num);
	}

	function checkIsNumero(text){
		var error = false;
		var permitido = '0123456789';
		var prohibidas = '';

		for (var i = 0; i < text.length; i++) {
			if( permitido.indexOf(text.charAt(i)) == -1 )  {
				error = true;
				prohibidas += text.charAt(i)+' ';
			}
		}

		var res = new Array();
		res['error'] = error;
		res['prohibidas'] = prohibidas;

		return res;
	}

	function checkIsCharacherDate(text){
		var error = false;
		var permitido = '0123456789/';
		var prohibidas = '';

		for (var i = 0; i < text.length; i++) {
			if( permitido.indexOf(text.charAt(i)) == -1 )  {
				error = true;
				prohibidas += text.charAt(i)+' ';
			}
		}

		var res = new Array();
		res['error'] = error;
		res['prohibidas'] = prohibidas;

		return res;
	}

	function checkIsCharacterNumber(text){
		var error = false;
		var permitido = 'abcdefghijklmnopqrstuvxyzwçABCDEFGHIJKLMOPQRSTUVXYZWÇ-0123456789/, ';
		var prohibidas = '';

		for (var i = 0; i < text.length; i++) {
			if( permitido.indexOf(text.charAt(i)) == -1 )  {
				error = true;
				prohibidas += text.charAt(i)+' ';
			}
		}

		var res = new Array();
		res['error'] = error;
		res['prohibidas'] = prohibidas;

		return res;
	}

	function checkIsCharacter(text){
		var error = false;
		var permitido = 'abcdefghijklmnopqrstuvxyzwçABCDEFGHIJKLMOPQRSTUVXYZWÇ- ';
		var prohibidas = '';

		for (var i = 0; i < text.length; i++) {
			if( permitido.indexOf(text.charAt(i)) == -1 )  {
				error = true;
				prohibidas += text.charAt(i)+' ';
			}
		}

		var res = new Array();
		res['error'] = error;
		res['prohibidas'] = prohibidas;

		return res;
	}