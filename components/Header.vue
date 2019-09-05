<template>
  <div class="">
    <div class="">
      <a href="/" class="text-2xl font-mono font-bold">
        Takumi Watanabe
      </a>
    </div>
    <div class="">
      <ul class="">
        <li class="">
          Projects
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
