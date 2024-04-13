var boton = document.getElementById("btnresultado");
boton.addEventListener("click",procesar); 

function procesar(){
    var num1 = parseInt (document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var resultado;


if(num1 < 5650){

    resultado= num2+porcentaje(num2);
}
else{

    resultado= num2 + extra (num1);
}
document.getElementById("res").innerHTML= "el salario diario será de "+ resultado;
}
 

function porcentaje(a){
    return(a*.25)
}

function extra(a){
    return(a*.3)
}
