<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import OrderComponent from "@/components/Order/OrderComponent.vue";
</script>

<template>
  <div class="view-container" id="order">
    <HeaderComponent />
    <main class="view-content">
      <OrderComponent />
      <!-- Aquí podría ir más contenido relativo -->
    </main>
    <FooterComponent />
  </div>
</template>


<style>
#order {
  margin: 0;
  background: linear-gradient(
    135deg,
    #f5f5dc,
    #e0cda9
  ); /* Gradiente de colores beige y tierra */
}
.view-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.view-content {
  flex: 1; /* Permite que esta sección tome el espacio restante */
}
</style>