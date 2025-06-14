<script setup>
import { useNoteStore } from "@/stores/note";
import { ref } from "vue";

const noteStore = useNoteStore();

const handleSubmit = () => {
  // si el usuario no ha introducido nada en el campo de nueva nota no hacer nada
  if (!title.value) return
  noteStore.addNote(title.value);
  title.value = "";
};

const title = ref("");
</script>

<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="note-title"
      placeholder="Nueva Nota"
      v-model="title"
      name="new-note"
    />
    <button class="create-btn">+</button>
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 245, 235, 0.9); /* Suaviza el color de fondo */
  border: none;
  border-radius: 5px; /* Hacer los bordes menos pronunciados */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Suaviza la sombra */
  padding: 15px;
  margin-bottom: 20px;
  width: 250px;
  justify-content: space-between;
  transition: all 0.2s;
}

.note-title {
  font-size: 1em;
  color: #5a4a3f; /* Un marrón suave que calza con los tonos tierra */
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #d2b48c; /* Cambiado a un color beige tenue */
  border-radius: 5px;
  background-color: #fff8e7; /* Fondo de un beige claro */
  text-align: center;
  transition: border-color 0.3s ease;
}

.note-title:focus {
  border-color: #bfa07a; /* Un tono tierra más grisáceo al enfocar */
}

.create-btn {
  background-color: #8b6f61; /* Marrón tierra suave */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.create-btn:hover {
  background-color: #bfa07a; /* Color al pasar el mouse por encima */
}

.create-btn:active {
  background-color: #d2b48c; /* Color al hacer clic */
}

.note-form:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Suavizar más la sombra */
}
</style>