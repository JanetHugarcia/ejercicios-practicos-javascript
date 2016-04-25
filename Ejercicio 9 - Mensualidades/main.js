//Escribe aquí túvar pago = 10; código
var lista = ["Primer pago: ", "Segundo pago: ", "Tercer pago: ", "Cuarto pago: ",
			"Quinto pago: ", "Sexto pago: ", "Sétimo pago: ", "Octavo pago: ",
			"Noveno pago: ", "Décimo pago: ", "DécimoPrimero pago: ", "DécimoSegundo pago: ",
			"DécimioTercer pago: ", "DécimioCuarto pago: ", "DécimoQuinto pago: ", "DécimoSexto pago: ",
			"DécimoSetimo pago: ", "DécimoOctavo pago: ", "Déimonoveno pago: ", "Vigesimo pago: "]

var cadena = '';
for(var c=0; c<20;c++){
	var pago=0;

	pago=5*c*c+5*c + 10;

	cadena += lista[c]+ " es " +pago + "\n";
}

alert(cadena);