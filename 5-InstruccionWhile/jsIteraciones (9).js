function Mostrar()
{
	var numero;
	var maximo=0;
	var minimo=0;
	var contador=0
	var respuesta;
	var primera;

	// declarar variables
	while(respuesta!='no')
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(primera){
			primera=false;
			maximo=numero;
			minimo=numero;
		}else{
		if(numero>maximo){
			maximo=numero;
		}else{
			if(numero<minimo){
				minimo=numero;
			};
		respuesta=prompt("desea seguir, escriba no para salir");
	

	};
	};
		
	};
		document.getElementById("maximo").value=maximo;
		document.getElementById("minimo").value=minimo;



};//FIN DE LA FUNCIÓN