window.onload = function() {
    
    const botones = document.querySelectorAll('button');

    botones.forEach(function(boton) {
        
        boton.addEventListener('click', function(event) {
         
            const parrafo = boton.previousElementSibling; 

            
            if (parrafo.style.display === 'none') {
                parrafo.style.display = 'block'; 
                boton.textContent = 'Ocultar contenidos'; 
            } else {
                parrafo.style.display = 'none'; 
                boton.textContent = 'Mostrar contenidos'; 
            }
        });
    });
};


