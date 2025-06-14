<script setup>
import { useNoteStore } from '@/stores/note'
const props = defineProps({
  note: Object,
});

const noteStore = useNoteStore()

function handleDelete () {
  noteStore.removeNote(props.note)
}
</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" name="note-title" v-model="note.title" />
    <input type="checkbox" class="checkbox" name="note-checked"  v-model="note.marked"  />
    <button @click="handleDelete" class="delete-btn">Eliminar</button>
  </article>
</template>

<style>
.note-card {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(245, 245, 220, 0.9); /* Fondo beige claro */
  border: 2px solid #8b6f61; /* Marrón tierra suave */
  border-radius: 5px; /* Hacemos los bordes un poco más suaves */
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  transition: all 0.2s;
}

.card-title {
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #5a4a3f; /* Marrón suave */
  flex: 1 0 auto;
}

[type="checkbox"] {
  transform: scale(1.5) translateX(-2px); /* Ajustamos el tamaño y posición */
}

.note-card:hover {
  border: 2px solid #bfa07a; /* Un tono más claro en el hover */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra más sutil */
}

.note-card:has(input:checked) {
  border: 2px solid #d2b48c; /* Borde beige claro cuando está marcado */
  background-color: rgba(255, 255, 240, 0.8); /* Fondo más claro para los marcados */

  .card-title {
    font-weight: 400;
    color: #8b6f61; /* Cambio de color cuando está marcado */
  }
}

.delete-btn {
  background-color: #8b6f61; /* Marrón tierra para el botón */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #bfa07a; /* Tono más claro en hover */
}
</style>