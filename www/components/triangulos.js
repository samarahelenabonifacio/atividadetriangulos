//This is a JavaScript file

window.onload = function(){
    const lado1 = document.querySelector("#lado1");
    const lado2 = document.querySelector("#lado2");
    const lado3 = document.querySelector("#lado3");

    const conferir = document.querySelector("#conferir");

    conferir.addEventListener("click", function(){
        if(lado1.value == lado2.value && lado1.value == lado3.value){
            let resultado = "Esse triângulo e equilátero.";
            document.querySelector("#result").value = resultado;
        }
        else if((lado1 == lado2.value) || (lado2 == lado3.value) || (lado1 == lado3.value)){
            let resultado = "Esse triângulo é isósceles.";
            document.querySelector("#result").value = resultado;
        }
        else{
            let resultado = "Esse triângulo é escaleno.";
            document.querySelector("#result").value = resultado;
        }
    });

}