document.write('hola\n')
var lista = [];
var archivo = new XMLHttpRequest();
var file = 'lista.csv';
archivo.open('GET',file,false);
var nombres = archivo.responseText;
document.write(nombres)
