class Persona {
	constructor(n,a,d,t,s){
		this._nombre = n;
		this._apellidos = a;
		this._direccion = d;
		this._telefono = t;
		this._sueldo = s;
	}

	//getters
	get nombre(){
		return this._nombre
	}

	get apellidos(){
		return this._apellidos
	}

	get direccion(){
		return this._direccion
	}

	get telefono(){
		return this._telefono
	}

	get sueldo(){
		return this._sueldo
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
	set telefono(valor){
		this._telefono = valor;
	}
	set sueldo(valor){
		this._sueldo = valor;
	}

	//metodos

	static mostrarDatosPersonas(personas) {
		var htmlTable = '<table border="1" style="margin: 20px auto;">'
		htmlTable += '<tr>';
		htmlTable += '<th>Nombre y Apellidos</th>';
		htmlTable += '<th>Dirección</th>';
		htmlTable += '<th>Teléfono</th>';
		htmlTable += '<th>Sueldo</th>';
		htmlTable += '</tr>';

		for(var persona of personas) {
			htmlTable += '<tr>';
			htmlTable += '<td>'+persona.nombre + ' ' + persona.apellidos+'</td>';
			htmlTable += '<td>'+persona.direccion+'</td>';
			htmlTable += '<td>'+persona.telefono+'</td>';
			htmlTable += '<td>'+persona.sueldo+' euros </td>';
			htmlTable += '</tr>';
		}

		htmlTable += '</table>';

		var myWindow = window.open('','Listado Personas','width=700,height=500');
		myWindow.document.open();
		myWindow.document.write('<html>');
		myWindow.document.write('<head>');
		myWindow.document.write('<title>Listado Personas</title>');
		myWindow.document.write('</head>');
		myWindow.document.write('<body style="text-align:center;">');
		myWindow.document.write('<h2>Listado Personas</h2>');
		myWindow.document.write(htmlTable);
		myWindow.document.write('<button onclick="window.close()">Cerrar Ventana</button>');
		myWindow.document.write('</body>');
		myWindow.document.write('</html>');
		myWindow.document.close();
	}
}