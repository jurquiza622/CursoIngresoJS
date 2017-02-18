var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*3+1);
	console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina==1){
		ContadorDeEmpates++;
	}else{
		if(eleccionMaquina==2){
			ContadorDeGanadas++;
		}else{
			ContadorDePerdidas++;
		};
	};


mostarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2){
		ContadorDeEmpates++;
	}else{
		if(eleccionMaquina==1){
			ContadorDeGanadas++;
		}else{
			ContadorDePerdidas++;
		};
	};
	
	
mostarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3){
		ContadorDeEmpates++;
	}else{
		if(eleccionMaquina==1){
			ContadorDeGanadas++;
		}else{
			ContadorDePerdidas++;
		};
	};
mostarResultado();
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

} 