let videoEcuad = document.getElementById("videoEcuador");
let mostrarVid = document.getElementById("MostrarVideo");

let meguta = ["Pedro", "María", "Juan", "José", "Félix", "Melisa"]

function mostrar(){
    videoEcuad.setAttribute("style","display-none");
    mostrarVid.setAttribute("style", "display-block");
}

function volver(){
    videoEcuad.setAttribute("style","display-block");
    mostrarVid.setAttribute("style", "display-none");
}

function mensajeMantenimiento(){
    window.alert("Nos encontramos en mantenimiento, revisa esta información desde la barra de navegación");
}

function cantidadMegusta(){
    let totalMeGusta = 0;
    for (let i = 0; i <meguta.length; i++){
        totalMeGusta++;
    }
    document.getElementById("conteoMeGusta").innerText = "Ha " + totalMeGusta + " les gusta esre video"
}