
    var num1 = document.querySelector('#num1')
    var num2 = document.querySelector('#num2')
    var resultado = document.querySelector('span')

        function somar(){
            resultado.innerHTML = "A soma de "+ num1.value + "+" + num2.value +"=" + (parseFloat(num1.value) + parseFloat(num2.value))
            document.getElementById("hist").innerHTML += num1.value + "+" + num2.value +"=" + (parseFloat(num1.value) + parseFloat(num2.value))
        }

        function multiplicar(){
            resultado.innerHTML = "A multiplicação de "+ num1.value + "*" + num2.value +"=" + (parseFloat(num1.value) * parseFloat(num2.value))
            document.getElementById("hist").innerHTML += num1.value + "*" + num2.value +"=" + (parseFloat(num1.value) * parseFloat(num2.value))
        }

        function subitrair(){
            resultado.innerHTML = "A subitração de "+ num1.value + "-" + num2.value +"=" + (parseFloat(num1.value) - parseFloat(num2.value))
            document.getElementById("hist").innerHTML += num1.value + "-" + num2.value +"=" + (parseFloat(num1.value) - parseFloat(num2.value))
        }

        function dividir(){
            resultado.innerHTML = "A divisão de "+ num1.value + "/" + num2.value +"=" + (parseFloat(num1.value) / parseFloat(num2.value))
            document.getElementById("hist").innerHTML += num1.value + "/" + num2.value +"=" + (parseFloat(num1.value) / parseFloat(num2.value))
        }
