<template>
  <div class="pt-16 clearfix lg:pb-32 pb-12 max-w-90">
    <div class="w-full sm:w-4/12 float-left">
      <router-link to="/" class="title">
        Takumi Watanabe
      </router-link>
    </div>
    <div class="sm:float-right text-right pt-2">
      <ul class="nav-item">
        <li class="float-left mr-6">
          <router-link class="nav-link" exact to="/projects">
            Projects
          </router-link>
        </li>
        <li class="float-left mx-4">
          <router-link class="nav-link" exact to="/consult">
            Consult
          </router-link>
        </li>
        <li class="float-left mx-4">
          <router-link class="nav-link" exact to="/contact">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  @Prop() title!: string;
  router: string = "";

  mounted() {
    this.router = this.$route.params.fullPath;
    console.log(this.router);
  }
}
</script>

<style lang="postcss">
.title {
  @apply text-2xl font-mono font-bold text-black no-underline;
  font-family: Interface,Avenir Next,sans-serif;
}

.nav-item a.nuxt-link-active {
  color: black;
}
</style>
