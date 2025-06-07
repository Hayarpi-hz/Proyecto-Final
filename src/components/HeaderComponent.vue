<script setup></script>

<template>
  <header class="header">
    <h1 class="title">I want it, I make it</h1>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.title {
  color: #f4f4f9;
  font-size: 2.5em;
  margin: 0;
}

.nav-list {
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
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
