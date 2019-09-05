<template>
  <div class="w-1/4 float-left pr-8">
    <h2 v-if="title != ''">{{title}}</h2>
    <div class="content" :class="{ outline: outline }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Intro extends Vue {
  @Prop() title!: string;
  @Prop() outline: boolean = false;
}
</script>

<style scoped>
h2 {
  font-size: 17px;
  padding: 30px;
  font-weight: bold;
  border-bottom: 1px solid #e8e8e8;
  background-color: #f9f9fa;
}

.outline {
  border: 1px solid #e7e9eb;
  border-radius: 16px;
  box-shadow: 0 0 0 1px #e7e9eb;
}

.content {
  padding: 30px;
  word-break: break-all;
}
</style>
