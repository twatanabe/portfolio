<template>
  <div class="bg-gradient h-full w-full overflow-x-hidden">
    <div class="max-w-90 px-12 mx-56">
      <div class="mt-16 clearfix h-1 mb-32 max-w-90">
        <Header />
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../components/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class Default extends Vue {}
</script>

<style>
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
</style>
