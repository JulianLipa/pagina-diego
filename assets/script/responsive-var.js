var barra = document.getElementById("nav-bar");
var nav = document.getElementById("overlay-menu");

nav.style.display = "none";

var i = 0;

barra.onclick = function(){
    if(i == 0){
        nav.style.display = "block";
        i = 1;
    }else{
        nav.style.display = "none";
        i = 0;
    }
}