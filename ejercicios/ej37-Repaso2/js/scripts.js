var personas = new Array();

function validar(){
	var isValid = true;
	isValid = validarNombre();
	isValid = validarApellidos();
	isValid = validarDireccion();
	isValid = validarTelefono();
	isValid = validarSueldo();

	if(isValid){
		var persona = crearPersona();
		personas.push(persona);

		showAlert();
		setTimeout(hideAlert,2000);
	}
	console.log(personas);
}

function showAlert(){
	document.getElementById('divAlertMensaje').style.display = 'block';
	document.getElementById('alertMensaje').innerHTML = 'Persona registrada correctamente.';
}

function hideAlert(){
	document.getElementById('divAlertMensaje').style.display = 'none';
	document.getElementById('alertMensaje').innerHTML = '';
}

function listar(){
	Persona.mostrarDatosPersonas(personas);
}

function limpiar(){
	document.getElementById('nombre').value = '';
	document.getElementById('apellidos').value = '';
	document.getElementById('direccion').value = '';
	document.getElementById('telefono').value = '';
	document.getElementById('sueldo').value = '';
}

function recogerDatos(){
	var datos = new Array();
	datos['nombre'] = document.getElementById('nombre').value;
	datos['apellidos'] = document.getElementById('apellidos').value;
	datos['direccion'] = document.getElementById('direccion').value;
	datos['telefono'] = document.getElementById('telefono').value;
	datos['sueldo'] = document.getElementById('sueldo').value;
	return datos;
}

function insertarDatos(){
	document.getElementById('nombre').value = 'John';
	document.getElementById('apellidos').value = 'Doe';
	document.getElementById('direccion').value = 'C/Venezuela, nr. 20, 28001, Madrid';
	document.getElementById('telefono').value = '612345678';
	document.getElementById('sueldo').value = '501';
}

function crearPersona(){
	var datos = recogerDatos();
	var persona = new Persona();
	persona.nombre = datos['nombre'];
	persona.apellidos = datos['apellidos'];
	persona.direccion = datos['direccion'];
	persona.telefono = datos['telefono'];
	persona.sueldo = datos['sueldo'];
	return persona;
}

insertarDatos();
hideAlert();