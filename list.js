var lista = [];
var archivo = new XMLHttpRequest();
var file = 'lista.csv';
archivo.open('GET',file,false);
archivo.send(null);
var nombres = archivo.responseText;
console.log(nombres.strip(';'))