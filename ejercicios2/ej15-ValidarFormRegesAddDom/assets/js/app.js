window.onload = function(){
	document.miform.onsubmit = () => false;
	document.miform.usuario.onkeyup = () => validarUsuario();
	document.miform.nombre.onkeyup = () => validarNombre();
	document.miform.apellido.onkeyup = () => validarApellido();
	document.miform.email.onkeyup = () => validarEmail();
	document.miform.password.onkeyup = () => validarPassword();
	document.miform.passwordConfirm.onkeyup = () => validarPasswordConfirm();
	document.miform.btnInsert.onclick = () => validar();
}

function validarUsuario(){
	var isValid = false;
	var inputText = document.miform.usuario;
	var divError = document.getElementById("error-usuario");
	var valor = inputText.value.trim();
	var pattern = /^([a-z]|[\d]){6,20}$/;

	if(pattern.test(valor)) {
		inputText.setAttribute("class","form-control");
		isValid = true;
	} else {
		inputText.setAttribute("class","form-control error");
		inputText.focus();
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Usuario es inválido";
		divError.style.display = "block";
	}

	return isValid;
}

function validarNombre(){
	var isValid = false;
	var inputText = document.miform.nombre;
	var divError = document.getElementById("error-nombre");
	var valor = inputText.value.toLowerCase().trim();
	var pattern = /^[a-záéíóúñç]{2}(( |\-)?[a-záéíóúñç]{1,}){0,}$/;
	if(pattern.test(valor)) {
		if(valor.length < 20) {
			inputText.setAttribute("class","form-control");
			isValid = true;
		} else {
			inputText.setAttribute("class","form-control error");
			inputText.focus();
		}
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Nombre es inválido";
		divError.style.display = "block";
	}

	return isValid;
}

function validarApellido(){
	var isValid = false;
	var inputText = document.miform.apellido;
	var divError = document.getElementById("error-apellido");
	var valor = inputText.value.toLowerCase().trim();
	var pattern = /^([a-záéíóúçñ]{2})(( |\-)?([a-záéíóúçñ]){1,}){0,}$/;
	if(pattern.test(valor)) {
		if(valor.length < 20) {
			inputText.setAttribute("class","form-control");
			isValid = true;
		} else {
			inputText.setAttribute("class","form-control error");
			inputText.focus();
		}
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Apellido es inválido";
		divError.style.display = "block";
	}

	return isValid;
}

function validarEmail(){
	var isValid = false;
	var inputText = document.miform.email;
	var divError = document.getElementById("error-email");
	console.log(divError);
	var valor = inputText.value.trim();
	var pattern = /^((\w+)([\.\-]?\w+){0,})@((\w+)([\.\-]?\w+){0,})((\.)([a-z]{2,4})){1,}$/;

	if(pattern.test(valor)) {
		inputText.setAttribute("class","form-control");
		isValid = true;
	} else {
		inputText.setAttribute("class","form-control error");
		inputText.focus();
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Email es inválido";
		divError.style.display = "block";
	}

	return isValid;
}


function validarPassword(){
	var isValid = false;
	var inputText = document.miform.password;
	var divError = document.getElementById("error-password");

	var valor = inputText.value.trim();
	//(?=[a-z]+)(?=\d+)(?=[!?\-\_\*]+)(!?[\ ])
	var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!?\-\_\*])(?!.*[\ ]).{1,}$/;
	if(pattern.test(valor)) {
		inputText.setAttribute("class","form-control");
		isValid = true;
	} else {
		inputText.setAttribute("class","form-control error");
		inputText.focus();
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Contraseña es inválido";
		divError.style.display = "block";
	}

	return isValid;
}

function validarPasswordConfirm(){
	var isValid = false;
	var inputCheck = document.miform.password;
	var inputText = document.miform.passwordConfirm;
	var divError = document.getElementById("error-passwordConfirm");
	var checkText = inputCheck.value.trim();
	var valor = inputText.value.trim();

	if(valor != ' ' && valor != '' && valor != null) {
		if(checkText == valor) {
			inputText.setAttribute("class","form-control");
			isValid = true;
		} else {
			inputText.setAttribute("class","form-control error");
			inputText.focus();
		}
	}

	console.log(valor);

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Confirmar es inválido";
		divError.style.display = "block";
	}

	return isValid;
}

function validarPais(){
	var isValid = false;
	var selectPais = document.miform.pais;
	var divError = document.getElementById("error-pais");

	if(selectPais.value != '') {
		isValid = true;
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo País es obligatorio";
		divError.style.display = "block";
	}

	return isValid;
}

function validarHobbies(){
	var isValid = false;
	var checkHobbies = document.miform["hobbies[]"];
	var divError = document.getElementById("error-hobbies");

	for (var i = 0; i < checkHobbies.length; i++) {
		if( checkHobbies[i].checked == true){
			isValid = true;
		}
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Hobbies es obligatorio";
		divError.style.display = "block";
	}

	return isValid;
}

function validarSexo(){
	var isValid = false;
	var radioSexo = document.miform.sexo;
	var divError = document.getElementById("error-sexo");

	for (var i = 0; i < radioSexo.length; i++) {
		if( radioSexo[i].checked == true){
			isValid = true;
		}
	}

	if(isValid) {
		divError.style.display = "none";
	} else {
		divError.innerHTML = "El campo Sexo es obligatorio";
		divError.style.display = "block";
	}

	return isValid;
}

function validar() {
	var isValid = true;

	isValid = validarUsuario();

	if(isValid)
		isValid = validarNombre();

	if(isValid)
		isValid = validarApellido();

	if(isValid)
		isValid = validarEmail();

	if(isValid)
		isValid = validarPassword();

	if(isValid)
		isValid = validarPasswordConfirm();

	if(isValid)
		isValid = validarHobbies();

	if(isValid)
		isValid = validarPais();

	if(isValid)
		isValid = validarSexo();

	if(isValid) {
		insertarTr();
	}
}

function insertarTr(){
	var miTabla = document.getElementById("miTabla").children[1];
	var td;
	var tr = document.createElement("tr");
	td = getElementTd("usuario");
	tr.appendChild(td);
	td = getElementTd("nombre");
	tr.appendChild(td);
	td = getElementTd("apellido");
	tr.appendChild(td);
	td = getElementTd("email");
	tr.appendChild(td);
	td = getElementTd("password");
	tr.appendChild(td);
	td = getElementTd("hobbies");
	tr.appendChild(td);
	td = getElementTd("pais");
	tr.appendChild(td);
	td = getElementTd("sexo");
	tr.appendChild(td);
	td = getElementTd("bottones");
	tr.appendChild(td);

	miTabla.appendChild(tr);
	reset();
}

function getElementTd(tipo){
	var td = document.createElement("td");
	var valor;
	switch(tipo) {
		case "usuario":
			valor = document.miform.usuario.value.trim();
			td.appendChild(document.createTextNode(valor));
		break;
		case "nombre":
			valor = document.miform.nombre.value.trim();
			var arrayText = valor.split(" ");
			var valorCapitalize = '';
			for (var i = 0; i < arrayText.length; i++) {
				valorCapitalize += arrayText[i].charAt(0).toUpperCase() + arrayText[i].substring(1) + " ";
			}
			td.appendChild(document.createTextNode(valorCapitalize));
		break;
		case "apellido":
			valor = document.miform.apellido.value.trim();
			td.appendChild(document.createTextNode(valor));
		break;
		case "email":
			valor = document.miform.email.value.trim();
			td.appendChild(document.createTextNode(valor));
		break;
		case "password":
			valor = document.miform.password.value.trim();
			td.appendChild(document.createTextNode(valor));
		break;
		case "hobbies":
			var hobbies = document.miform["hobbies[]"];
			valor = '';
			for (var i = 0; i < hobbies.length; i++) {
				if( hobbies[i].checked == true){
					valor += hobbies[i].value + " ";
				}
			}

			td.appendChild(document.createTextNode(valor));
		break;
		case "pais":
			var pais = document.miform.pais;
			valor = '';
			for (var i = 0; i < pais.length; i++) {
				if( pais[i].selected == true){
					valor += pais[i].value;
				}
			}

			td.appendChild(document.createTextNode(valor));
		break;
		case "sexo":
			var sexo = document.miform.sexo;
			valor = '';
			for (var i = 0; i < sexo.length; i++) {
				if( sexo[i].checked == true){
					valor += sexo[i].value;
				}
			}

			td.appendChild(document.createTextNode(valor));
		break;
		case "bottones":
			var btnEdit = document.createElement("button");
			btnEdit.setAttribute("class","btn btn-info");
			var iEdit = document.createElement("i");
			iEdit.setAttribute("class","fas fa-pencil-alt");
			btnEdit.setAttribute("onclick", "editFila(this)" );
			btnEdit.appendChild(iEdit);

			var btnDel = document.createElement("button");
			btnDel.setAttribute("class","btn btn-danger");
			var iEdit = document.createElement("i");
			iEdit.setAttribute("class","fas fa-trash");
			btnDel.setAttribute("onclick", "delFila(this)" );
			btnDel.appendChild(iEdit);

			td.appendChild(btnEdit);
			td.appendChild(btnDel);
		break;
	}

	return td;
}

function editFila(btn){
	var tr = btn.parentNode.parentNode;
	document.miform.usuario.value = tr.firstElementChild.firstChild.nodeValue;
	document.miform.nombre.value = tr.children[1].firstChild.nodeValue;
	document.miform.apellido.value = tr.children[2].firstChild.nodeValue;
	document.miform.email.value = tr.children[3].firstChild.nodeValue;
	document.miform.password.value = tr.children[4].firstChild.nodeValue;
	document.miform.passwordConfirm.value = tr.children[4].firstChild.nodeValue;

	var valorHobbie = tr.children[5].firstChild.nodeValue;
	//console.log(valorHobbie.split(" "));
	var hobbies = document.miform["hobbies[]"];
	for (var i = 0; i < hobbies.length; i++) {
		if( valorHobbie.indexOf(hobbies[i].value) != -1 ){
			hobbies[i].checked = true;
		}
	}

	var valorPais = tr.children[6].firstChild.nodeValue;
	var pais = document.miform.pais;
	for (var i = 0; i < pais.length; i++) {
		if( pais[i].value == valorPais){
			pais[i].selected = true;
		}
	}

	var valorSexo = tr.children[7].firstChild.nodeValue;
	var sexo = document.miform.sexo;
	for (var i = 0; i < sexo.length; i++) {
		if( sexo[i].value == valorSexo){
			sexo[i].checked = true;
		}
	}
	//console.log(tr.children[7].firstChild.nodeValue);
}

function delFila(btn){
	var miTabla = document.getElementById("miTabla").children[1];
	var tr = btn.parentNode.parentNode;
	miTabla.removeChild(tr);
}

function reset(){
	document.miform.usuario.value = "";
	document.miform.nombre.value = "";
	document.miform.apellido.value = "";
	document.miform.email.value = "";
	document.miform.password.value = "";
	document.miform.passwordConfirm.value = "";

	var hobbies = document.miform["hobbies[]"];
	for (var i = 0; i < hobbies.length; i++) {
		hobbies[i].checked = false;
	}

	var pais = document.miform.pais;
	for (var i = 0; i < pais.length; i++) {
		pais[i].selected = false;
	}

	var sexo = document.miform.sexo;
	for (var i = 0; i < sexo.length; i++) {
		sexo[i].checked = false;
	}
}

