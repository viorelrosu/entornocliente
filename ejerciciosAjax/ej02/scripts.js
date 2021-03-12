"use strict";

window.onload = function() {
	var XMLHttpRequestObject = false;

	if (window.XMLHttpRequest) {
		XMLHttpRequestObject = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}

	function pedirDatos(fuenteDatos){
	    var miAleat = parseInt(Math.random()*999999999);
	   
		if(XMLHttpRequestObject) {
		    XMLHttpRequestObject.onreadystatechange = tratarRespuesta;
			XMLHttpRequestObject.open("GET", fuenteDatos + "?aleat=" + miAleat);
			XMLHttpRequestObject.send(null);
			console.log(fuenteDatos + "?aleat=" + miAleat);
		}
		 console.log(XMLHttpRequestObject);
	}

	function tratarRespuesta(){
		console.log(XMLHttpRequestObject.readyState +"  -  " +XMLHttpRequestObject.status );

		if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
			var listaNoticias = XMLHttpRequestObject.responseXML.getElementsByTagName("CD");
			
			console.log(listaNoticias);

			document.getElementById("targetDiv").innerHTML = XMLHttpRequestObject.responseText;
		}
	}

	pedirDatos('listaCD.xml');
}

