<template>
  <div
      class="w-full h-full grid grid-cols-1 md:grid-cols-2 flex-1 justify-start items-center md:mt-0">
    <div class="h-[30vh] md:h-full relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-left" style="background-image: url('/show/hello-dolly/vert_2.jpg');">
      </div>
    </div>
    <div class="h-full md:h-auto flex flex-col my-2 md:mt-8 mx-2 md:ml-4 break-words gap-y-2 px-4 justify-start">
      <span class="text-lg font-semibold mb-2">CONTACT</span>
      <span class="">royalthepwner@gmail.com</span>
      <a href="http://instagram.com/royal.hollingshead" target="_blank" class="flex items-center gap-x-0.5">
        Instagram
        <LinkIcon class="aspect-square h-5"/>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import LinkIcon from "@/components/link-icon.vue";
</script>
