<template>
  <div class="bg-gradient h-full w-full overflow-x-hidden">
    <div class="clearfix w-100 vh-100 horizontal-25 fixed">
      <div class="float-left w-1/4 h-screen">
        <div class="vertical-border"></div>
      </div>
    </div>

    <div class="px-6 lg:px-12 center">
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
    @apply border-l border-gray-400 h-screen
  }
  .horizontal-25 {
    left: 25%;
    padding-left: 20px;
    opacity: 0.4
  }
}
</style>
