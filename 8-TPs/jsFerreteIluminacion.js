/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 var cantidad;
 var marca;
 var precioConDescuento;
 var suma;
 var impuestosBrutos;
 marca=document.getElementById("Marca").value;
 cantidad=document.getElementById("Cantidad").value;
 cantidad=parseInt(cantidad);
 suma=cantidad*35;
 if(cantidad>=6){
     precioConDescuento=suma*0.5;
     document.getElementById("precioDescuento").value=precioConDescuento;
}else{
 switch(cantidad){
    case 5: {
    switch(marca){
        case ("ArgentinaLuz"): 
            precioConDescuento=suma*0.6;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        case ("FelipeLamparas"): 
            precioConDescuento=suma*0.7;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        case("JeLuz"):
            precioConDescuento=suma*0.7;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        case("HazIluminacion"):
            precioConDescuento=suma*0.7;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        case("Osram"):
            precioConDescuento=suma*0.7;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        }
    };
    case 4: {
    switch(marca){
        case ("ArgentinaLuz"):
            precioConDescuento=suma*0.75;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case ("“FelipeLamparas”"):
            precioConDescuento=suma*0.75;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case("JeLuz"):
            precioConDescuento=suma*0.8;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case("HazIluminacion"):
            precioConDescuento=suma*0.8;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case("Osram"):
            precioConDescuento=suma*0.8;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        }
    };
    case 3: {
    switch(marca){
        case ("ArgentinaLuz"):
             precioConDescuento=suma*0.85;
             document.getElementById("precioDescuento").value=precioConDescuento;
             break;

        case ("“FelipeLamparas”"): 
            precioConDescuento=suma*0.9;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case("JeLuz"):
            precioConDescuento=suma*0.95;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case("HazIluminacion"):
            precioConDescuento=suma*0.95;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;

        case("Osram"):
            precioConDescuento=suma*0.95;
            document.getElementById("precioDescuento").value=precioConDescuento;
            break;
        }
    };
    case 2: {
        precioConDescuento=suma;
        document.getElementById("precioDescuento").value=precioConDescuento;
        break;
    };
    case 1:{
        precioConDescuento=suma;
        document.getElementById("precioDescuento").value=precioConDescuento;
        break;
 };
    };
};
if(precioConDescuento>=120){
    precioConDescuento=precioConDescuento*1.1;
    impuestosBrutos=precioConDescuento*0.1;
    impuestosBrutos=parseInt(impuestosBrutos);
    alert("Usted paga "+impuestosBrutos+" de IIBB");
    };


 }

