<template>
  <div class="lg:w-1/3 sm:w-1/2 float-left sm:pr-8 mb-12">
    <a :href="linkUrl" target="_blank">
      <div class="previewImage">
        <img class="container w-full lg:h-56 rounded-lg" :src="imageUrl" :alt="title"/>
      </div>
    </a>
      <div class="title my-4 text-black font-bold">
        <p>{{title}}</p>
      </div>
      <slot></slot>
      <a :href="linkUrl" target="_blank">Visit Site →</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Card extends Vue {
  @Prop() title!: string;
  @Prop() imageUrl!: string;
  @Prop() linkUrl!: string;
}
</script>

<style scoped>
</style>
