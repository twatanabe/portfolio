<template>
  <div class="bg-gradient h-full w-full overflow-x-hidden">
    <div class="max-w-90 main-wrapper">
      <div class="vertical-border-wrapper">
        <!-- <div class="vertical-border"></div> -->
      </div>
      <div class="vertical-border-wrapper">
        <div class="vertical-border"></div>
      </div>
      <div class="vertical-border-wrapper">
      </div>
      <div class="vertical-border-wrapper">
      </div>
    </div>

    <div class="max-w-90 px-6 lg:px-12 center">
      <Header />

      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>

      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>

<style lang="postcss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@screen lg {
  .vertical-border {
    @apply border-l border-gray-400 h-screen;
  }
  .vertical-border-wrapper {
    @apply h-screen float-left w-1/4 px-4;
    opacity: 0.4;
  }

  .main-wrapper {
    pointer-events: none;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding-right: 5px;
    position: fixed;
    width: 100%;
    height: 100vh;
  }
  .absolute-center {
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
}

.sm-gray {
  @apply text-gray-600 text-xs;
}
.header {
  @apply font-mono text-3xl mb-8 font-bold tracking-tight;
  font-family: Interface, Avenir Next, sans-serif;
}
.sub-header {
  @apply text-xl mb-6 text-gray-700 font-semibold;
  font-family: Interface, Avenir Next, sans-serif;
}
.section {
  @apply pb-10 mb-20;
}
.bg {
  @apply rounded-lg;
  box-shadow: 0 24px 24px rgba(0, 0, 0, 0.03);
  background-color: hsla(0, 0%, 100%, 0.3);
}
.buffer {
  @apply hidden;
}

@screen lg {
  .header {
    @apply text-5xl mb-16;
  }

  .buffer {
    @apply block w-1/4 float-left h-1;
  }

  .section {
    @apply mb-32;
  }
}
</style>
