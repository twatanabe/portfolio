<template>
  <div class="">
    <div class="float-left w-3/5">
      <a href="/" class="text-2xl font-mono font-bold text-black">
        Takumi Watanabe
      </a>
    </div>
    <div class="float-left w-1/4">
      <ul class="">
        <li class="float-left mx-8">
          Projects
        </li>
        <li class="float-left mx-8">
          Certs
        </li>
        <li class="float-left mx-8">
          Contact
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Box extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped>
</style>
