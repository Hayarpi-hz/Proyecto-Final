<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <div class="page-container" id="about">
    <HeaderComponent />

    <main class="content">
      <div class="about-container">
        <h2>Acerca de Mí</h2>

        <p>
          ¡Hola! Soy Hayarpi, apasionada por el DIY. Me encanta crear cosas y regalar 
          a mis amigos cosas hechas por mí. 
        </p>
        <p>
          Cuando no estoy trabajando, puedes encontrarme en el gym o en casa 
          peleándome con la máquina de coser o haciendo cualquier otro proyecto DIY.
        </p>

        <p>
          Caundo a mis amigos se les descose un vestido, o quieren arreglar algo, siempre 
          que eso lo puedo hacer yo. 
          
        </p>

        <p>
          Así que con esta página, si a ti también te pasa y tienes cosas que quieres 
          arreglar o crear, puedes pedirme que te ayude. 
        </p>

        <p>
          Si quieres saber más o tienes alguna pregunta, no dudes en contactarme
          a través de mi instagram. 
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

#about {
  font-family: "Arial", sans-serif;
  margin: 0;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("https://img.freepik.com/foto-gratis/arreglo-plano-panos-colores-pigmentos-naturales_23-2148734441.jpg?semt=ais_items_boosted&w=740");
}

.about-container {
  background-color: rgba(245, 245, 220, 0.85);
  max-width: 800px;
  margin: auto;
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3e2f3e; /* Marrón consistente con el estilo del botón en OrderComponent */
  text-align: center;
}

p {
  color: #333;
  padding: 15px;
  margin: 20px 0;
  border: 2px dashed #d2b48c;
  border-radius: 5px;
  background-color: #fffaf0;
}
</style>