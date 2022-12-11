document.write('hola\n')
var lista = [];
var archivo = new XMLHttpRequest();
var file = 'lista.txt';
archivo.open('GET',file,false);
archivo.send(null);
var nombres = archivo.responseText;
document.write(nombres)
document.write('chao\n')