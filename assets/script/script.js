var pasajeros = document.getElementById("pasajeros");
var volver = document.getElementById("volver");
var textoPasajeros = document.getElementById("texto-pasajeros");

document.getElementById("pasajeros").addEventListener("mouseover", mouseOver);

function  mouseOver(){
  volver.style.visibility = "visible";
}

document.getElementById("pasajeros").addEventListener("mouseout", mouseOut);

function  mouseOut(){
  volver.style.visibility = "visible";
}

pasajeros.addEventListener('mouseout', () => {
  volver.style.visibility = "hidden";
});

volver.onclick = function(){
  window.location.href = 'fotografia.html';
};