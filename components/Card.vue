<template>
  <div class="w-1/3 float-left pr-8 mb-12">
    <a :href="linkUrl" target="_blank">
      <div class="previewImage">
        <img class="container w-full h-56 rounded-lg" :src="imageUrl" :alt="title"/>
      </div>
      <div class="title my-4 text-black font-bold">
        {{title}}
      </div>
      <slot></slot>
    </a>
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
