class Persona {
    constructor(nombre, apellidos, sueldoBruto, retenciones, sueldoNeto, dni) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._sueldoBruto = sueldoBruto;
        this._retenciones = retenciones;
        this._sueldoNeto = sueldoNeto;
        this._dni = dni;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get sueldoBruto() {
        return this._sueldoBruto;
    }
    get retenciones() {
        return this._retenciones;
    }
    get sueldoNeto() {
        return this._sueldoNeto;
    }
    get dni() {
        return this._dni;
    }


    set nombre(nombre) {
        this._nombre=nombre;
    }
    set apellidos(apellidos) {
        this._apellidos=apellidos;
    }
    set sueldoBruto(sueldoBruto) {
        this._sueldoBruto=sueldoBruto;
    }
    set retenciones(retenciones) {
        var retenciones=800;
        

        this._retenciones=retenciones;
    }
    set sueldoNeto(sueldoNeto) {
        this._sueldoNeto=sueldoNeto;
    }
    set dni(dni) {
        this._dni=dni; 
    }

    static listarDatos(personas) {
        var info ="<table border=1><tr>";
        info +="<th>Nombre</th>";
        info +="<th>Apellidos</th>";
        info +="<th>Sueldo Bruto</th>";
        info +="<th>Retenciones</th>";
        info +="<th>Sueldo Neto</th>";
        info +="<th>DNI</th>";
        info +="</tr>";

        for (var i of persona) {
            info +="<td>"+i._nombre+"</th>";
            info +="<td>"+i._apellidos+"</th>";
            info +="<td>"+i._sueldoBruto+"</th>";
            info +="<td>"+i._retenciones+"</th>";
            info +="<td>"+i._sueldoNeto+"</th>";
            info +="<td>"+i._dni+"</th>";
        }
        info+="</table>";
        return info;
    }
   

}