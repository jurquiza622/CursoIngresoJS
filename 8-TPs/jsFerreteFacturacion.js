/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var articuloUno=document.getElementById("PrecioUno").value;
    articuloUno=parseInt(articuloUno);
    var articuloDos=document.getElementById("PrecioDos").value;
    articuloDos=parseInt(articuloDos);
    var articuloTres=document.getElementById("PrecioTres").value;
    articuloTres=parseFloat(articuloTres);
    var suma=articuloUno+articuloDos+articuloTres;
    alert("la suma es: "+suma);
    
}
function Promedio () 
{
     var articuloUno=document.getElementById("PrecioUno").value;
    articuloUno=parseInt(articuloUno);
    var articuloDos=document.getElementById("PrecioDos").value;
    articuloDos=parseInt(articuloDos);
    var articuloTres=document.getElementById("PrecioTres").value;
    articuloTres=parseF(articuloTres);
    var promedio=(articuloDos+articuloTres+articuloUno)/3;
    alert("El promedio es: "+promedio); 
}
function PrecioFinal () 
{
	var articuloUno=document.getElementById("PrecioUno").value;
    articuloUno=parseInt(articuloUno);
    var articuloDos=document.getElementById("PrecioDos").value;
    articuloDos=parseInt(articuloDos);
    var articuloTres=document.getElementById("PrecioTres").value;
    articuloTres=parseInt(articuloTres);
    var PrecioFinal=(articuloDos+articuloTres+articuloUno)*1.21;
    alert("El precio final el: "+PrecioFinal);
}