var pantalla = document.querySelector("canvas");
var pincel1 = pantalla.getContext("2d");
var pincel2 = pantalla.getContext("2d");
var pincel3 = pantalla.getContext("2d");
var pincel4 = pantalla.getContext("2d");
var pincel5 = pantalla.getContext("2d");


var color = "#fff"
crearHorca()


function crearHorca(){
    pincel1.lineWidth = 4;
    pincel1.strokeStyle = color
    pincel1.beginPath()
    pincel1.moveTo(50,140);
    pincel1.lineTo(280,140);
    pincel1.stroke();
    
    pincel2.strokeStyle = color
    pincel2.beginPath()
    pincel2.moveTo(50,140);
    pincel2.lineTo(20,140);
    pincel2.stroke();
    
    pincel3.strokeStyle = color
    pincel3.beginPath()
    pincel3.moveTo(50,140);
    pincel3.lineTo(50,20);
    pincel3.stroke();

    pincel4.strokeStyle = color
    pincel4.beginPath()
    pincel4.moveTo(48,20);
    pincel4.lineTo(128,20);
    pincel4.stroke();

    pincel5.strokeStyle = color
    pincel5.beginPath()
    pincel5.moveTo(126,20);
    pincel5.lineTo(126,30);
    pincel5.stroke();
}

function crearCabeza(){
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.arc(126,40,15,0,2*3.14);
    pincel.fill()
}

function crearCuerpo(){
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(126,55);
    pincel.lineTo(126,85);
    pincel.stroke()
}

function crearBrazoIzq(){
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(126,60);
    pincel.lineTo(106,80);
    pincel.stroke()
}

function crearBrazoDer(){
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(126,60);
    pincel.lineTo(146,80);
    pincel.stroke()
}

function crearPiernaIzq(){
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(126,84);
    pincel.lineTo(106,114);
    pincel.stroke()
}

function crearPiernaDer(){
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color
    pincel.beginPath();
    pincel.moveTo(126,84);
    pincel.lineTo(146,114);
    pincel.stroke()
}

function crearMunieco(){
    if(letrasIncorrectas.length == 1){
        crearCabeza();
    }else if(letrasIncorrectas.length == 2){
        crearCuerpo();
    }else if(letrasIncorrectas.length == 3){
        crearBrazoIzq();
    }else if(letrasIncorrectas.length == 4){
        crearBrazoDer();
    }else if(letrasIncorrectas.length == 5){
        crearPiernaIzq();
    }else if(letrasIncorrectas.length == 6){
        crearPiernaDer();
    }
}

function resetearCanvas(){
    var pincel = pantalla.getContext("2d");
    pincel.clearRect(0,0,300,500);
    crearHorca();
}
