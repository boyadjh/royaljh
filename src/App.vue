<script setup>
import Header from './components/header.vue'
import Footer from "@/components/footer.vue";

</script>

<template>
  <div class="w-full min-h-full flex flex-col justify-between">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.tile-wrapper > img {
  @apply aspect-square w-1/4 brightness-75 cursor-pointer transition-all;
  &:hover {
    @apply brightness-[.65]
  }
}
</style>
