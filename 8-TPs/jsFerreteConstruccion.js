/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoDelTerreno=document.getElementById("Largo").value;
    largoDelTerreno=parseInt(largoDelTerreno);
    var anchoDelTerreno=document.getElementById("Ancho").value;
    anchoDelTerreno=parseInt(anchoDelTerreno);
    var cantidadDeAlambre=((largoDelTerreno*2)+(anchoDelTerreno*2))*3;
    alert("Es necesario comprar: "+cantidadDeAlambre);
}
function Circulo () 
{
	var radioDelTerreno=document.getElementById("Radio").value;
    radioDelTerreno=parseInt(radioDelTerreno);
    var cantidadDeAlambre=Math.ceil((Math.PI*radioDelTerreno*2)*3);
    alert("Es necesario comprar: "+cantidadDeAlambre);
}
function Materiales () 
{
	var largoDelTerreno=document.getElementById("Largo").value;
    largoDelTerreno=parseInt(largoDelTerreno);
    var anchoDelTerreno=document.getElementById("Ancho").value;
    anchoDelTerreno=parseInt(anchoDelTerreno);
    var areaDelTerreno=(anchoDelTerreno*largoDelTerreno);
    var cemento=areaDelTerreno*2;
    var cal=areaDelTerreno*3;
    alert("Es necesario comprar "+cal+" bolsas de cal y "+cemento+" de cemento");
}