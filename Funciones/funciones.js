var boton = document.getElementById('btnResultado');
boton.addEventListener ("click", procesar);

function procesar(){
    var num1 = parseInt(document.getElementById('n1').value)
    var num2 = parseInt(document.getElementById('n2').value)
    var op = document.getElementById("op").value;  
    var resultado; 
if (op==1){
    resultado= sumar(num1,num2);
}

else if (op==2){
    resultado= restar (num1,num2);
}
else if (op==3){
    resultado= dividir (num1,num2);
}
else if (op==4){
    resultado = multiplicar (num1,num2);
}
else {
    resultado= Math.pow (num1,num2);
}
    document.getElementById("res").innerHTML = resultado;
}

function sumar(a,b){
    return (a+b)
}

function restar (x,y){
    return(x-y)
}
function dividir(a,b){
    var div = a/b; 
    return div; 
}
function multiplicar (a,b){
    var mult = a*b;
    return mult;

}