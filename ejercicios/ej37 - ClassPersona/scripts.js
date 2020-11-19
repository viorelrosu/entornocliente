	

	var personas = new Array();
	var divDatos = document.getElementById('divDatos');
	var divDatosPersona = document.getElementById('divDatosPersona');

	function checkNombre(){

	}

	function checkApellidos(){
		
	}

	function checkGenero(){
		
	}

	function checkFechaNacimiento(){
		
	}

	function checkCodigoPostal(){
		
	}

	function checkDireccion(){
		
	}

	function addPersona(){
		console.log(document.getElementById('divDatos'));
		var edad = parseInt(document.getElementById('edad').value);
		var peso = parseInt(document.getElementById('peso').value);

		var persona = new Persona(nombre, apellidos, direccion, fecha_nacimiento, genero, masculino);
		personas.push(persona);

		var mensaje = 'Humano añadido correctamente';
		divDatos.innerHTML = mensaje;
		humano.muestraUnDato('divDatosHumano');
	}

	function list(){
		Persona.mostrarPersonas('divDatos', personas);
	}