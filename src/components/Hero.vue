<script setup>
import Banner from "../components/Banner.vue";
</script>
<template>
  <div class="w-screen d-flex hero">
    <div class="clip-div w-100 h-100"></div>

    <Banner class="left-hero w-50 h-100" />
    <div
      class="right-hero w-50 h-100 d-flex justify-content-center align-items-center"
    >
      <img src="../assets/images/Charizard.png" />
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 80vh;
}

.hero img {
  width: 500px;
  height: 500px;
  object-fit: contain;
}

.right-hero {
  height: 100%;
  z-index: 20;
}

.clip-div {
  clip-path: polygon(53% 0, 100% 0, 100% 100%, 44% 100%);
  background-color: rgb(125, 156, 126);
  width: 100%;
  top: 0;
  position: absolute;
}
</style>
