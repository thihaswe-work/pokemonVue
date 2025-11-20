<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />

  <h1>Hello !</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <main>
    <RouterView />
  </main>
</template>
<style scoped></style>
