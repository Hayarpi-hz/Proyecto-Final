<script setup>

defineProps({
  brand: String,
})
</script>

<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/I want it, I make it.png" alt="Logo" class="logo" />
    </div>
    <div class="title-container">
      <h1 class="title">I want it, I make it</h1>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="link">Home</router-link>
        </li>
        <li>
          <router-link to="/notes" class="link">Notes</router-link>
        </li>
        <li>
          <router-link to="/about" class="link">About</router-link>
        </li>
        <li>
          <router-link to="/order" class="link">Order</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: #3e2f3e;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espacio entre el logo y el resto */
  width: 100%;
}

.logo-container {
  flex: 0 0 auto; /* Solo toma el espacio requerido por el logo */
}

.title-container {
  flex: 1; /* Permite que el título ocupe el espacio restante */
  text-align: center; /* Centra el título */
}


.logo {
  width: 80px; /* Tamaño del logo */
  height: auto;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  justify-content: center; /* Centra los enlaces del nav */
  gap: 30px; /* Espaciado uniforme entre enlaces */
  flex-wrap: wrap;
}

.nav-list .link {
  text-decoration: none;
  color: #f4f4f9;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 10px;
}

.nav-list .link:hover {
  color: #ffcc00;
  background-color: #282828;
  border-radius: 5px;
}
</style>
