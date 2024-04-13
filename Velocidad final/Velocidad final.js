var boton = document.getElementById('btnResultado');
boton.addEventListener ("click", procesar);

function procesar (){
    var num1 = parseInt(document.getElementById('dis').value)
    var num2 = parseInt(document.getElementById('tie').value)
    var resultado 

    resultado = operacion (num1,num2);
    document.getElementById("res").innerHTML = "la velocidad final es: "+ resultado + " Km/h" ;
}

function operacion (a,b){
    return(a/b);
}

