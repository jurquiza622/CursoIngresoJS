function Mostrar()
{

    var resto;
    var cantidad;
    cantidad=prompt("ingrese el numero al que desea llegar");
    cantidad=parseInt(cantidad);
    var contadorDivisores=0;
    for(var i=0;i<cantidad;i++)
        {
            if(cantidad%i==0)
                {
                        contadorDivisores++;    
                };
        };
    alert("sus divisores son "+contadorDivisores);


}//FIN DE LA FUNCIÓN