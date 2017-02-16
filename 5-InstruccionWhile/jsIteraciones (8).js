function Mostrar()
{
	var continuar;
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
while(true){
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
if(numero>0){
	positivo+=numero;
	
}else{

	numero=negativo*numero;
	numero+=numero;

};
console.log(numero);
continuar=confirm("desea continuar? presione aceptar para seguir o cancelar para salir");

if(continuar==false){
	document.getElementById("producto").value=numero;
	document.getElementById("suma").value=numero;
	break;

};
};




};//FIN DE LA FUNCIÓN