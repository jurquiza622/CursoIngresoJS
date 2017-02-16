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
 marca=parseInt(marca);
 suma=cantidad*35;
 if(cantidad>5){
     precioConDescuento=suma*0.5;

}else{
 switch(cantidad)
 {
    case 5: 
    switch(marca)
    {
        case ("ArgentinaLuz"): 
            precioConDescuento=suma*0.6;
            break;
       default:
            precioConDescuento=suma*0.7;
            break;
        };
    
    case 4: {
    switch(marca)
    {
        case ("ArgentinaLuz"):
            precioConDescuento=suma*0.75;
            break;

        case ("FelipeLamparas"):
            precioConDescuento=suma*0.75;
            break;

        default:
            precioConDescuento=suma*0.8;
            break;
        
    };
 };
    case 3: {
    switch(marca)
    {
        case ("ArgentinaLuz"):
             precioConDescuento=suma*0.85;
             break;
        case ("FelipeLamparas"): 
            precioConDescuento=suma*0.9;
            break;
       default:
            precioConDescuento=suma*0.95;
            break;
    };  
    };
    default:
        precioConDescuento=suma;
        break;

    
}
console.log(precioConDescuento);
 }
if(precioConDescuento>119){
    impuestosBrutos=precioConDescuento*0.1;
    precioConDescuento=precioConDescuento*1.1;
    impuestosBrutos=parseInt(impuestosBrutos);
    alert("Usted paga "+impuestosBrutos+" de IIBB");
    };
 precioConDescuento=parseInt(precioConDescuento);
 document.getElementById("precioDescuento").value=precioConDescuento;


 }

