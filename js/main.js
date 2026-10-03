// Configuración de la Galería de Fotos
const photos = [
    "assets/foto.jpg"
];

let currentSlide = 0;

function abrirInvitacion() {
  // 1. Ocultar la pantalla del sobre
  const sobre = document.getElementById('pantalla-sobre');
  sobre.classList.add('oculto');

  // 2. Reproducir la música
  const musica = document.getElementById('musica-fondo');
  musica.play().catch(error => {
    console.log("El navegador bloqueó el reproductor de audio:", error);
  });
}

function updateSlide() {
    const imgElement = document.getElementById("slider-img");
    if (imgElement && photos.length > 0) {
        imgElement.src = photos[currentSlide];
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % photos.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + photos.length) % photos.length;
    updateSlide();
}

// Botón de Confirmación vía WhatsApp
document.getElementById("rsvp-btn").addEventListener("click", () => {
    const phone = "51999999999"; // Reemplaza por tu número de WhatsApp
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia al 1er Añito Mágico 🌸🎉.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});
