<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-2 flex-1 items-center mt-16 pt-1 md:mt-4">
    <div class="h-[30vh] md:h-full relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/show/hello-dolly/square_1.jpg');">
        <div class="absolute left-0 top-0 right-0 h-32 gradient"></div>
      </div>
    </div>
    <div class="flex flex-col my-2 md:mt-8 mx-2 md:ml-4 break-words gap-y-8 px-4">
      <span class="text-3xl">Header Here</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut justo vel lectus euismod venenatis sed sed sapien. Fusce viverra dolor fermentum, molestie eros ut, bibendum velit. Nulla tempor neque quis venenatis tristique. Donec a fermentum nisl. Maecenas sed consectetur tellus. Duis maximus urna ac nibh consequat, pulvinar cursus felis condimentum. Donec vulputate placerat euismod. Suspendisse elit erat, tempus in libero nec, vehicula lacinia orci. Phasellus sed mi bibendum, dignissim tellus vel, sagittis magna.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut justo vel lectus euismod venenatis sed sed sapien. Fusce viverra dolor fermentum, molestie eros ut, bibendum velit. Nulla tempor neque quis venenatis tristique. Donec a fermentum nisl. Maecenas sed consectetur tellus. Duis maximus urna ac nibh consequat, pulvinar cursus felis condimentum. Donec vulputate placerat euismod. Suspendisse elit erat, tempus in libero nec, vehicula lacinia orci. Phasellus sed mi bibendum, dignissim tellus vel, sagittis magna.</p>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  background: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 30%);
}
</style>
