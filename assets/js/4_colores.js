const cuadroAzul = document.getElementById("colorAzul")
const cuadroRojo = document.getElementById("colorRojo")
const cuadroVerde = document.getElementById("colorVerde")
const cuadroAmarillo = document.getElementById("colorAmarillo")


    
//CREAMOS LA FUNCION 
function cambiarColor(elemento) {
       elemento.style.backgroundColor = 'black'
}

cuadroAzul.addEventListener('click', () => cambiarColor(cuadroAzul))
cuadroRojo.addEventListener('click',() => cambiarColor(cuadroRojo))
cuadroVerde.addEventListener('click',() => cambiarColor(cuadroVerde))
cuadroAmarillo.addEventListener('click', () =>cambiarColor(cuadroAmarillo))