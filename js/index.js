// Script para el scroll 
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const menu = document.querySelector('.menu ul');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo: oculta el menú
            menu.style.opacity = '0';
            menu.style.transition = 'opacity 0.2s ease-out';
        } else {
            // Scroll hacia arriba o detención del scroll: muestra el menú
            menu.style.opacity = '1';
            menu.style.transition = 'opacity 0.2s ease-in';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Asegura que lastScrollTop no sea negativo
    });
});



// Galeria de imagenes

document.addEventListener('DOMContentLoaded', () => {
    const imgGallery = document.querySelector('.img-gallery');
    const images = imgGallery.children;

    function swapImages(index1, index2) {
        const temp = images[index1].src;
        images[index1].src = images[index2].src;
        images[index2].src = temp;
    }

    // Secuencia personalizada de cambios
    function startImageRotation() {
        setTimeout(() => {
            swapImages(0, 2); // Cambiar la primera imagen con la tercera
        }, 4000);

        setTimeout(() => {
            swapImages(1, 7); // Cambiar la segunda imagen con la última
        }, 5000);

        setTimeout(() => {
            swapImages(3, 5); // Cambiar la cuarta imagen con la sexta
        }, 8000);

        setTimeout(() => {
            swapImages(6, 4); // Cambiar la séptima imagen con la quinta
        }, 4000);
    }

    // Repetir la secuencia cada 15 segundos
    setInterval(startImageRotation, 12000);

    // Iniciar la primera rotación
    startImageRotation();
});


// Galaria de imagenes ligthbox

const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');

const openFullImg = (pic) => {
    fullImgBox.style.display= "flex";
    fullImg.src = pic;
}

const closeFullImg = () => {
    fullImgBox.style.display = "none"
}



// Codigo reservar formulario

const enviarAWhatsApp = () => {
    const nombreCompleto = document.getElementById("DatoNombre").value;
    const habitacion = document.getElementById("DatoHabitacion").value;
    const desde = document.getElementById("DatoDesde").value;
    const hasta = document.getElementById("DatoHasta").value;
    const cantidadPersonas = document.getElementById("DatoPersonas").value;

    const mensaje = `Hola Malala, ¿qué tal? Mi nombre es ${nombreCompleto}. Me gustaría saber sobre la disponibilidad de la habitación ${habitacion} desde el ${desde} hasta el ${hasta}. Somos ${cantidadPersonas}. ¡Gracias!`;

    const url = `https://wa.me/5493884618914?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarAWhatsApp();
});
  

