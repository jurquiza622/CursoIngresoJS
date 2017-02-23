function Mostrar()
{
    var numero;
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    var contador=0;
    for(var i=2;i<=numero;i++)
        {
            if(nume%i==0)
            {
               contador++; 
            }       
            if (contador>2)
            {
                break;
            }    
        };
     if(contador<=2)
            {
                alert("es primo")
            };  


}//FIN DE LA FUNCIÓN