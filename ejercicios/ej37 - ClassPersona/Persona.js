class Persona {
		constructor(nombre,apellidos,direccion,fecha_nacimiento,genero,codigo_postal){
			this._edad = edad;
			this._peso = peso;
		}

		/* getters */

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

		/* setters */

		set nombre(valor) {
			this._nombre = valor;
		}

		set apellidos(valor) {
			this._apellidos = valor;
		}

		set direccion(valor) {
			this._direccion = valor;
		}

		set fecha_nacimiento(valor) {
			this._fecha_nacimiento = valor;
		}

		set genero(valor) {
			this._genero = valor;
		}

		set codigo_postal(valor) {
			this._codigo_postal = valor;
		}

		/* metodos */

		edad(){
			var now = new Date();
			var anioActual = now.getFullYear();
			var fechaNacArray = this._fecha_nacimiento.split('/'); 
			var fechaNac = new Date(fechaNacArray[2], fechaNacArray[1], fechaNacArray[0]);
			var anioNac = fechaNac.getFullYear();

			return anioActual - anioNac;
		}

		titulo(){
			if(this._genero == 'Masculino') {
				return 'Sr. ';
			} else {
				return 'Sra. '
			}
		}

		mostrarDatos(divDatos){
			var html = '<table><tr><th>Nombre</th><th>Apellidos</th><th>Dirección</th><th>Fecha de Nacimiento</th><th>Género</th><th>Código Postal</th></tr>';

			html += '<tr>';
			html += 	'<td>'+ this.titulo() + this._nombre +'</td>';
			html += 	'<td>'+ this._apellidos +'</td>';
			html += 	'<td>'+ this._direccion +'</td>';
			html += 	'<td>'+ this._fecha_nacimiento +'</td>';
			html += 	'<td>'+ this._genero +'</td>';
			html += 	'<td>'+ this._codigo_postal +'</td>';
			html += '</tr>';

			html += '</table>';
			document.getElementById(divDatos).innerHTML = html;
		}

		static mostrarPersonas(divDatos, personas){

			var html = '<table><tr><th>Nombre</th><th>Apellidos</th><th>Dirección</th><th>Fecha de Nacimiento</th><th>Género</th><th>Código Postal</th></tr>';

			for(var persona of personas) {
				html += '<tr>';
				html += 	'<td>'+ this.titulo() + this._nombre +'</td>';
				html += 	'<td>'+ this._apellidos +'</td>';
				html += 	'<td>'+ this._direccion +'</td>';
				html += 	'<td>'+ this._fecha_nacimiento +'</td>';
				html += 	'<td>'+ this._genero +'</td>';
				html += 	'<td>'+ this._codigo_postal +'</td>';
				html += '</tr>';
			}
			
			html += '</table>';
			document.getElementById(divDatos).innerHTML = html;
		}
	}