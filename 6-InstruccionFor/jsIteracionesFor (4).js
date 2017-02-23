function Mostrar()
{

    var continuar=true;
    for(i=0;;i++)
    {
        if(continuar==true)
        {
            continuar=confirm("el numero es "+i+" cancelar para salir");
        }else{
                break;
            };
     
    };



}//FIN DE LA FUNCIÓN