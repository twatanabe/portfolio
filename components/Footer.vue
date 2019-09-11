<template>
  <div class="mb-10 clearfix">
    <p>phone: 1-424-999-5344</p>
    <p>email: hello@takumiwatanabe.com</p>
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
