

//Expresiones regulares

// \ - caracter de escape
// a - incluye una a en el orden especificado
// {n} - n veces el caracter anterior ca{3}{t}e - caaattte
// {n,} - minimo n veces y máximo infinito ca{2,}te
// {n,m} - minimo y maximo ca{2,5}
// ^ - principio de cadena /^a/
// . - el punto indica cualquier carácter ca.e -> caxe es valido
// $ - indica el final de cadena: ^a..e$
// * - indica 0 o más caracteres ^at*e$ -> atte, attte, ae (^at{0,}e$)
// + - indica minimo 1 caracter anterior ^at+e$ == ^at{1,}e$
// ? - indica que puede tener 0,1 el cartacter anterior - et?e == at{0,1}e
// a|b - indica que se puede dar uno de los caracteres ^a{t|g}e$ -> ate -> age
// ^[aeiou] - indica cadena que empieza por vocal
// ^[a-z] - cadena empiezan por cualquier letra en la a y la z
// \d - correcto con cualquier numero entre 0 y 9 == ^[0-9]
// \D - indica un caracter que NO sea númerico = ^[^0-9] -> negación
// \s - indica un caracter de espacio
// \S - cualquier caracter que no sea  espacio, tabulador 
// \w - correcto con cualquier numero