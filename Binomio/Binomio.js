var boton = document.getElementById('btnResultado');
boton.addEventListener ("click", procesar);

function procesar(){
    var a = parseInt(document.getElementById('a').value)
    var b = parseInt(document.getElementById('b').value)
    var res1
    var res2 
    var res3
    
    res1= cuadrado(a);
    res2= cuadrado(b);
    res3= multiplicar (a,b);
    


    document.getElementById("res").innerHTML = res1 + " + " + res3 + " + " + res2 ;

}

function cuadrado (a){
    return(a**a)
}

function multiplicar (a,b){
    return(2*a*b)
}
