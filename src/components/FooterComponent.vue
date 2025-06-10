<script setup></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 I want it, I make it. Todos los derechos reservados.</p>
      <ul class="footer-links">
        <li>
          <a href="https://www.instagram.com/rizarelrizzo" target="_blank" class="footer-link">
            Instagram
          </a>
        </li>
        <!-- Más enlaces de redes sociales o información -->
        <li>
          <a href="/privacy" class="footer-link">Política de Privacidad</a>
        </li>
        <li>
          <a href="/terms" class="footer-link">Términos del Servicio</a>
        </li>
        <li>
          <a href="/contact" class="footer-link">Contacto</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #3e2f3e;
  color: #f4f4f9;
  text-align: center;
  padding: 20px;
  width: 100%;
  margin-top: auto;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-link {
  text-decoration: none;
  color: #f4f4f9;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffcc00;
}
</style>