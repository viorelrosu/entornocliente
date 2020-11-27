class Persona {
	constructor(n,a,d,f,g,c){
		this._nombre = n;
		this._apellidos = a;
		this._direccion = d;
		this._fecha_nacimiento = f;
		this._genero = g;
		this._codigo_postal = c;
	}

	//getters
	get nombre(){
		return this._nombre;
	}

	get apellidos(){
		return this._apellidos;
	}

	get direccion(){
		return this._direccion;
	}

	get fecha_nacimiento(){
		return this._fecha_nacimiento;
	}

	get genero(){
		return this._genero;
	}

	get codigo_postal(){
		return this._codigo_postal;
	}

	//setters

	set nombre(valor){
		this._nombre = valor;
	}

	set apellidos(valor){
		this._apellidos = valor;
	}

	set direccion(valor){
		this._direccion = valor;
	}

	set fecha_nacimiento(valor){
		this._fecha_nacimiento = valor;
	}

	set genero(valor){
		this._genero = valor;
	}

	set codigo_postal(valor){
		this._codigo_postal = valor;
	}

	//metodos

	titulo(){
		var titulo = 'Sr.';

		if(this._genero == 'Femenino') {
			titulo = 'Sra.';
		}
		return titulo;
	}

	edad(){
		var edad;
		var fechaActual = new Date();
		var fechaArray = this._fecha_nacimiento.split('/');
		var fechaNacimiento = new Date(parseInt(fechaArray[2]),parseInt(fechaArray[1]),parseInt(fechaArray[0]));
		//console.log(fechaActual.getFullYear());
		//console.log(parseInt(fechaArray[2]));

		return fechaActual.getFullYear() - parseInt(fechaArray[2]);
	}

	mostrarDatos(){

	}

	static mostrarDatosPersonas(personas){
		var htmlTable = '<table border="1" style="margin: 20px auto;">';
		htmlTable += '<tr>';
		htmlTable += '<th>Nombre y Apellidos</th>';
		htmlTable += '<th>Dirección</th>';
		htmlTable += '<th>Fecha Nacimiento</th>';
		htmlTable += '<th>Edad</th>';
		htmlTable += '<th>Género</th>';
		htmlTable += '<th>Código Postal</th>';
		htmlTable += '</tr>';

		for (var persona of personas) {
			htmlTable += '<tr>';
			htmlTable += '<td>'+persona.titulo()+' '+persona.nombre + ' ' + persona.apellidos +'</td>';
			htmlTable += '<td>'+persona.direccion+'</td>';
			htmlTable += '<td>'+persona.fecha_nacimiento+'</td>';
			htmlTable += '<td>'+persona.edad()+'</td>';
			htmlTable += '<td>'+persona.genero+'</td>';
			htmlTable += '<td>'+persona.codigo_postal+'</td>';
			htmlTable += '</tr>';
		}

		htmlTable += '</table>';


		var myWindow;
		myWindow = window.open('','Listado Personas','width=700,height=500');
		myWindow.document.open();
		myWindow.document.write('<html lang="en">');
		myWindow.document.write('<head>');
		myWindow.document.write('<meta charset="UTF-8">');
		myWindow.document.write('<title>Listado Personas</title>');
		myWindow.document.write('</head>');
		myWindow.document.write('<body style="text-align:center;">');
		myWindow.document.write('<h1>Listado Personas</h1>');
		myWindow.document.write(htmlTable);
		myWindow.document.write('<button onclick="window.close();">Cerrar Ventana</button>');
		myWindow.document.write('</body>');
		myWindow.document.write('</html>');
		myWindow.document.close();
		myWindow.focus();
	}
}
