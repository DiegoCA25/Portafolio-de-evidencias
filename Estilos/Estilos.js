var div= document.querySelector("#area");
var texto= document.querySelector("#txt");
texto.addEventListener("keyup",function(){
    div.innerHTML = texto.value;
});

var fondo= document.querySelector("#fondo");
fondo.addEventListener("change", function(){
    div.style.background = fondo.value; 
});

var color= document.querySelector("#texto");
fuente.addEventListener("change", function(){
    div.style.color =  color.value; 
});

var fuente= document.querySelector("#fuente");
fuente.addEventListener("change", function(){
    div.style.fontSize = fuente.value + "px"; 
});

var alto = document.getElementById("alto");
alto.addEventListener("change", function(){
    div.style.height = alto.value+"px"

});