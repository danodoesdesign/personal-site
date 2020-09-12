<template>
  <div class="flex justify-center w-full">
    <div class="container">
      <div class="grid grid-cols-4 gap-1">
        <div class="col-span-1 flex flex-col">
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline" src="@/assets/twitter.svg" />
            </div>
            <div class="col-span-4">
              <a href="http://twitter.com/danodoesdesign" class="mono">Twitter</a>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline mr-2" src="@/assets/figma.svg" />
            </div>
            <div class="col-span-4">
              <a href="http://figma.com/@dano" class="mono">Figma</a>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline mr-2" src="@/assets/insta.svg" />
            </div>
            <div class="col-span-4">
              <a href="http://instagram.com/danodoesdesign" class="mono">Insta</a>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline mr-2" src="@/assets/github.svg" />
            </div>
            <div class="col-span-4">
              <a href="https://github.com/danodoesdesign" class="mono">GitHub</a>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline mr-2" src="@/assets/email.svg" />
            </div>
            <div class="col-span-4">
              <a href="mailto:dano.does.design@gmail.com" class="mono">Email</a>
            </div>
          </div>
        </div>
        <div class="col-span-4 sm:col-span-3 mt-4 sm:mt-0 flex flex-row-reverse">
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
        <h1 class="expanding-title -mt-26 sm:-mt-32">
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
      <div class="mt-40">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-32">
          <div class="col-span-1 flex flex-row sm:flex-row-reverse">
            <h2>about me</h2>
          </div>
          <div class="col-span-1 sm:col-span-2 mt-2">
            <p
              class="mono mb-3"
            >I’m a Daniel O’Hara, an Australian Product Designer who aspires to leave a positive mark on the world — instead of creating endlessly for the sake of capitalism &amp; profit.</p>
            <p
              class="mono mb-3"
            >A lot of my work has been with the Australian government, and I worry about my designy/techy skills stagnating in bureaucracy. However I believe, while working down under, I can help create the greatest social change by leveraging the scope of the powers that be.</p>
            <p
              class="mono mb-3"
            >By creating inclusive products and services, and helping mature design capability in the public service, I think I’ll help leave this world better than when I found it.</p>
          </div>
        </div>
      </div>
      <div class="mt-40 mb-40">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-32">
          <div class="col-span-1 flex flex-row sm:flex-row-reverse">
            <h2>more info??</h2>
          </div>
          <div class="col-span-1 sm:col-span-2 mt-2">
            <p
              class="mono mb-3"
            >I'm not looking to write this (or make case studies) rn bc I'm not looking for a role, but thanks for showing interest 🥺🥺</p>
            <p class="mono mb-3">Hey look since you're here DM or email me and tell me your story!!</p>
            <p class="mono">
              <a href="http://twitter.com/danodoesdesign">DM me on twitter dot com</a> or
              <a href="mailto:dano.does.design@gmail.com">email me</a>.
            </p>
          </div>
        </div>
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

li {
  @apply mb-2;
}

a {
  text-decoration: underline;
  &:hover {
    font-weight: 600;
    text-decoration: none;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 3s linear infinite;
    animation-play-state: running;
  }
}

.screen-height {
  height: calc(100vh - 17.5rem);
}

@media only screen and (max-width: 640px) {
  //640 is tailwind base small breakpoint btw
  //fixes phone browser UI rendering over the top
  .screen-height {
    height: calc(100vh - 31rem);
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