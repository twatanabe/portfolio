<template>
  <div class="">
    <div class="w-1/5 float-left">
      <router-link to="/" class="text-2xl font-mono font-bold text-black">
        Takumi Watanabe
      </router-link>
    </div>
    <div class="w-2/5 float-right text-right">
      <ul class="">
        <li class="float-left mx-4">
          <router-link to="/projects" class="text-black">
            Projects
          </router-link>
        </li>
        <li class="float-left mx-4">
          <router-link to="/consult" class="text-black">
            Consult
          </router-link>
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
