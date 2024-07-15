<script setup>
import Home from "./components/Home.vue"
import Navbar from "./components/Navbar.vue"

</script>

<template>
  <div class="w-full h-screen relative">
    <Navbar class="z-10 fixed w-full top-0 left-0" />
    <Home class="z-0 absolute w-full h-screen top-0 left-0" />
  </div>
</template>

<style scoped></style>
