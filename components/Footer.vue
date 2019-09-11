<template>
  <div class="pt-16 clearfix lg:pb-32 pb-12 max-w-90">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped lang="postcss">
.title {
  @apply text-2xl font-mono font-bold text-black no-underline;
  font-family: Interface,Avenir Next,sans-serif;
}
</style>
