var btn = document.getElementById("btnFac");
btn.addEventListener("click",()=>{
    var num = document.getElementById("num").value;
    var factorial = 1;
    var texto = num + "! = ";
    for(var i=num; i>=1; i--){
        factorial= factorial*i; 
        texto +=  i + " x "
    }
    texto = texto.slice(0, texto.length - 2);
    texto += " = " + factorial;

    document.querySelector("#resultado").innerHTML= texto;
});
