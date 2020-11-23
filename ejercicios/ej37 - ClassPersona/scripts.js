	var personas = new Array(persona1, persona2);

	var divNavegador = document.getElementById('divNavegador');
	var divNew = document.getElementById('divNew');
	var divEdit = document.getElementById('divEdit');
	var divDel = document.getElementById('divDel');

	var divDatos = document.getElementById('divDatos');
	var divDatosPersona = document.getElementById('divDatosPersona');
	var divDatosPersonaDel = document.getElementById('divDatosPersonaDel');

	var alertError = document.getElementById('idAlertError');
	var alertSuccess = document.getElementById('idAlertSuccess');
	var alertWarning = document.getElementById('idAlertWarning');
	var alertInfo = document.getElementById('idAlertInfo');
	var alertVolver = document.getElementById('idVolver');

	var index = 0;
	var myWindow;
	var accion = 'inicio';

	var elements = new Array(
		'divNavegador',
		'divNew',
		'divEdit',
		'divDel',
	);

	var disableElements = new Array();
	disableElements['inicio'] = new Array('divNew','divEdit','divDel');
	disableElements['new'] = new Array('divNavegador','divEdit','divDel');
	disableElements['edit'] = new Array('divNavegador', 'divNew','divDel');
	disableElements['del'] = new Array('divNavegador', 'divNew','divEdit');

	function showAll() {
		elements.forEach((value)=>{
			document.getElementById(value).style.display = 'block';
		});
	}

	function hideAll() {
		elements.forEach((value)=>{
			document.getElementById(value).style.display = 'none';
		});
	}

	function hideElements(tipo) {
		//console.log(tipo);
		disableElements[tipo].forEach((value)=>{
			document.getElementById(value).style.display = 'none';
		});
	}

	function setEscenario(tipo){
		showAll();
		hideElements(tipo);

		if(tipo == 'edit') {
			document.getElementById('editNombre').value = personas[index].nombre;
			document.getElementById('editApellidos').value = personas[index].apellidos;
			document.getElementById('editDireccion').value = personas[index].direccion;
			document.getElementById('editFechaNacimiento').value = personas[index].fecha_nacimiento;
			//document.getElementById('editGenero').value = personas[index].genero;
			document.getElementById('editCodigoPostal').value = personas[index].codigo_postal;
		}

		if(tipo == 'del') {
			personas[index].mostrarDatos('divDatosPersonaDel');
		}
	}

	function setAccion(tipo){
		accion = tipo;

		setEscenario(tipo);

		//informamos;
		setAlertInfo();
	}

	function inicializar(){
		showAll();
		hideElements(accion);
		hideAlerts();
		personas[index].mostrarDatos('divDatosPersona');
		divNavegador.style.display = 'block';
	}

	function recorrerArray(tipo) {
		switch(tipo) {
			case 'first':
				index = 0;
			break;
			case 'prev':
				index--;
			break;
			case 'next':
				index++;
			break;
			case 'last':
				index = personas.length-1;
			break;
		}

		if(index < 0) {
			index = personas.length-1;
		}

		if(index > personas.length-1) {
			index = 0;
		}

		personas[index].mostrarDatos('divDatosPersona');
	}

	function hideAlerts(){
		alertError.style.display = 'none';
		alertSuccess.style.display = 'none';
		alertWarning.style.display = 'none';
		alertInfo.style.display = 'none';
		alertVolver.style.display = 'none';
	}

	function setAlertInfo(){
		hideAlerts();
		switch(accion){
			case 'new':
				alertInfo.innerHTML = 'Introduce los datos';
				break;

			case 'edit':
				alertInfo.innerHTML = 'Estas modificando persona: ' + personas[index].getTituloNombreApellidos();
				break;

			case 'del':
				alertInfo.innerHTML = 'Estas eliminado persona: ' + personas[index].getTituloNombreApellidos();
				break;
		}
		alertInfo.style.display = 'block';
		//console.log(alertInfo);
	}

	function setAlertError(mensaje){
		hideAlerts();
		alertError.innerHTML = mensaje;
		alertError.style.display = 'block';
	}

	function setAlertSuccess(mensaje){
		hideAlerts();
		alertSuccess.innerHTML = mensaje;
		alertSuccess.style.display = 'block';
	}

	function setAlertWarning(mensaje){
		document.getElementById('mensajeConfirm').innerHTML = mensaje;
		alertWarning.style.display = 'block';
	}

	function showVolver(){
		hideAll();
		alertVolver.style.display = 'block';
	}

	function confirmCancel(){
		alertWarning.style.display = 'none';
	}

	function checkIndex(){
		var numLength = personas.length;

		if(index == numLength) {
			index = numLength-1;
		}
	}

	function confirm(){
		switch(accion){
			case 'del':
				delPersona();
				break;

			case 'edit':
				editPersona();
				break;
		}
	}

	function cancel(){
		accion = 'inicio';
		inicializar();
	}

	function addPersona() {
		//comprobarDatosCampos
		var error = comprobarDatosCampos('new');

		if(!error) {
			//recogerDatosCampos
			var datos = recogerDatosCampos('new');
			//console.log(datos);

			//creamos la persona
			var persona = new Persona();
			persona.nombre = datos['nombre'];
			persona.apellidos = datos['apellidos'];
			persona.direccion = datos['direccion'];
			persona.fecha_nacimiento = datos['fecha_nacimiento'];
			persona.genero = datos['genero'];
			persona.codigo_postal = datos['codigo_postal'];

			//insertamos persona en array de personas
			personas.push(persona);

			//informamos
			setAlertSuccess('Muy bien, persona: '+ persona.getTituloNombreApellidos() +' insertada correctamente');

			showVolver();
			resetCamposAlta('new');

		} else {
			setAlertError('Comprueba los errores del formulario.');
		}
	}

	function editPersona(){

		var error = comprobarDatosCampos('edit');

		if(!error) {
			//recogerDatosCampos
			var datos = recogerDatosCampos('edit');
			console.log(datos);

			//modificamos los datos
			personas[index].nombre = datos['nombre'];
			personas[index].apellidos = datos['apellidos'];
			personas[index].direccion = datos['direccion'];
			personas[index].fecha_nacimiento = datos['fecha_nacimiento'];
			personas[index].genero = datos['genero'];
			personas[index].codigo_postal = datos['codigo_postal'];

			setAlertSuccess('Muy bien, persona modificado correctamente');
			showVolver();

		} else {
			setAlertError('Comprueba los errores del formulario.');
		}
	}

	function delPersona(){
		personas.splice(index, 1);
		setAlertSuccess('Muy bien, persona eliminada correctamente');
		checkIndex();
		showVolver();
	};

	function recogerDatosCampos(tipo){
		var nombre = document.getElementById(tipo+'Nombre').value;
		var apellidos = document.getElementById(tipo+'Apellidos').value;
		var direccion = document.getElementById(tipo+'Direccion').value;
		var fecha_nacimiento = document.getElementById(tipo+'FechaNacimiento').value;
		var genero = document.querySelector('input[name="'+tipo+'-genero"]:checked').value;
		var codigo_postal = document.getElementById(tipo+'CodigoPostal').value;

		var datos = new Array();
		datos['nombre'] = nombre;
		datos['apellidos'] = apellidos;
		datos['direccion'] = direccion;
		datos['fecha_nacimiento'] = fecha_nacimiento;
		datos['genero'] = genero;
		datos['codigo_postal'] = codigo_postal;
		return datos;
	}

	function resetCamposAlta(tipo){
		document.getElementById(tipo+'Nombre').value = '';
		document.getElementById(tipo+'Apellidos').value = '';
		document.getElementById(tipo+'Direccion').value = '';
		document.getElementById(tipo+'FechaNacimiento').value = '';
		document.getElementById(tipo+'GeneroMasculino').removeAttribute('checked');
		document.getElementById(tipo+'GeneroFemenino').removeAttribute('checked');
		document.getElementById(tipo+'CodigoPostal').value = '';
	}


	function aceptar(){
		//console.log(accion);
		switch(accion){
			case 'new':
				addPersona();
				break;
			case 'edit':
				//pedir confirmación
				setAlertWarning('¿Estás seguro de modificar la persona: '+ personas[index].getTituloNombreApellidos() +' ?');
				break;
			case 'del':
				//pedir confirmación
				setAlertWarning('¿Estás seguro de eliminar la persona: '+ personas[index].getTituloNombreApellidos() +' ?');
				break;
		}
	}

	function list(){
		if( (typeof(myWindow) == 'undefined') || (myWindow.closed) ) {
			var html = Persona.mostrarPersonas(personas);

			myWindow = window.open('','Listado Personas','width=700,height=700');

			// Abre la corriente de datos del documento para escribir
			myWindow.document.open();

			// Crea el documento
			myWindow.document.write("<html><head><title>Lista de Personas</title></head><body>");
			myWindow.document.write("<div style=\"text-align:center;\">");
			myWindow.document.write("<h1>Lista de Personas</h1>");
			myWindow.document.write(html);
			myWindow.document.write('<p><button onClick="window.close()">Cerrar ventana</button>');
			myWindow.document.write("</div></body></html>");

			// cierra la corriente de datos del documento 
			myWindow.document.close();
		} else {
			myWindow.focus();
		}

	}

	inicializar();