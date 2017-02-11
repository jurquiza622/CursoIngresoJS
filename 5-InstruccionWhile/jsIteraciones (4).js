function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero<10 && numero>=0){
		alert("gracias por ingresar un numero");
		document.getElementById("Numero").value=numero;
		numero=10;
	}

}//FIN DE LA FUNCIÓN