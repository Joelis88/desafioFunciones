// SE TIENE COMO BASE 

function pintar() {
    ele = document.getElementById("ele1");
    ele.style.backgroundColor = 'yellow';
    }

    const parrafo = document.querySelector("div");
    parrafo.addEventListener("click", pintar);

    // MODIFICAMOS LA FUNCION USANDO UNA FUNCION ANONIMA

    parrafo.addEventListener('click', function(){
    
    })

    
    
    //MODIFICAMOS EL CODIGO ANTERIOR PARA CAMBIAR de verde a amarillo
      
   function pintar() {
        ele = document.getElementById("ele1");
        ele.style.backgroundColor = 'green';
    }
    
    parrafo.addEventListener('click', function(){
        
        ele.style.backgroundColor = 'yellow';
    
    })
pintar ()
  