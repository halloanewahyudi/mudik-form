<script setup>
</script>
<template>
  <header class="fixed top-0 left-0 right-0 bg-brand-3 max-w-[480px] w-full mx-auto py-3 px-6 z-50 ">
    <nav class="flex gap-4 justify-between items-center">
      <img src="./assets/logo.svg" alt="" class="w-16">
      <div class="flex items-center rounded-lg divide-x-2 divide-brand-1 font-medium border-2 border-brand-1">
        <router-link to="/" class="py-2 px-4">Info</router-link>
        <router-link to="/form" class="py-2 px-4">Form</router-link>
      </div>
    </nav>
  </header>
  <div class="main flex flex-col items-center min-h-screen pt-5 pb-10 px-6 font-medium  font-mono">
    <div class="max-w-[480px] w-full  rounded-lg p-6 bg-white shadow-2xl">
    <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>

 .router-link-active{
  @apply bg-brand-1 text-white;
 }
</style>


