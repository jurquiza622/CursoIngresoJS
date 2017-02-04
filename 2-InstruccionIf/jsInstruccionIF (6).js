function Mostrar()
{
//tomo la edad  
 var edad;
    edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    if(edad>18){
        alert("mayor de edad");


    }
    else{
        if(edad<18 && edad>12){
        	alert("es adolescente");
        }else{
        alert("es niñ@");
   		}
    
    
	}



}//FIN DE LA FUNCIÓN