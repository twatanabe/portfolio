<template>
  <div class="opacity-100 float-left md:pr-8 pl-8 lg:pl-0" :class="{ 'lg:w-1/3': w == '3', 'lg:w-1/4': w == '4', 'lg:w-1/5': w == '5', 'lg:w-1/6': w == '6'}">
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
  @Prop({default: ""}) title!: string;
  @Prop({default: false}) outline!: boolean;
  @Prop({default: 4}) w!: string;
}
</script>

<style scoped>
h2 {
  font-size: 17px;
  padding: 30px 30px 15px 0;
  font-weight: bold;
  border-bottom: 0.1px solid 	#D8D8D8;
  /* background-color: #f9f9fa; */
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: gray;
}

.outline {
  border: 1px solid #e7e9eb;
  border-radius: 16px;
  box-shadow: 0 0 0 1px #e7e9eb;
}

.content {
  padding: 30px 30px 0 0;
  /* box-shadow: 0 0 0 1px #e7e9eb;
  background-color: hsla(0,0%,100%,.3) */
}
</style>
