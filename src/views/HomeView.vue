<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <div class="logo-container" id="home">
    <!-- Sección del Título -->
    <section class="hero-section">
      <h1 class="diy-text">I want it, I make it</h1>
    </section>

    <!-- Galería de Fotos -->
    <section class="photo-gallery">
      <img src="../assets/shorts.jpg" alt="Foto 1" class="gallery-photo"/>
      <img src="../assets/regalo.jpg" alt="Foto 2" class="gallery-photo"/>
    </section>
      <!-- Sección de Imagen y Video -->
  <section class="media-section">
    <div class="media-image">
      <img src="../assets/girasol.jpg" alt="Imagen destacada" />
    </div>
    <div class="media-video">
      <video autoplay muted loop playsinline class="video-background">
        <source src="../assets/VID_20240119_122823.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  </section>
    <button class="explore-btn">Explorar Más</button>
  </div>
  <FooterComponent />
</template>

<style scoped>
#home {
  font-family: "Arial", sans-serif;
  margin: 0;
  background: linear-gradient(
    135deg,
    #f5f5dc,
    #e0cda9
  ); /* Gradiente de colores beige y tierra */
}

.logo-container {
  display: flex;
  flex-direction: column; /* Para alinear el texto e imagen verticalmente */
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda la altura de la página */
  text-align: center;
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Ajustar según necesidad */
  text-align: center;
  background: linear-gradient(135deg, #f5f5dc, #e0cda9);
}

.diy-text {
  font-family: "Montserrat", sans-serif;
  font-size: 5rem;
  color: #333;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border: 2px solid #000;
  padding: 10px;
  transform: skewX(-10deg);
  animation: slideIn 1s ease-in-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.diy-logo {
  width: 150px; /* Ajusta el tamaño del logo según necesites */
  margin-bottom: 20px; /* Espacio entre la imagen y el texto */
}

.photo-gallery {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
  gap: 20px;
}

.gallery-photo {
  max-width: 340px; /* Ajustar tamaño según preferencia */
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.media-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0;
  gap: 20px;
}

.media-image img {
  max-width: 250px; /* Ajustar tamaño según necesidad */
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.media-video .video-background {
  width: 300px; /* Ajustar según necesites */
  height: auto;
  border-radius: 10px;
}
.explore-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3e2f3e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.explore-btn:hover {
  background-color: #ffcc00;
}

.header-video {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.video-background {
  width: 20%;
  height: auto;
  object-fit: cover; /* Asegúrate de que el video cubra toda la sección */
}
</style>
