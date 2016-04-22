//Escribe aquí tú código
var n = parseInt(prompt("¿Cuántos números fibonacci quieres ver? "));
var na=1;
var naa=-1;
var resultado = '';
for(var c=1;c<=n;c++){
	var num = 0;
	num=na+naa;
	naa=na;
	na=num;
	resultado += num + " ";
}

alert(resultado);



