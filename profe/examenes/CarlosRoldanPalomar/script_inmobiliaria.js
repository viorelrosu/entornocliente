var pisos = [];
var posicion = 0;

pisos[0] = new Pisos("El Pez, 24", 987456321, 80.50, 222000, 3.0);
pisos[1] = new Pisos("La Presa, 34", 687125463, 94.30, 165250, 2.5);
pisos[2] = new Pisos("Albericia, 7", 852369741, 62.00, 121000, 2.0);
valores();

class Pisos {
    constructor(direccion, telefono, metros_construidos, precio, comision) {
        this._direccion = direccion;
        this._telefono = telefono;
        this._metros_construidos = metros_construidos;
        this._precio = precio;
        this._comision = comision;
    }

    ////////////////
    /////GETTERS////
    ////////////////

    get direccion() {
        return this._direccion;
    }

    get telefono() {
        return this._telefono;
    }

    get metros_construidos() {
        return this._metros_construidos;
    }

    get precio() {
        return this._precio;
    }

    get comision() {
        return this._comision;
    }

    ////////////////
    /////SETTERS////
    ////////////////

    set direccion(direccion) {
        this._direccion = direccion;
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    set metros_construidos(metros_construidos) {
        this._metros_construidos = metros_construidos;
    }
    set precio(precio) {
        this._precio = precio;
    }

    set comision(comision) {
        this._comision = comision;
    }

    //--Métodos de la clase--//

    metrosUtiles() {
        var superficie = ((this.metros_construidos * 0.12) / 100);
    }

    ganancias() {
        var calculo = (this.precio * this.comision);
    }

    static listado() {
        var salida = "";
        salida = "<table border=2><tr><th>Dirección</th><th>Teléfono</th><th>Metros Construidos</th><th>Metros útiles</th><th>Precio Venta</th><th>% Comisión</th><th>Ganancias</th></tr>";
        for (var c = 0; c < pisos.length; c++) {
            // Se puede llamar al get como 'objeto._atributo/objeto.this._atributo' o 'objeto.atributo'
            salida += "<tr><td>" + pisos[c].direccion + " " + pisos[c].telefono + " " + pisos[c].metros_construidos + "</td><td>" + pisos[c].metrosUtiles() + "</td><td>" + pisos[c].precio + "</td><td>" + pisos[c].comision + "</td><td>" + pisos[c].ganancias() + "</td></tr>";
        }
        salida += "</table>";
        var miWindow = window.open("", "ventana", "width=800, height=500, top=200, left=200");
        miWindow.document.open();
        miWindow.document.write("<html>");
        miWindow.document.write("<head>");
        miWindow.document.write("<title>Listado en Ventana</title>");
        miWindow.document.write("</head>");
        miWindow.document.write("<body>");
        miWindow.document.write("<center>");
        miWindow.document.write("Listado Array de todos los pisos");
        miWindow.document.write("<br><br>");
        miWindow.document.write(salida);
        miWindow.document.write("<br><input type='button' value='Cerrar ventana' onclick='window.close();'");
        miWindow.document.write("</center>");
        miWindow.document.write("</body>");
        miWindow.document.write("</html>");
        miWindow.document.close();
    }
}

function valores() {
    document.getElementById("direccion").value = pisos[posicion].nombre;
    document.getElementById("telefono").value = pisos[posicion].telefono;
    document.getElementById("metros_construidos").value = pisos[posicion].metros_construidos;
    document.getElementById("precio").value = pisos[posicion].precio;
    document.getElementById("comision").value = pisos[posicion].comision;
}

//--Validaciones--//

var admitidosDir = 'abcdefghijklmnñopqrstuvwxyzáéíóúçABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÇ-, 0123456789';
var admitidosMetros = '123456789.';
function validarDireccion() {
    var direccion = (document.getElementById("direccion").value);
    if ((direccion.length > 3) && (direccion.length <= 35)) {
        document.getElementById("dir").innerHTML = "";
        return true;
    } else {
        document.getElementById("dir").innerHTML = "Dirección mal introducida, debe estar comprendida entre 3 y 35 dígitos.";
        return false;
    }
}

function validarTlf() {
    var tlf = (document.getElementById("telefono").value);
    if (!isNaN(telefono)) {
        if (telefono.length == 9) {
            if ((telefono.startsWith(6)) || (telefono.startsWith(7)) || (telefono.startsWith(8)) || (telefono.startsWith(9))) {
                document.getElementById("tlf").innerHTML = "";
                return true;
            }
            document.getElementById("tlf").innerHTML = "Telefono mal introducido, debe empezar por (6/7/8/9).";
            return false;
        } else {
            document.getElementById("tlf").innerHTML = "Telefono mal introducido, debe tener 9 dígitos.";
            return false;
        }
    } else {
        document.getElementById("tlf").innerHTML = "Telefono mal introducido, el Nº de telefono no puede contener letras.";
        return false;
    }
}


function validarMetros() {
    var m = (document.getElementById("metros_construidos").value);
    if (!isNaN(metros_construidos)) {

    }
}