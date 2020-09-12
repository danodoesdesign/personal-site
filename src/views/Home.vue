<template>
  <div class="flex justify-center w-full">
    <div class="container">
      <div class="flex flex-row">
        <!-- header section -->
        <div class="flex flex-col">
          <!-- header left -->
          <p class="mono">Twitter</p>
          <p class="mono">Figma</p>
          <p class="mono">Insta</p>
        </div>
        <div class="flex flex-row-reverse flex-grow">
          <!-- header right -->
          <p class="mono">
            Working for
            <a href="http://www.futurefriendly.team">Future Friendly</a>. Located at
            <a
              href="https://www.google.com/maps/place/Canberra+ACT+2601/@-35.2813043,149.1204446,15z/data=!3m1!4b1!4m5!3m4!1s0x6b164d69b05c9021:0x500ea6ea7695660!8m2!3d-35.2809368!4d149.1300092"
            >35.2809° S, 149.1300° E.</a>
          </p>
        </div>
      </div>
      <div class="flex justify-center screen-height items-center">
        <!-- title section -->
        <h1 class="expanding-title -mt-20">
          dano does
          <span class="fancy-colour">design</span>
        </h1>
      </div>
      <div class="flex justify-center">
        <!-- scrolling text -->
        <div class="marquee">
          <div class="marquee__inner mono" aria-hidden="true">
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
            <span>&darr; SCROLL FOR ESSAY</span>
          </div>
        </div>
      </div>
      <!-- header over -->
      <div class="mt-20">
        <h2>About me</h2>
        <p>This is about me.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//for some reason getting rid of anything here causes tailwind to mess up so
//don't remove this default style I guess
body {
  /* ... */
}

a {
  text-decoration: underline;
}

.screen-height {
  height: calc(100vh - 11.5rem);
}

@media only screen and (max-width: 640px) {
  //640 is tailwind base small breakpoint btw
  //fixes phone browser UI rendering over the top
  .screen-height {
    height: calc(100vh - 20rem);
  }
}

.expanding-title {
  font-size: 13vw;
  white-space: nowrap;
}

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
.marquee {
  position: relative;
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
}

.marquee__inner {
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 10s linear infinite;
  animation-play-state: running;
}

.marquee span {
  white-space: nowrap;
  font-size: 1.125rem;
  margin-left: 0.5rem;
}

.marquee:hover .marquee__inner {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>

<script>
export default {
  name: "Home",
  components: {
    /* ... */
  }
};
</script>