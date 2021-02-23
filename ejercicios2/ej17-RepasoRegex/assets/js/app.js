window.onload = function() {
	document.form.onsubmit = () => false;

	document.form.campo.onkeyup = () => validarCampo();
}


function validarCampo(small=true) {
	var isValid = false;
	var inputText = document.form.campo;
	var valor = inputText.value.trim();
	var mensaje = "El campo es obligatorio";
	var divError = document.getElementById("error-campo");

	if(valor != '' && valor != null) {
		if(small) {
			valor = valor.toLowerCase();
		}
		var pattern;
		//nombre
		// pattern = /^([a-záéíóúçñ\ \-]{3,10})$/;

		//telefono - (+34)-900900900
		//pattern = /^(\()(\+)([\d]{2,3})(\))(\-)([6-9][\d]{8})$/;

		//telefono - (+34)-900-90-09-00
		//pattern = /^([\(])([\+])([\d]{2,3})([\)])([\-])([\d]{3})([\-])([\d]{2})([\-])([\d]{2})([\-])([\d]{2})$/;

		//dni
		//pattern = /^([\d]{8})([a-z]{1})$/;

		//calle
		//pattern = /^([a-záéíóúçñ\-\ \(\)]{3,10})$/;

		//numero
		//pattern = /^([1-9]{1})(\d{1})?$/;

		//puerta
		//pattern = /^([1-9]|[a-i]){1}$/;

		//email - Nombre_usuario + @ + servidor + dominio
		//pattern = /^((\w+)(([\-]|[\.])?(\w+)){0,})(@)((\w+)(([\-]|[\.])?(\w+)){0,})((\.)([a-z]{2,4})){1,}$/;

		//contraseña
		//pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[\\\"\$%&\/\=\[\]\{\}():;.,]).{6,15}$/
		//pattern= /^(?=.*\d)(?=.*[a-z])(\w){5,10}$/;

		//matricula
		//pattern = /^([a-z]{1,2})(\ )(\d{4})(\ )([abcdefghijklmnoprstuvxyw]{3})$/;

		//fechas
		/*
			comprobar fechas
			dia: 1-31
			mes: 1-12
			año: dos o cuatro digitos 12-12-2020 o 12/12/2020 pero no 12/12-2020
		*/
		//pattern = /^((0[1-9]|1[1-9]|2[1-9]|3[01])(\-)(0[1-9]|1[12])(\-)([\d]{4}))|((0[1-9]|1[1-9]|2[1-9]|3[01])(\/)(0[1-9]|1[12])(\/)([\d]{4}))$/;

		//hora
		//pattern = /^(0[0-9]|1[0-9]|2[0-4])(\:)([0-5]\d)(\:)([0-5]\d)$/;

		//url - https://www.google.com
		pattern = /^((http(s)?)(\:)((\/\/)|(\\\\)))?(www\.)?([\w]+)((\.)+([\w]{2,4}))+$/;
		if(pattern.test(valor)){
			isValid = true;
		} else {
			mensaje = "El campo no es válido.";
		}
	}

	showError(inputText, isValid, divError, mensaje);
}

function showError(inputText, isValid, divError, mensaje) {
	if(isValid) {
		divError.setAttribute("style","display:none");
		inputText.setAttribute("class", "form-control");
	} else {
		divError.setAttribute("style","display:block");
		divError.innerHTML = mensaje;
		inputText.setAttribute("class", "form-control error");
	}
}