// VARIABLE GLOBAL PORQUE ESTA FUERA 
let colorInicial = "white"

// CREAMOS LA FUNCION PARA CAMBIAR COLOR CON LAS TECLAS A S D
function cambiarColor(color) {
    const divKey = document.getElementById('key');
    colorInicial = color;
    divKey.style.backgroundColor = colorInicial;
}
//EVENTO LISTENER KEYDOWN
document.addEventListener('keydown', function (event) {
    if (event.key === 'a'|| event.key === 'A') {
        cambiarColor('pink')
    } else if (event.key === 's'|| event.key === 'S') {
        cambiarColor('orange')
    }
     else if (event.key === 'd'|| event.key === 'D') {
        cambiarColor('skyblue')
    }
    })

    //FUNCION PARA CREAR NUEVOS DIV CON LAS TECLAS Q W E

    function crearNuevoDiv(color) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.style.backgroundColor = color;
        document.body.appendChild(nuevoDiv); 

    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'q'|| event.key === 'Q') {
            crearNuevoDiv('purple')
        } else if (event.key === 'w'|| event.key === 'W') {
            crearNuevoDiv('gray')
        }
         else if (event.key === 'e'|| event.key === 'E') {
            crearNuevoDiv('brown')
        }
        })

