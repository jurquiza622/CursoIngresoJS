function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random()*11);
	if(numero>=9){
		alert("su nota es: "+numero+ "Excelente");
	}else{
		if(numero>=4 && numero<9){
			alert("su nota es: "+numero+" Aprobo");
		}else{
			alert("su nota es: "+numero+" Vamos la proxima se puede");
		}

	}

}//FIN DE LA FUNCIÓN