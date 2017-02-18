/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
var edad;
var sexo;
var estadoCivil;
var sueldoBruto;
var numeroDeLegajo;
var nacionalidad;

function ComenzarIngreso () 
{
    edad=prompt("ingrese su edad");
    while(edad>=91 || edad<=17){
            alert("edad incorrecta");
            edad=prompt("ingrese su edad");
            };
    sexo=prompt("indique su sexo: M para masculino o F para femenino");
    while(sexo!="M" && sexo!="H"){
            alert("sexo incorrecto");
            sexo=prompt("indique su sexo: M para masculino o F para femenino");
        };
    switch(sexo){
            case "M":
            sexo="Masculino";
            case "F":
            sexo="Femenino";
                };
    estadoCivil=prompt("Estado civil, ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    estadoCivil=parseInt(estadoCivil);
    if(estadoCivil<0 || estadoCivil>4)
            {
            alert("Estado civil incorrecto");
            estadoCivil=prompt("Estado civil, ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
            estadoCivil=parseInt(estadoCivil);
            };
    sueldoBruto=prompt("ingrese su sueldo bruto");
    sueldoBruto=parseInt(sueldoBruto);
    while(sueldoBruto<8000){
            alert("sueldo bruto incorrecto");
            sueldoBruto=prompt("ingrese su sueldo bruto");
            parseInt(sueldoBruto);
            };
    numeroDeLegajo=prompt("ingrese su numero de legajo");
    numeroDeLegajo=parseInt(numeroDeLegajo);
    while(numeroDeLegajo>9999 || numeroDeLegajo<0)
         {
            alert("numero de legajo incorrecto");
            numeroDeLegajo=prompt("ingrese su numero de legajo");
            numeroDeLegajo=parseInt(numeroDeLegajo);         
         };
    nacionalidad=prompt("ingrese su nacionalidad 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados");
    switch(nacionalidad){
            case ("A"):
            nacionalidad="Argentino";
            case("E"):
            nacionalidad="Extranjero";
            case("N"):
            nacionalidad="Nacionalizado";
            default:
            alert("Nacionalidad incorrecta");
            nacionalidad=prompt("ingrese su nacionalidad 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados");
            };
    document.getElementById("Edad").value=edad;
    document.getElementById("Sexo").value=sexo;
    document.getElementById("EstadoCivil").value=estadoCivil;
    document.getElementById("Sueldo").value=sueldoBruto;
    document.getElementById("Legajo").value=numeroDeLegajo;
    document.getElementById("Nacionalidad").value=nacionalidad;


}


