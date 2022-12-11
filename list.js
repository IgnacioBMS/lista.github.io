document.write('hola\n')
var lista = [];
var archivo = new XMLHttpRequest();
var file = 'lista.txt';
archivo.open('GET',file,false);
archivo.send(null);
var nombres = archivo.responseText;
lista = nombres.split(';')
document.write(lista)
document.write('chao\n')