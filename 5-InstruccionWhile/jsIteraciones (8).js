function Mostrar()
{
	var continuar;
	var numero;
	var positivo=0;
	var negativo=1;
	
	while(continuar=confirm("desea continuar? presione aceptar para seguir o cancelar para salir"))
{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(numero>=0){
			positivo+=numero;
			console.log(positivo);
		}else{
			negativo*=numero;
			console.log(negativo);
		};
	};
	
	document.getElementById("producto").value=negativo;
	document.getElementById("suma").value=positivo;

};//FIN DE LA FUNCIÓN