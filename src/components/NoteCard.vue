<script setup>
defineProps({
  note: Object,
});
</script>

<template>
  <article class="note-card">
    <input type="text" class="card-title" v-model="note.title" />
    <input type="checkbox" v-model="note.marked" />
  </article>
</template>

<style></style>
