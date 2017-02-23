function Mostrar()
{
    var resto;
    var cantidad;
    cantidad=prompt("ingrese el numero al que desea llegar");
    cantidad=parseInt(cantidad);
    var contadorPares=0;
    for(var i=1;i<=cantidad;i++)
        {
            if(i%2==0)
                {
                  console.log(i);  
                  contadorPares++;    
                };
        };
    alert(contadorPares);


}//FIN DE LA FUNCIÓN