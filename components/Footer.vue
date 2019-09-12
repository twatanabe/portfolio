<template>
  <div class="pb-32">
    <div class="buffer-footer-section clearfix"></div>
    <div class="buffer-footer-section clearfix"></div>
    <div class="buffer-footer-section clearfix"></div>
    <div class="footer-section clearfix">
      <a href="https://github.com/takumi-watanabe-cs" class="footer-link">
        <img src="@/assets/icon/github.png" class="big-icon"/>takumi-watanabe-cs
      </a>
      <a href="https://medium.com/@takumi_watanabe_cs" class="footer-link">
        <img src="@/assets/icon/medium.png" class="big-icon"/>takumi_watanabe_cs
      </a>
      <a href="mailto: hi@takumiwatanabe.me" class="footer-link">
        <img src="@/assets/icon/envelope.png" class="big-icon"/>hi@takumiwatanabe.me
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped lang="postcss">
.footer-section {
  @apply float-left;
}
.footer-link {
  @apply block text-sm mb-2;
}
.big-icon {
  width: 24px;
  margin-right: 8px;
  float: left;
}

  .buffer-footer-section {
    @apply float-left w-1/4 h-1;
  }

@screen lg {
  .footer-section {
    @apply float-left w-1/4 h-1;
  }
}
</style>
