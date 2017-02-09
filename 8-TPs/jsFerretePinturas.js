/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura=document.getElementById("Temperatura").value;
    parseInt(temperatura);
    farenheit=((temperatura-32)*5)/9;
    alert("La conversion de temperatura a Fahrenheit es: "+farenheit);

}

function CentigradosFahrenheit () 
{
	var temperatura=document.getElementById("Temperatura").value;
    parseInt(temperatura);
    celcius=((temperatura*9)/5)+32;
    alert("La conversion de temperatura a Celcius es: "+celcius);
}
