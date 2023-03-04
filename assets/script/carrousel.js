/*Carrousel*/

var imgCarrousel = document.getElementById("random-carrousel");
var randomNum = 0;
var imgVector = [
  "assets/images/index_fotografia/analogias-2023-work-in-progress.jpg",
  "assets/images/index_fotografia/el-velo_2014.jpg",
  "assets/images/index_fotografia/lapsus-2016.JPG",
  "assets/images/index_fotografia/pasajeros-en-trance-2008.jpg",
  "assets/images/index_fotografia/proyecto-es-copia-proyecto-2017.jpg",
  "assets/images/index_fotografia/xxx-2022.jpg",
];
var button = document.getElementById("carrousel-button");
var icono = document.getElementById("icono");
var i = 0;

let change = setInterval(changeImage, 6000);

button.onclick = function(){
    if(i == 0){
        clearInterval(change);
        i=1;
    }else{
        i=0;
        change = setInterval(changeImage, 6000);
    }
};

randomNum = Math.floor(Math.random() * imgVector.length);
imgCarrousel.setAttribute("src", imgVector[randomNum]);

function changeImage(){
  if(randomNum > imgVector.length-1){
    randomNum = 0;
    imgCarrousel.setAttribute("src", imgVector[randomNum]);
  }else{
    imgCarrousel.setAttribute("src", imgVector[randomNum++]);
  }
}