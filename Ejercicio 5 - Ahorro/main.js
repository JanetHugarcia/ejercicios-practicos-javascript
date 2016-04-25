//Escribe aquí tú código
var mes = ['Enero', 'Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre'];
var meslength = mes.length;
var c = -1;
var cadena="";
var suma = null;

while (c < 11){
	c++;
	var N = parseFloat(prompt("Ingrese cantidad :" + mes[c] ));

	cadena +=  mes[c] + " : " + "La cantidad es " + N + "\n";
	suma += N;
}

alert(cadena + "\n" + "Al año tienes : " + suma);