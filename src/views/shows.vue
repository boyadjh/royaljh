<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex-grow-0">
    <Tile v-for="i in [0,1,2,3,4,5,6,7,8]" label="HELLO DOLLY" source="construct.jpeg" link-to="hello-dolly"/>
  </div>
</template>
<script setup lang="ts">
import Tile from "@/components/tile.vue";
</script>
