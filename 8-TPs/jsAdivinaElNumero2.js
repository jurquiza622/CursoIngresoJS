/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroUsuario;
var numeroGenerado;
var contadorIntentos=0;

function comenzar()
{
	 
  numeroGenerado=Math.floor(Math.random()*101+1);
  numeroUsuario=prompt("ingrese un numero");
  numeroUsuario=parseInt(numeroUsuario);

}

function verificar()
{
	  while(numeroUsuario!=numeroGenerado)
           {
             contadorIntentos++;
             if(numeroUsuario<numeroGenerado){
                alert("te quedaste corto");
                numeroUsuario=prompt("ingrese un numero");
              }else{
                if(numeroUsuario>numeroGenerado){
                    alert("te pasaste");
                    numeroUsuario=prompt("ingrese un numero");
                    }else{
                         if(numeroGenerado==numeroUsuario)
                         {   
                            break;
                         };
                
                        };
                    };
          
            };
          document.getElementById("numero").value=numeroGenerado;
          document.getElementById("intentos").value=contadorIntentos;
	switch(contadorIntentos){
			case 1: alert("usted es psiquico");
					break;
			case 2: alert("excelente percepción");
					break;
			case 3: alert("esto es suerte");
					break;			
			case 4: alert("excelente tecnica");
					break;		
			case 5: alert("usted esta en la medida");
					break;
			case 6: alert("falta tecnica");
					break;
			case 7: alert("falta tecnica");
					break;
			case 8: alert("falta tecnica");
					break;
			case 9: alert("falta tecnica");
					break;
			case 10: alert("falta tecnica");
			     	break;
			default: alert("afortunado en el amor!");
					break;
			};  
	

}