function Mostrar()
{
	var negativos=0;
	var numero;
	var positivos=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var contadorceros=0;
	var contadorpares=0;
	var promediopositivos=0;
	var promedionegativos=0;
	var diferencia=0;
	var respuesta;


	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(numero % 2==0){
			contadorpares++;
			};
		if (numero>0){
		contadorpositivos++;
		positivos+=numero;

			}else{
				if(numero<0){
					contadornegativos++;
					negativos+=numero;

				}else{				
						contadorceros++;	
						
					 };
				};
		
	respuesta=prompt("ingrese 'no' para salir");
	};
	promedionegativos=negativos/contadornegativos;
	promediopositivos=positivos/contadorpositivos;
	diferencia=negativos+positivos;

document.write(
	'<br>LA CANTIFDAD DE NEGATIVOS ES: '+contadornegativos+
	'<br>LA CANTIDAD DE POSITIVOS ES: '+contadorpositivos+
	'<br>EL PROMEDIO DE LOS NEGATIVOS ES: '+promedionegativos+
	'<br>EL PROMEDIO DE LOS POSITIVOS ES: '+promediopositivos+
	'<br>LA CANTIDAD DE CEROS ES: '+contadorceros+
	'<br>CANTIDAD DE NUMERO PARES ES: '+contadorpares+
	'<br>LA DIFERCNCIA ES: '+diferencia
	);
}//FIN DE LA FUNCIÓN