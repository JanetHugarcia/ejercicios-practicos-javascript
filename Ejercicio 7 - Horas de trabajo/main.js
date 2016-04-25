//Escribe aquí tú código
var dia = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var suma = 0;
var sueldo =0;
var mensaje = '';
var pago = parseFloat(prompt("Ingrese el pago por hora: "));

pago;
for(var c=0;c<6;c++){
	var horas = parseFloat(prompt( dia[c] + "Ingrese horas trabajadas: " ));
	suma += horas;
	mensaje += dia[c] + " : " + horas + " hrs trabajadas" + "\n"
}
sueldo = suma*pago;

alert(mensaje + "\n" + "El pago por hora es: "+ pago+ "\n" + " EL sueldo semanal es: " + sueldo);