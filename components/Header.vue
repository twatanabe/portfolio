<template>
  <div class="pt-16 clearfix pb-32 max-w-90">
    <div class="w-2/5 float-left">
      <router-link to="/" class="title">
        Takumi Watanabe
      </router-link>
    </div>
    <div class="float-right text-right pt-2">
      <ul class="">
        <li class="float-left mx-6">
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

<style scoped lang="postcss">
.title {
  @apply text-2xl font-mono font-bold text-black no-underline;
}
</style>
