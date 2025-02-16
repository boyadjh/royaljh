<template>
  <div
      class="w-full h-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 flex-1 justify-start items-center md:mt-0">
    <div class="h-full md:h-full relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center md:bg-top" style="background-image: url('/contact.jpg');">
      </div>
    </div>
    <div
        class="flex flex-col h-full md:h-auto pt-4 md:pt-0 my-2 md:mt-8 mx-2 md:ml-4 break-words gap-y-2 px-4 items-center md:items-start">
      <span class="text-lg font-semibold mb-2">CONTACT</span>
      <span class="">royal@royaljh.com</span>
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
