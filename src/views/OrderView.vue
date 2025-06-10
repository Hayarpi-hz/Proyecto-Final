<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import OrderComponent from "@/components/Order/OrderComponent.vue";
</script>

<template>
  <div class="view-container">
    <HeaderComponent />
    <main class="view-content">
      <h2>Your Orders</h2>
      <!-- Aquí podría ir más contenido relativo -->
    </main>
    <FooterComponent />
  </div>
</template>


<style>
.view-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.view-content {
  flex: 1; /* Permite que esta sección tome el espacio restante */
}
</style>