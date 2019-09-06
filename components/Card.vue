<template>
  <div class="w-1/4 float-left pr-8">
    <a :href="linkUrl">
      <div class="previewImage">
        <img class="container" :src="imageUrl" :alt="title"/>
      </div>
      <div class="title">
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
