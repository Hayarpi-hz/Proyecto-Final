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
    <h2>Solicitar un Presupuesto</h2>
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

<style>
.order-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.order-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  padding: 10px 15px;
  color: white;
  background-color: #3e2f3e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #ffcc00;
}
</style>