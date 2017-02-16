function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	while(numero>9 || numero<0){
		numero=prompt("ingrese un numero entre 9 y 10");
		};
	document.getElementById("Numero").value=numero;
}//FIN DE LA FUNCIÓN