//Escribe aquí tú código
var n = parseInt(prompt("Ingrese numero"));
var menores = 0;
var mayores = 0;

c = 1;
n;

while(c <= n){
	var num = parseInt(prompt("Ingrese numero " + c));
	if (num <= 0){
		menores=menores+1;
	}else if(num >0){
		mayores=mayores +1;
	}
	c++;
}

alert("Menores o iguales a cero: "+menores+"\nmayores: "+ mayores);
