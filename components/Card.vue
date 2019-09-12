<template>
  <div class="card">
    <a :href="linkUrl" target="_blank">
      <img class="img-box" :src="imageUrl" :alt="title"/>
    </a>
    <div class="card-title">
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

<style lang="postcss">

.card-title {
  @apply my-4 text-black font-bold;
}
.card {
  @apply pb-12;
}

.img-box {
  @apply w-full rounded-lg;
}

@screen sm {
  .card {
    @apply w-1/2 pr-8;
  }
}

@screen lg {
  .card {
    @apply pr-12;
    max-width: 37%;
  }
}

@screen lg {
  .card {
    /* @apply w-5/12; */
  }

  .img-box {
    /* height: 260px; */
    /* height: 14rem; */
  }
}

</style>
