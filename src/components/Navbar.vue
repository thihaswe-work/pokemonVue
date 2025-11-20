<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink class="navbar-brand logo-font" to="#">
        <img
          src="../assets/images/logo.jpg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Pokedex
      </RouterLink>
      <div class="d-flex gap-5">
        <RouterLink to="/"> Home</RouterLink>
        <RouterLink to="/pokemon"> Pokemon</RouterLink>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav,
nav div,
nav div a {
  background: transparent !important;
  z-index: 20;
}

.logo-font {
  font-family: "La Belle Aurore", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
