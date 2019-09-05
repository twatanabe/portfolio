<template>
  <div class="">
    <slot></slot>
  </div>
    <!-- <div class="blur center mw9 pa4-ns pa3">
      <div class="card items-start pr4-l pr3-m pr0 pb4 relative w-33-l w-100">
        <div class="bg-white-30 br4 overflow-hidden shadow">
          <div class="black-30 b bb b--black-05 f6 flex items-center justify-between ph4 pv3">
            <span class="tracked ttu">{{title}}</span>
            <slot></slot>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Box extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped>
@import "../assets/css/tailwind.css";
.box {
  background: #fff;
}

h2 {
  font-size: 17px;
  padding: 14px;
  font-weight: bold;
  /* border-bottom: 1px solid #e8e8e8; */
  background-color: #f9f9fa;
}

.content {
  padding: 14px;
  word-break: break-all;
}

.outline {
  /* border: 1px solid #e7e9eb; */
  border-radius: 6px;
  box-shadow: 0 0 0 1px #e7e9eb;
}
</style>
