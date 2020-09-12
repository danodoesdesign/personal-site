<template>
  <div id="app" class="w-full h-screen flex flex-col items-center p-10">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

body {
  background-color: black;
}

//stackoverflow fix for mobile max height cutoff background colour
@media only screen and (max-width: 1280px) {
  //640 is tailwind base small breakpoint btw
  body {
    height: auto;
  }
}
</style>
