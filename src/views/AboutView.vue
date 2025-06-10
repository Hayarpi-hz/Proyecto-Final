<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <div class="page-container">
    <HeaderComponent />

    <main class="content">
      <div class="about-container">
        <h2>Acerca de Mí</h2>

        <p>
          ¡Hola! Soy Hayarpi, apasionado/a por el DIY. Me encanta [actividad
          relevante o interés] y he dedicado [número de años o tiempo] en
          perfeccionar mis habilidades en [habilidad o campo específico].
        </p>
        <p>
          He creado esta página porque me gusta hacerlo todo yo. Aquí pueden
          pedirme tareas para poder ayudarles a coser y crear piezas únicas
          juntos. ¡Estoy emocionado de trabajar contigo!
        </p>

        <p>
          Mi misión es [tu misión personal o profesional]. Me enorgullece [logro
          personal o profesional].
        </p>

        <p>
          Cuando no estoy [actividad principal], puedes encontrarme [hobby o
          actividad secundaria]. ¡Siempre estoy buscando nuevas formas de
          conectar y compartir mi amor por [campo o interés]!
        </p>

        <p>
          Si quieres saber más o tienes alguna pregunta, no dudes en contactarme
          a través de [método de contacto, como correo electrónico o redes
          sociales].
        </p>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que ocupe toda la altura de la ventana */
}

/* Contenido principal */
.content {
  flex: 1; /* Toma el espacio restante entre el header y el footer */
}

body {
  font-family: "Arial", sans-serif;
  margin: 0;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("https://img.freepik.com/foto-gratis/arreglo-plano-panos-colores-pigmentos-naturales_23-2148734441.jpg?semt=ais_items_boosted&w=740"); /* Imagen de fondo temática */
}

.about-container {
  background-color: rgba(
    245,
    245,
    220,
    0.85
  ); /* Fondo cálido y semi-transparente */
  max-width: 800px;
  margin: auto;
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra suave para elevar el texto */
}

h2 {
  color: #8b4513; /* Marrón cálido */
  text-align: center;
}

p {
  color: #333;
  padding: 15px;
  margin: 20px 0;
  border: 2px dashed #d2b48c; /* Borde simulando puntada de costura */
  border-radius: 5px;
  background-color: #fffaf0;
}
</style>
