//Escribe aquí tú código
var n = parseInt(prompt("Ingrese numero de ventas"));
var cadena = '';
var mayor = 0;
var mediano = 0;
var menor = 0;
var ma=0;
var men=0;
var me=0;

n;
while ( n > 0){
	
	var venta = parseInt(prompt("Ingrese venta " + n));
	cadena += venta + "\n";
	if (venta > 1000){
		mayor += 1;
		ma += venta;
	}else if(venta>500 && venta <= 1000){
		mediano +=1;
		me += venta;
	}else if(venta<=500 && venta>0){
		menor += 1;
		men += venta;
	}
	n--;
}
total = ma+ me + men;
alert("Ventas:\n" +cadena + "Más de 1000: "+mayor +"\n"+ "monto parcial: " + ma  + "\n"+
	"Mayor a 500, menores o iguales a 1000: "+mediano + "\n"+ "monto parcial: "+ me+"\n"+
	"Menores o iguales a 500: " + menor + "\n"+"monto parcial: "+ men + "\n"+
	"Monto total: " + total);
