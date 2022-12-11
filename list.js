var lista = [];
var archivo = new XMLHttpRequest();
var file = 'lista.txt';
archivo.open('GET',file,false);
archivo.send(null);
var nombres = archivo.responseText;
console.log(nombres.split(';'))