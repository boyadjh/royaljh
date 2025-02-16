<script setup>
</script>


<template>
  <div class="relative h-[100vh] w-full bg-cover bg-bottom bg-no-repeat" style="background-image:
  url('/show/hello-dolly/hero.jpg');">
    <div class="absolute inset-0 gradient text-light text-opacity-90 flex justify-end">
          <div class="font-medium text-right mb-3 p-5 mt-24 md:mt-8 w-full">
            <p class="font-bold text-4xl">HELLO DOLLY</p>
            <p class="font-semibold text-xl">Fremont High School</p>
            <p class="text-xs">Director: Ashley Patterson</p>
            <p class="text-xs">Asst. Director: Aubrey Obray</p>
            <p class="text-xs">Stage Manager: Jonah Olsen</p>
            <p class="text-xs">Lighting Designer: Colby Avis</p>
            <p class="text-xs">Asst. Lighting Designer: Royal Hollingshead</p>
          </div>
    </div>
  </div>

  <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-0.5 grid-rows-2 lg:grid-rows-4 grid-flow-row-dense bg-black">
    <img class="row-span-2" src="/show/hello-dolly/vert_1.jpg" alt="dolly" />
    <img class="col-span-2" src="/show/hello-dolly/hori_3.jpg" alt="dolly" />
    <div class="hidden md:block text-light p-4">
      <span class="text-2xl">November 2024</span>
      <p class="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus arcu, posuere nec ante
        et, pretium laoreet sapien. Nullam at quam nec libero egestas sagittis tristique sit amet lorem. Integer facilisis laoreet felis. Curabitur quis
      </p>
    </div>
    <img class="row-span-2" src="/show/hello-dolly/vert_2.jpg" alt="dolly" />
    <img class="col-span-2" src="/show/hello-dolly/hori_4.jpg" alt="dolly" />
    <img class="hidden md:block row-span-2" src="/show/hello-dolly/vert_3.jpg" alt="dolly" />
    <img class="col-span-2" src="/show/hello-dolly/hori_1.jpg" alt="dolly" />
    <img class="col-span-2" src="/show/hello-dolly/hori_2.jpg" alt="dolly" />
    <img class="hidden md:block" src="/show/hello-dolly/square_1.jpg" alt="dolly" />
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(180deg, rgb(0, 0, 0, .8) 20%, rgba(0, 0, 0, 0) 50%);
}
</style>
