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
  justify-content: space-between;
  transition: all 0.2s;

  .note-title {
    font-size: 1.5em;
    color: #333;
    width: 100%;
    box-sizing: border-box; /* Asegura que el ancho incluya padding y border */
    margin-bottom: 10px; /* Espacio entre input y botón */
    padding: 5px;
    border: none;
    background-color: transparent;
    text-align: center;
  }

  .create-btn {
    background-color: #852a95;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: justify;
  }

  .create-btn:hover {
    background-color: #a36b9d;
  }

  .create-btn:active {
    background-color: lightyellow;
  }
}
.note-form:hover {
  border: 3px solid black;
  box-shadow: 0 0 10px;
}
</style>
