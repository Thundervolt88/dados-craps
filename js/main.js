var tiro_1;
var tiro_2; 
var posiciones=[0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var total_tiro;
var turno = 1; 

window.onload=init;

function init(){
	boton_tirar=document.getElementById("boton_tirar");
	boton_tirar.addEventListener("click",jugar);

	dado1= document.getElementById("dado1")
    dado2= document.getElementById("dado2")
}

function tirardado(){
	return Math.floor(Math.random() * 6) + 1 ;
}

function actualizardado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";

}

function jugar(){
	tiro_1 = tirardado();
	tiro_2 = tirardado();
	actualizardado(dado1,tiro_1);
	actualizardado(dado2,tiro_2);

	console.log("turno actual", turno);

	total_tiro = tiro_1 + tiro_2;

	turno = turno +1;

	if(total_tiro == 7 || total_tiro==11)
	{
		alert("Gano la partida");

		turno = 1;
		console.log("Se reinicio el turno");
	}
	else
	{
		alert("Pierde partida");
	}
	}