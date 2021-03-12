<?php // Rellenamos un array con nombres
//sleep(2);
$a[]="Ana"; $a[]="Belinda"; $a[]="Cinderella"; $a[]="Diana"; $a[]="Eva"; $a[]="Fiona"; $a[]="Gabriela"; $a[]="Hilda";
$a[]="Idaira"; $a[]="Johanna"; $a[]="Kitty"; $a[]="Linda"; $a[]="Nina"; $a[]="Ofelia"; $a[]="Petunia"; $a[]="Amanda";
$a[]="Raquel"; $a[]="Cindy"; $a[]="Doris"; $a[]="Eve"; $a[]="Evita"; $a[]="Sunniva"; $a[]="Tania"; $a[]="Ursula";
$a[]="Violeta"; $a[]="Liza"; $a[]="Elizabeth"; $a[]="Ellen"; $a[]="Walda"; $a[]="Vicky";
$a[]="Isabela"; $a[]="Juana"; $a[]="Aurora"; $a[]="Luciana"; $a[]="Nuca"; $a[]="Olga"; $a[]="Patricia"; $a[]="Alicia";
$a[]="Isabella"; $a[]="Jacinta"; $a[]="Carmen"; $a[]="Curra"; $a[]="Catalina"; $a[]="Olvido"; $a[]="Patricia"; $a[]="Anastasia";
$a[]="Susana"; $a[]="Juliana"; $a[]="Victoria"; $a[]="Valentina"; $a[]="Sandra"; $a[]="Eustaquia"; $a[]="Esperanza"; $a[]="Esparta";
// Rescatamos el parámetro q que nos llega mediante la url que invoca xmlhttp
$q=$_REQUEST["q"]; $hint="";
// Buscamos la coincidencia de los primeros caracteres entre nombres del array con los primeros caracteres de q
if ($q !== ""){
$q=strtolower($q); $len=strlen($q);
foreach($a as $name) {
if (stristr($q, substr($name,0,$len))) {
if ($hint==="") { $hint=$name; }
else { $hint .= ", $name"; }
}
}
}
// Devolvemos "no hay sugerencias" si no se encuentran coincidencias
// o los datos en $hint (nombres separados por comas) si se encontraron coincidencias
echo $hint==="" ? "No hay sugerencias" : $hint;
?>