const details = document.querySelector('.project-details');
const buttons = document.querySelectorAll('.project-buttons button');

//Contenido de cada proyecto
const projects =
    {
        proyecto1:
            '<a class="pag-p" href="https://www.youtube.com/@eLeoH16" target="_blank">CANAL DE YOUTUBE <i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
            '<div class="social-icons">' +
                    '<a href="https://www.tiktok.com/@eleoh16"><i class="fab fa-tiktok"></i></a>' +
                    '<a href="https://instagram.com/eleoh16/"><i class="fab fa-instagram"></i></a>' +
                    '<a href="https://mast.lat/@eleoh16"><i class="fab fa-mastodon"></i></a>' +
            '</div>',
        proyecto2: 
            '<a class="pag-p" href="https://eleohdev.itch.io/" target="_blank">VIDEOJUEGOS <i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
            '<div class="social-icons">' +
                    '<a href="https://www.instagram.com/eleohdev/"><i class="fab fa-instagram"></i></a>' +
                    '<a href="https://tkz.one/@eleohdev"><i class="fab fa-mastodon"></i></a>' +
                    '<a href="https://youtube.com/@eleohdev"><i class="fab fa-youtube"></i></a>' +
            '</div>',

        proyecto3: 
            '<a class="pag-p" href="https://www.wattpad.com/user/eLeoHObras" target="_blank">CUENTOS Y NOVELAS <i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
            '<div class="social-icons">' +
                    '<a>ᴾʳᵒ́ˣᶦᵐᵃᵐᵉⁿᵗᵉ</a>' +
            '</div>'
    };

//Función para mostrar la descripción del proyecto
function showProjectDetails(projectId) 
{
    details.innerHTML = projects[projectId] || '';
}

//Función para ocultar la descripción y desactivar el botón activo
function resetDetails() 
{
    details.innerHTML = '';
    buttons.forEach(button => button.classList.remove('active'));
}

//Evento de clic en los botones para mostrar la descripción
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        //Resetear el estado de los detalles y el estado activo de los botones
        resetDetails();
        //Establece el nuevo contenido de la descripción
        const projectId = button.getAttribute('data-project-id');
        showProjectDetails(projectId);
        //Activa visualmente el botón seleccionado
        button.classList.add('active');
        event.stopPropagation(); // Evita que el clic se propague al documento
    });
});

//Evento de clic en el documento para ocultar los detalles al hacer clic fuera
/*document.addEventListener('click', (event) => {
    const isOutsideButtons = !event.target.closest('.project-buttons button');
    const isLink = event.target.tagName === 'A';

    //Solo resetea los detalles si el clic fue fuera de los botones y enlaces
    if (isOutsideButtons && !isLink) {
        resetDetails();
    }
});*/

const contactButton = document.getElementById('contactButton');
const contactInfo = document.getElementById('contactInfo');

contactButton.addEventListener('click', () => {
  // Aplica la animación de salida al botón
  contactButton.classList.add('fade-out');

  // Espera que termine la animación y luego oculta el botón
  setTimeout(() => {
    contactButton.style.display = 'none';
    // Muestra el correo con la animación de entrada
    contactInfo.style.display = 'inline';
  }, 500); // Coincide con la duración de 0.5s de la animación
});
