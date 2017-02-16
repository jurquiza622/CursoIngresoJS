function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var suma;
	var numero;
	while(contador<5){
		contador++;
		numero=prompt("ingrese un valor numerico");
		numero=parseInt(numero);
		acumulador+=numero;
		
};
	promedio=acumulador/contador;
	document.getElementById("suma").value=acumulador;
	document.getElementById("promedio").value=promedio;






}//FIN DE LA FUNCIÓN