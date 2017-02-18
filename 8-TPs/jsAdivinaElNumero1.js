/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroUsuario;
var numeroGenerado;
var contadorIntentos=0;

function comenzar()
{
	numeroGenerado=Math.floor(Math.random()*101+1);
  numeroUsuario=prompt("ingrese un numero");
  numeroUsuario=parseInt(numeroUsuario);
  console.log(numeroGenerado);
};

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
};