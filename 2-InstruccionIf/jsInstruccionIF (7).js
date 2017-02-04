function Mostrar()
{
//tomo la edad  

	var edad;
    var estadocivil;
    edad=document.getElementById("edad").value;
    estadocivil=document.getElementById("estadoCivil").value;
    if(edad<18 && estadocivil=="Casado")
    {
        alert("es muy joven para NO ser soltero");

    }else{
        if(edad<18 && estadocivil=="Divorciado"){
            alert("es muy joven para No ser soltero")
        }


    }


}//FIN DE LA FUNCIÓN