<template>
  <div class="clearfix global-header max-w-90">
    <div class="w-full sm:w-4/12 float-left">
      <router-link to="/" class="title">Takumi Watanabe</router-link>
    </div>
    <div class="sm:float-right text-right sm:pt-2 pt-16">
      <ul class="nav-item">
        <li class="nav">
          <router-link class="nav-link" exact to="/thoughts">Thoughts</router-link>
        </li>
        <li class="nav">
          <router-link class="nav-link" exact to="/projects">Projects</router-link>
        </li>
        <li class="nav">
          <router-link class="nav-link" exact to="/consult">Consult</router-link>
        </li>
        <li class="nav">
          <router-link class="nav-link" exact to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {}
</script>

<style lang="postcss">
.global-header {
  @apply pt-8 pb-12;
}

@screen lg {
  .global-header {
    @apply pt-16 pb-32;
  }
}

.title {
  @apply text-2xl font-mono font-bold text-black no-underline;
  font-family: Interface, Avenir Next, sans-serif;
}

.nav {
  @apply float-left mr-6 mb-2;
}

.nav-item a.nuxt-link-active {
  color: black;
}
</style>
