<script setup>
import NoteCard from "@/components/NoteCard.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useNoteStore } from "../stores/note";
import CreateNote from "@/components/CreateNote.vue";

const noteStore = useNoteStore();
</script>

<template>
  <HeaderComponent />
  <section id="notes-page">
    <h2>Notes</h2>

    <ul class="note-list">
      <li><CreateNote /></li>
      <li v-for="note in noteStore.notes" :key="note.id" class="note">
        <NoteCard :note="note"></NoteCard>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h3>Crea tu primera nota !</h3>
      </li>
    </ul>
  </section>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 20px;
}

#notes-page {
  display: flex;
  flex-direction: column; /* Alinea elementos verticalmente */
  align-items: center; /* Centra horizontalmente */
  min-height: 100vh; /* Asegura que ocupe toda la altura de la ventana */
  text-align: center;
}

.note-list {
  background-image: url("/src/assets/ImagenToDoList.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  list-style-type: none;
  padding: 20px; /* Espacio alrededor de las notas */
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  transition: transform 0.3s;
}

.note:hover {
  transform: scale(1.02);
}

.note-title {
  margin: 0;
  font-size: 1.5em;
  color: #333;
}

.note-content {
  margin-top: 10px;
  line-height: 1.6;
  color: #666;
}
</style>