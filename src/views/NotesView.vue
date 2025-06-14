<script setup>
import NoteCard from "@/components/NoteCard.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useNoteStore } from "../stores/note";
import CreateNote from "@/components/CreateNote.vue";
import { onMounted } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getNotes();
});
</script>

<template>
  <HeaderComponent />
  <section id="notes-page">
    <h2>♡</h2>

    <h2 v-if="noteStore.loading">Cargando...</h2>
    <div v-else-if="noteStore.error" class="error-message">
      <img src="@/assets/sadcat.webp" alt="Error Cat" class="error-image" />
      <p>¡Ups! Hubo un problema al cargar las notas. 
        <br />Vuelve a intentarlo más tarde.
        <br />Como no he pagado la API tienes que recordarme que la vuelva a añadir, 
        porque se han acabado los clics gratuitos.</p>
    </div>
    <h2 v-else-if="noteStore.error">Algo ha ido mal, c</h2>
    <ul v-else class="note-list">
      <li><CreateNote /></li>
      <li v-for="note in noteStore.notes" :key="note.id" class="note">
        <NoteCard :note="note"></NoteCard>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h3>Crea tu primera nota !</h3>
      </li>
    </ul>
  </section>
  <FooterComponent />
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0px;
}

#notes-page {
  display: flex;
  flex-direction: column; /* Alinea elementos verticalmente */
  align-items: center; /* Centra horizontalmente */
  min-height: 100vh; /* Asegura que ocupe toda la altura de la ventana */
  text-align: center;
  background: linear-gradient(
    135deg,
    #f5f5dc,
    #e0cda9
  ); /* Gradiente de colores beige y tierra */
}

.note-list {
  position: relative; /* Necesario para posicionar el pseudo-elemento correctamente */
  background-image: url("/src/assets/ImagenToDoList.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  list-style-type: none;
  padding: 110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-width: 700px;
  max-width: 750px;
  z-index: 0; /* Asegura que el contenido se muestre sobre el pseudo-elemento */
}

.note-list::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6); /* Capa semi-transparente blanca */
  z-index: -1; /* Se coloca detrás del contenido */
  pointer-events: none; /* Asegura que no interfiera con interacciones de usuario */
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

.empty-msg {
  text-align: center;
}

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.error-image {
  max-width: 500px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.error-message p {
  color: #b56576; /* Un color que resalte el mensaje */
  font-size: 1.2em;
}
</style>
