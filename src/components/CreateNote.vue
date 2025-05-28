<script setup>
import { useNoteStore } from "@/stores/note";
import { ref } from "vue";

const noteStore = useNoteStore();

const handleSubmit = () => {
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
    />
    <button class="create-btn">+</button>
  </form>
</template>

<style>
.note-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  width: 200px;
}

.note-title {
  font-size: 1.5em;
  color: #333;
  width: 100%;
  box-sizing: border-box; /* Asegura que el ancho incluya padding y border */
  margin-bottom: 10px; /* Espacio entre input y botón */
  padding: 5px;
}

.create-btn {
  background-color: #333;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.create-btn:hover {
  background-color: #ffcc00;
}
</style>
