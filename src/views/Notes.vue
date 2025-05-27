<script setup>
import { useNoteStore } from "../store/note";

const noteStore = useNoteStore();
</script>

<template>
  <section id="notes-page">
    <h2>Notes</h2>

    <ul class="note-list">
      <li v-for="note in noteStore.notes" :key="note.id">
        {{ note.title }}
      </li>
    </ul>
  </section>
</template>

<style></style>
