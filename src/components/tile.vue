<script setup>

import {useRouter} from "vue-router";

const props = defineProps(['source', 'label', 'linkTo']);

const router = useRouter()

function navigate() {
  router.push(props.linkTo)
}
</script>

<template>
  <div @click="navigate()"
      class="aspect-square bg-cover relative bg-blend-multiply bg-neutral-300 hover:bg-neutral-400 transition-colors cursor-pointer"
       :style="{'background-image': `url(${props.source })`}">
    <span class="absolute text-light left-0 bottom-0 text-6xl font-bold w-1/2 uppercase">{{props.label}}</span>
  </div>
</template>

