<script setup>
import { ref } from 'vue';

const email = ref('');
const comment = ref('');

const handleSubmit = () => {
  // Aquí podrías implementar la lógica para enviar los datos a tu backend.
  console.log('Email:', email.value);
  console.log('Comentario:', comment.value);
  alert("¡Gracias por tu solicitud! Vamos a revisar y nos pondremos en contacto contigo pronto.");
  email.value = '';
  comment.value = '';
};
</script>

<template>
  <div class="order-container">
    <h2>I want it, you make it</h2>
     <p class="headline">Cuéntame tu idea</p>
    <form @submit.prevent="handleSubmit" class="order-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required placeholder="Tu email" />
      </div>
      <div class="form-group">
        <label for="comment">Comentario</label>
        <textarea id="comment" v-model="comment" required placeholder="Describe tu pedido aquí"></textarea>
      </div>
      <button type="submit" class="submit-btn">Enviar Solicitud</button>
    </form>
  </div>
</template>

<style scoped>
.order-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 30px;
  text-align: center;
  background-color: rgba(245, 245, 220, 0.85); /* Similar fondo al about-container */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-image: url("/src/assets/detalle.jpeg");
}

.headline {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #5a5a5a;
}

.order-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  text-align: left;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #ffcc00;
}

.submit-btn {
  padding: 10px 15px;
  color: white;
  background-color: #3e2f3e; /* Consistente con el h2 de AboutView */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #ffcc00;
}
</style>