<template>
  <section>
    <div class="box">
      <h2>{{title}}</h2>
      <div class="outline">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Box extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped>
.box {
  background: #fff;
}

h2 {
  font-size: 17px;
  padding: 14px;
  font-weight: bold;
  border-bottom: 1px solid #e8e8e8;
  background-color: #f9f9fa;
  letter-spacing: 0.05em;
}

.content {
  padding: 14px;
  word-break: break-all;
}

.outline {
  border: 1px solid #e7e9eb;
  border-radius: 6px;
  box-shadow: 0 0 0 1px #e7e9eb;
}
</style>
