<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';

 

</script>

<template>
<HeaderComponent />
<div class="logo-container">
    <!-- Aquí puedes utilizar una imagen si tienes un logo gráfico -->
    <!-- <img src="../assets/logo.png" alt="DIY Logo" class="diy-logo" /> -->
    
    <!-- Texto de tu logo -->
    <h1 class="diy-text">I want it, I make it</h1>
  </div>

</template>


<style scoped>
.logo-container {
  display: flex;
  flex-direction: column; /* Para alinear el texto e imagen verticalmente */
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda la altura de la página */
  text-align: center;
}

.diy-text {
  font-family: 'Arial', sans-serif;
  font-size: 3rem;
  color: #333; /* Cambia el color según tu diseño */
  margin: 0;
}

.diy-logo {
  width: 150px; /* Ajusta el tamaño del logo según necesites */
  margin-bottom: 20px; /* Espacio entre la imagen y el texto */
}
</style>