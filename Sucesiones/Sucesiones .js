var btn = document.getElementById("btnFac");
btn.addEventListener("click",()=>{
    var num = document.getElementById("num").value;
    var num4 = document.getElementById("num4").value;
    var num1 = num - (num-1)
    var num2 = num - (num-2)
    var suma = 0
    var texto = " ";
    
    
    for(var i=1; i<= num4; i++ ){
        suma = num1 + num2
        num1=num2
        num2=suma
        texto += suma +", "
        
    }

    
    document.querySelector("#resultado").innerHTML= texto;


});


