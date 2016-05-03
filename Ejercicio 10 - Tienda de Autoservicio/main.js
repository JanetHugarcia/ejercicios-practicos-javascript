//Escribe aquí tú código
var c = parseInt(prompt("Ingrese # sucursal "));
var total;
var totalSucursal;
var totalTotal;

for(var i=1;i<=c;i++){
	var t = parseInt(prompt("Ingrese # de tienda de sucursal" + i));
	totalSucursal = 0;
	for(var j=1; j<=t;j++){
		var n = parseInt(prompt("Ingrese # de empleados de tienda" + j));
		total = 0;
		for(var k=1; k<=n;k++){
			var venta = parseInt(prompt("Ingresa la venta del empleado " + k + " de la tienda " + j + " de la sucursal " + i ));
			document.write(" sucursal " + i + " tienda " + j + " empleado " +k + " venta " + venta + "<br>");
			total+=venta;
		}
		document.write(" sucursal " + i + " tienda " + j +  " ventatotal Tienda" + total + "<br>");
		totalSucursal += total;
	}
	document.write(" sucursal " + i + " total sucursal" + totalSucursal + "<br>");
	totalTotal += totalSucursal;
}
document.write("Venta Total: " + totalTotal);