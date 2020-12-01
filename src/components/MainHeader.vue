<template>
  <div class="flex justify-center w-full">
    <div class="container">
      <router-link v-show="bigBoy" to="/">
        <img
          class="h-10 sm:h-16 md:h-20 lg:h-24 xl:h-36"
          style="display: inline"
          src="@/assets/white-crest.svg"
        />
      </router-link>
      <h1 v-show="bigBoy" class="mt-4">
        The Department of
        <span class="fancy-colour">Apartment</span>.
      </h1>
      <h4 v-show="!bigBoy">
        <router-link to="/">
          <img
            class="h-8 mr-2 -mt-1"
            style="display: inline"
            src="@/assets/arrow-left.svg"
          />
          <img
            class="h-8 -mt-2 mr-2"
            style="display: inline"
            src="@/assets/white-crest.svg"
          />
          The Department of
          <span class="fancy-colour">Apartment</span>.
        </router-link>
      </h4>

      <h2 class="mt-10 mb-8">
        <img
          v-show="map"
          class="h-12 mr-2 -mt-2"
          style="display: inline"
          src="@/assets/map.svg"
        />
        <img
          v-show="directions"
          class="h-12 mr-2 -mt-2"
          style="display: inline"
          src="@/assets/directions.svg"
        />
        <img
          v-show="wifi"
          class="h-12 mr-2 -mt-2"
          style="display: inline"
          src="@/assets/wifi.svg"
        />
        {{ title }}
      </h2>
      <!--<button @click="toggleDarkMode">Toggle</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  props: {
    title: String,
    bigBoy: Boolean,
    map: Boolean,
    directions: Boolean,
    wifi: Boolean
  }
};
</script>

<style scoped lang="scss">
.fancy-colour {
  background: linear-gradient(270deg, #ec2f4b, #009fff);
  background-size: 400% 400%;

  -webkit-animation: gradientAnimation 6s ease infinite;
  -moz-animation: gradientAnimation 6s ease infinite;
  animation: gradientAnimation 6s ease infinite;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@-webkit-keyframes gradientAnimation {
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 100% 81%;
  }
  100% {
    background-position: 0% 20%;
  }
}
@-moz-keyframes gradientAnimation {
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 100% 81%;
  }
  100% {
    background-position: 0% 20%;
  }
}
@keyframes gradientAnimation {
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 100% 81%;
  }
  100% {
    background-position: 0% 20%;
  }
}
</style>
