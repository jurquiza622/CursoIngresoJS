function Mostrar()
{
var contador=0;
var numero;
var acumulador=0;
var promedio;
var continuar;
while(true){
	contador++;
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	acumulador+=numero;
	promedio=acumulador/contador;
	
	continuar=prompt("Desea continuar? (escriba n para salir)")
	if(continuar=="n"){
		break;
		
	};
}
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN