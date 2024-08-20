<script setup>
import Navbar from "./components/Navbar.vue"
import "primeicons/primeicons.css";

</script>

<template>
  <div id="app">
    <div class="w-full h-screen relative">
      <nav>
        <Navbar class="z-10 fixed w-full top-0 left-0" />
      </nav>

      <body>
        <RouterView class="z-0 absolute w-full h-screen top-0 left-0" />
      </body>
    </div>
  </div>
</template>

<style scoped></style>
