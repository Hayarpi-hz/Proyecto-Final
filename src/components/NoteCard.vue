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
  background-color: lightyellow;
  border: 3px solid #000022;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  transition: all 0, 2s;

  .card-title {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
    flex: 1 0 auto;
  }
  [type="checkbox"] {
    transform: scale(2) translateX(-2px);
  }
}
.note-card:hover {
  border: 2px solid black;
  box-shadow: 0 0 10px;
}
.note-card:has(input:checked) {
  border: 2px solid lightgray;
  background-color: lightgray;

  .card-title {
    font-weight: 100;
  }
}
</style>