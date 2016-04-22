//Escribe aquí tú código
var n=parseFloat(prompt("Escriba numero de personas :"));
var c = 1;
var suma = 0;
n;

while( c <= n){
	estatura=parseFloat(prompt("Escriba estatura " + c));
	c++;
	suma += estatura;
}

p= suma/n;

alert("El promedio de estatura es: "+ p);


