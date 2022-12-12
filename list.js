var options = {
    valueNames: [ 'name', 'born' ],
    item: '<li><h3 class="name"></h3><p class="born"></p></li>'
  };
  
var values = [];

var userList = new List('users', options, values);
var archivo = new XMLHttpRequest();
var file = 'lista.txt';
archivo.open('GET',file,false);
archivo.send(null);
var txt = archivo.responseText;
function esLetra(caracter) {
	let ascii = caracter.toUpperCase().charCodeAt(0);
	return ascii > 64 && ascii < 91;
};
function esNumero(caracter) {
	let ascii = caracter;
	return ascii >= 0 && ascii < 10 && ascii != ' ';
};
var nombre = ''
var numero = ''
for (i = 0; i < txt.length; i++) {
    if (esLetra(txt[i])) {
        nombre = nombre + txt[i]
    };
    if (esNumero(txt[i])) {
        numero = numero + txt[i]
    }
    if (txt[i] == ' ' || i+1 == txt.length) {
        userList.add = ({
            'name': nombre,
            'born': numero 
        });
    }
};
console.log(userList)
