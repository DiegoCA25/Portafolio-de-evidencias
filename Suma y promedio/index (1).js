var numeros = " ";
for(var i =1; i<=10; i++){
    //numeros += i + "  ";

}
document.querySelector("#div1").innerHTML=numeros;

var btn = document.querySelector("#btn1");
btn.addEventListener("click", ()=> {
    var ini= parseInt (document.querySelector("#ini").value);
    var fin= parseInt (document.querySelector("#fin").value);
    var losnumeros = " ";
    var suma=0;
    var promedio=0;
    var contador = 0; 
    for(var i = ini; i <= fin; i++){
        losnumeros += i + " ";
        suma += i; 
        contador ++;
    }
    promedio= suma/contador;
    document.querySelector("#div1").innerHTML=losnumeros
    = losnumeros + " La suma es : "+ suma + " El promedio es: "+ promedio;

});
