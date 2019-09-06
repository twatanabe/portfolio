<template>
  <div class="">
    <div class="float-left w-3/5">
      <a href="/" class="text-2xl font-mono font-bold text-black">
        Takumi Watanabe
      </a>
    </div>
    <div class="float-left w-1/3">
      <ul class="">
        <li class="float-left mx-6">
          <a class="text-black">
            Projects
          </a>
        </li>
        <li class="float-left mx-6">
          <a class="text-black">
            Profession
          </a>
        </li>
        <li class="float-left mx-6">
          <a class="text-black">
            Consult
          </a>
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
