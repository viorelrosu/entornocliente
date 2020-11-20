class Persona {
		constructor(nombre,apellidos,direccion,fecha_nacimiento,genero,codigo_postal){
			this._nombre = nombre;
			this._apellidos = apellidos;
			this._direccion = direccion;
			this._fecha_nacimiento = fecha_nacimiento;
			this._genero = genero;
			this._codigo_postal = codigo_postal;
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
			var mesActual = now.getMonth()+1;
			var diaActual = now.getDate();
			var anioActual = now.getFullYear();

			var fechaNacArray = this._fecha_nacimiento.split('/');
			var anioN 	= parseInt(fechaNacArray[2]);
			var mesN 	= parseInt(fechaNacArray[1]);
			var diaN 	= parseInt(fechaNacArray[0]);
			var edad = anioActual - anioN;

			if(mesN <= mesActual){
				edad--;
			}
			if(mesN == mesActual) {
				if(diaN <= diaActual){
					edad--;
				}
			}

			return edad;
		}

		titulo(){
			if(this._genero == 'Masculino') {
				return 'Sr. ';
			} else {
				return 'Sra. '
			}
		}

		getTituloNombreApellidos(){
			return this.titulo() + ' ' + this._nombre + ' ' + this._apellidos;
		}

		mostrarDatos(divDatos){
			var html = '<table class="table table-striped"><tr class="bg-primary text-light"><th colspan="2">Datos Persona</th></tr>';

			html += '<tr>';
			html += 	'<th>Nombre y Apellidos</th><td>'+ this.getTituloNombreApellidos() +'</td>';
			html += '</tr>';
			html += '<tr>';
			html += 	'<th>Dirección</th><td>'+ this._direccion +'</td>';
			html += '</tr>';
			html += '<tr>';
			html += 	'<th>Fecha nacimiento</th><td>'+ this._fecha_nacimiento +'</td>';
			html += '</tr>';
			html += '<tr>';
			html += 	'<th>Edad</th><td>'+ this.edad() +'</td>';
			html += '</tr>';
			html += '<tr>';
			html += 	'<th>Género</th><td>'+ this._genero +'</td>';
			html += '</tr>';
			html += '<tr>';
			html += 	'<th>Código postal</th><td>'+ this._codigo_postal +'</td>';
			html += '</tr>';

			html += '</table>';
			document.getElementById(divDatos).innerHTML = html;
		}

		static mostrarPersonas(personas){
			//console.log(personas);
			var html = '<table class="table" border="1" style="margin: 0 auto;">';
			html += '<tr>';
			html += '<th>Nombre y Apellidos</th>';
			html += '<th>Dirección</th>';
			html += '<th>Fecha Nac.</th>';
			html += '<th>Edad.</th>';
			html += '<th>Género</th>';
			html += '<th>Código postal</th>';
			html += '</tr>';

			for(var persona of personas) {
				html += '<tr>';
				html += 	'<td>'+ persona.getTituloNombreApellidos() +'</td>';
				html += 	'<td>'+ persona.direccion +'</td>';
				html += 	'<td>'+ persona.fecha_nacimiento +'</td>';
				html += 	'<td>'+ persona.edad() +'</td>';
				html += 	'<td>'+ persona.genero +'</td>';
				html += 	'<td>'+ persona.codigo_postal +'</td>';
				html += '</tr>';
			}

			html += '</table>';
			return html;
		}
}