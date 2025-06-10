<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />

</template>

<style></style>


<!-- <script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <div class="page-container">
    <HeaderComponent />
    
    <main class="content">
      <RouterView />
    </main>
    
    <FooterComponent />
  </div>
</template>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style> -->