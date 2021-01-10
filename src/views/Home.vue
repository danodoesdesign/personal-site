<template>
  <div class="flex justify-center w-full h-full">
    <div class="container pb-64">
      <div class="grid grid-cols-4 gap-1 sm:px-10">
        <div class="col-span-1 flex flex-col">
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline" src="@/assets/twitter.svg" />
            </div>
            <div class="col-span-4">
              <a href="http://twitter.com/danodoesdesign" class="mono"
                >Twitter</a
              >
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
              <a href="http://instagram.com/danodoesdesign" class="mono"
                >Insta</a
              >
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2 mb-2">
            <div class="col-span-1">
              <img class="inline mr-2" src="@/assets/github.svg" />
            </div>
            <div class="col-span-4">
              <a href="https://github.com/danodoesdesign" class="mono"
                >GitHub</a
              >
            </div>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <div class="col-span-1">
              <img class="inline mr-2" src="@/assets/email.svg" />
            </div>
            <div class="col-span-4">
              <a href="mailto:dano.does.design@gmail.com" class="mono">Email</a>
            </div>
          </div>
        </div>
        <div
          class="col-span-4 sm:col-span-3 mt-4 sm:mt-0 flex flex-row-reverse"
        >
          <p class="mono experiment sm:text-right">
            Working for
            <a href="http://www.futurefriendly.team">Future Friendly</a>.
            Located at
            <a
              href="https://www.google.com/maps/place/Canberra+ACT+2601/@-35.2813043,149.1204446,15z/data=!3m1!4b1!4m5!3m4!1s0x6b164d69b05c9021:0x500ea6ea7695660!8m2!3d-35.2809368!4d149.1300092"
              >35.2809° S, 149.1300° E.</a
            >
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center mt-20 text-white">
        <img
          id="globe"
          class="opacity-25 h-8/12 w-8/12 md:h-5/12 md:w-5/12 lg:h-5/12 lg:w-5/12 max-w-screen-md"
          src="@/assets/glove.gif"
        />

        <svg
          viewBox="-172 -172 810 810"
          fill="transparent"
          class="absolute h-10/12 w-10/12 md:h-6/12 md:w-6/12 lg:h-6/12 lg:w-6/12 max-w-screen-md animate-spin-slow"
        >
          <path
            id="s3"
            d="M1.01168 227.122C-0.456874 416.141 136.849 470 235.974 470C313.316 466.82 468 414.967 468 232.993C468 51.0179 313.316 2.58913 235.974 1.12159C157.653 -2.30267 2.26011 66.4318 1.01168 227.122Z"
          />
          <text font-size="68" dy="1.3em">
            <textPath
              id="globe-animate"
              xlink:href="#s3"
              fill="white"
              font-family="Roobert-SemiBold"
              side="right"
            >
              DANO DOES DESIGN —&nbsp;DANO DOES DESIGN —&nbsp;
            </textPath>
          </text>
        </svg>
      </div>

      <div class="flex flex-col justify-center mt-20 sm:mt-48">
        <div class="marquee mb-10 max-w-screen-xl">
          <div class="marquee__inner mono cursor-wait" aria-hidden="true">
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
            <span>&darr; <span class="text-cray">SCROLL FOR ESSAY</span></span>
          </div>
        </div>
      </div>
      <!-- header over -->
      <div class="mt-10 sm:mt-24 md:mt-48">
        <div
          id="nextSection"
          class="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-10 md:gap-22 lg:gap-32"
        >
          <div class="col-span-1 flex flex-row sm:flex-row-reverse">
            <h2 class="text-left sm:text-right">about me</h2>
          </div>
          <div class="col-span-1 sm:col-span-3 mt-2">
            <p class="mono mb-3">
              I’m a Daniel O’Hara, an Australian Product Designer who aspires to
              leave a positive mark on the world — instead of creating endlessly
              for the sake of capitalism &amp; profit.
            </p>

            <p class="mono mb-3">
              A lot of my work has been with the Australian government, and I
              worry about my designy/techy skills stagnating in bureaucracy.
              However I believe, while working down under, I can help create the
              greatest social change by leveraging the scope of the powers that
              be.
            </p>
            <p class="mono mb-3">
              By creating inclusive products and services, and helping mature
              design capability in the public service, I think I’ll help leave
              this world better than when I found it.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-24">
        <div
          class="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-10 md:gap-22 lg:gap-32"
        >
          <div class="col-span-1 flex flex-row sm:flex-row-reverse">
            <h2 class="text-left sm:text-right">what I do</h2>
          </div>
          <div class="col-span-1 sm:col-span-3 mt-2 mono">
            <p class="font-bold mono">Research &amp; product design</p>
            <p class="mono mt-1">
              Discover what needs to be made and why, make it co-operatively,
              test, learn, iterate.
              <br />
              <br />
              A few buzzwords for those who care and probably SEO:
              <br />

              UX, UI, Figma, Sketch, HTML, CSS, JS, Vue, TailwindCSS, Design
              Thinking, Prototypes, Usability Testing, Design Sprints, Agile,
              Lean, DTA Digital Service Standard.
            </p>

            <div class="col-span-1 sm:col-span-3 mt-10">
              <p class="font-bold mono">Minor voice acting</p>
              <p class="mono mt-1">
                So far just small radio ads, but really keen to do more.
              </p>
            </div>
            <div class="col-span-1 sm:col-span-3 mt-10">
              <p class="font-bold mono">Freelance brand &amp; graphic design</p>
              <p class="mono mt-1">
                The basics. Social media, physical presence, POS signage,
                advertising. Prefer to work with small or local businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 sm:mt-24 mb-64">
        <div
          class="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-10 md:gap-22 lg:gap-32"
        >
          <div class="col-span-1 flex flex-row sm:flex-row-reverse">
            <h2 class="text-left sm:text-right">current <br />projects</h2>
          </div>
          <div class="col-span-1 sm:col-span-3 mt-2">
            <p class="mono mb-5">
              <a href="http://protokit.danodoes.design/" class="font-bold"
                >Prototype kit</a
              ><br />
              Aiming to be a basic, but very inclusive UI kit for the super
              rapid concept prototype work we do at |F|F|. Will include Figma
              autolayout clone after first pass. Building in Vue with
              TailwindCSS via Nuxt.
            </p>
            <div class="col-span-1 sm:col-span-3 mt-2">
              <p class="mono mb-5">
                <a href="http://terminal.danodoes.design/" class="font-bold"
                  >Pseduo-terminal</a
                ><br />
                Having heaps of fun making a pseudo-macOS terminal in a browser.
                Making it from scratch with custom commands, fun easter eggs etc
                :). I bought a CRT TV to run this through with a Raspberry Pi
                and it's gonna look 90's vintage soon.
              </p>
            </div>
            <div class="col-span-1 sm:col-span-3 mt-2">
              <p class="mono mb-5">
                <a href="http://turnips.danodoes.design/" class="font-bold"
                  >Turnip tracker</a
                ><br />
                Have some ideas to make this a really sophisticated tool, if
                you're into Animal Crossing.
              </p>
            </div>

            <div class="col-span-1 sm:col-span-3 mt-2">
              <p class="mono mb-5">
                <span class="font-bold">3D for the web</span><br />
                Can't link but making some cool shit via
                <a href="http://www.3dfordesigners.com/">3D for Designers</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-center mt-42 mb-10 text-center px-2 md:px-10 lg:px-32"
      >
        <img class="w-10 h-10 self-center mb-10" src="@/assets/glove.gif" />
        <p class="mono">
          I was listening to
          <a href="https://www.youtube.com/watch?v=cNAdtkSjSps">Pong</a> the
          entire time I was making this, and I think I hit the mark with the
          white theme that hints and cyberpunk dystopia but is still reasonably
          professional.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#globe-animate:hover {
  transition-duration: 5s;
  transform: scale(1.1);
}

.big-text {
  font-size: 10vw;
}
body {
  background-color: #333;
  padding-bottom: 20rem;
}

.text-cray:hover {
  &,
  * {
    animation: cray 6s infinite steps(80);
    display: inline-block;
  }
}

@keyframes cray {
  @for $i from 1 to 80 {
    $per: 100% / 80 * $i;
    $weight: (100, 200, 300, 400, 500, 600, 700);
    $style: (normal, italic, normal, normal);
    $decor: (none, none, line-through, underline, none, none, none);
    $trans: (
      none,
      none,
      none,
      lowercase,
      none,
      none,
      none,
      none,
      none,
      none,
      none
    );

    $arrayW: random(7);
    $arrayS: random(4);
    $arrayD: random(7);
    $arrayT: random(11);

    #{$per} {
      font-weight: nth($weight, $arrayW);
      font-style: nth($style, $arrayS);
      text-decoration: nth($decor, $arrayD);
      text-transform: nth($trans, $arrayT);
    }
  }
}

#globe {
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
//for some reason getting rid of anything here causes tailwind to mess up so
//don't remove this default style I guess
body {
  /* ... */
}

html {
  scroll-behavior: smooth;
}

a:hover {
  outline: none;
  text-align: center;
  font-weight: 700;
  background: rgb(255, 255, 255);
  color: black;

  &,
  * {
    animation: cray 6s infinite steps(80);
    display: inline-block;
  }
}

@keyframes cray {
  @for $i from 1 to 80 {
    $per: 100% / 80 * $i;
    $weight: (100, 200, 300, 400, 500, 600, 700);
    $style: (normal, italic, normal, normal);
    $decor: (none, none, line-through, underline, none, none, none);
    $trans: (
      none,
      none,
      uppercase,
      lowercase,
      capitalize,
      none,
      none,
      none,
      none,
      none,
      none
    );

    $arrayW: random(7);
    $arrayS: random(4);
    $arrayD: random(7);
    $arrayT: random(11);

    #{$per} {
      font-weight: nth($weight, $arrayW);
      font-style: nth($style, $arrayS);
      text-decoration: nth($decor, $arrayD);
      text-transform: nth($trans, $arrayT);
    }
  }
}

li {
  @apply mb-2;
}

a {
  text-decoration: underline;
  &:hover {
    font-weight: 600;
    text-decoration: none;
  }
}
/*
.screen-height {
  height: calc(100vh - 25rem);
}
*/
@media only screen and (max-width: 640px) {
  //640 is tailwind base small breakpoint btw
  //fixes phone browser UI rendering over the top
  .screen-height {
    height: calc(100vh - 31rem);
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
  animation-direction: alternate;
}

.marquee span {
  white-space: nowrap;
  font-size: 1.125rem;
  margin-left: 0.5rem;
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
  },
};
</script>
