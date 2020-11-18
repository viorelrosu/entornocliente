	class Humano {
		constructor(edad,peso){
			this._edad = edad;
			this._peso = peso;
		}

		get edad(){
			return this._edad;
		}

		set edad(edad) {
			this._edad = edad;
		}

		get peso(){
			return this._peso;
		}

		set peso(peso) {
			this._peso = peso;
		}

		comer(){
			this._peso++;
		}

		correr(){
			this._peso--;
		}

		muestraUnDato(contenedor){
			var html='';
			html += 'Edad: ' + this._edad + ' <br /> Peso: ' + this._peso + '<br />';
			document.getElementById(contenedor).innerHTML=html;
		}

		static mostrarDatos(contenedor, ...datosHumanos) {
			var html='Datos de humanos:<br />==========<br />';
			for (var humano of datosHumanos) {
				html += 'Edad: ' + humano.edad + ' ---- Peso: ' + humano.peso + '<br />';
			}
			document.getElementById(contenedor).innerHTML = html;
		}

		static muestraDatos(contenedor, datosHumanos) {
			var html='Datos de humanos:<br />==========<br />';
			for (var humano of datosHumanos) {
				html += 'Edad: ' + humano.edad + ' ---- Peso: ' + humano.peso + '<br />';
			}
			document.getElementById(contenedor).innerHTML = html;
		}
	}

	var humanos = new Array();
	var divDatos = document.getElementById('divDatos');
	var divDatosHumano = document.getElementById('divDatosHumano');

	function addHumano(){
		console.log(document.getElementById('divDatos'));
		var edad = parseInt(document.getElementById('edad').value);
		var peso = parseInt(document.getElementById('peso').value);

		var humano = new Humano(edad,peso);
		humanos.push(humano);

		var mensaje = 'Humano añadido correctamente';
		divDatos.innerHTML = mensaje;
		humano.muestraUnDato('divDatosHumano');

		console.log(humanos);
	}

	function list(){
		console.log(humanos);
		Humano.muestraDatos('divDatos', humanos);
	}