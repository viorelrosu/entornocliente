var personas = new Array();

function validar(){
	var isValid = true;
	isValid = validarNombre();
	isValid = validarApellidos();
	isValid = validarDireccion();
	isValid = validarFechaNacimiento();
	isValid = validarGenero();
	isValid = validarCodigoPostal();
	if(isValid) {
		var persona = crearPersona();
		personas.push(persona);
		console.log(personas);
		introducirDatos();
	}
}

function limpiar(){
	document.getElementById('nombre').value = '';
	document.getElementById('apellidos').value = '';
	document.getElementById('direccion').value = '';
	document.getElementById('fecha_nacimiento').value = '';
	document.getElementById('genero').value = '';
	document.getElementById('codigo_postal').value = '';
}

function listar(){
	Persona.mostrarDatosPersonas(personas);
}

function crearPersona(){
	var datos = recogerDatos();
	var persona = new Persona;
	persona.nombre = datos['nombre'];
	persona.apellidos = datos['apellidos'];
	persona.direccion = datos['direccion'];
	persona.fecha_nacimiento = datos['fecha_nacimiento'];
	persona.genero = datos['genero'];
	persona.codigo_postal = datos['codigo_postal'];
	return persona;
}

function recogerDatos(){
	var datos = new Array();
	datos['nombre'] = document.getElementById('nombre').value;
	datos['apellidos'] = document.getElementById('apellidos').value;
	datos['direccion'] = document.getElementById('direccion').value;
	datos['fecha_nacimiento'] = document.getElementById('fecha_nacimiento').value;
	datos['genero'] = document.getElementById('genero').value;
	datos['codigo_postal'] = document.getElementById('codigo_postal').value;
	console.log(datos);
	return datos;
}

function introducirDatos(){
	document.getElementById('nombre').value = 'John';
	document.getElementById('apellidos').value = 'Doe';
	document.getElementById('direccion').value = 'C/Venezuela nr. 2';
	document.getElementById('fecha_nacimiento').value = '10/10/1890';
	document.getElementById('genero').value = 'Masculino';
	document.getElementById('codigo_postal').value = '12345';

	console.log('datos introducidos');
	var rand = Math.floor( Math.random() * (8-4+1)) +1;
	console.log( rand );
}

introducirDatos()

