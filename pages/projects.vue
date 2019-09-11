<template>
  <div class="">
    <ProjectsComponent />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ProjectsComponent from "~/components/ProjectsComponent.vue";

@Component({
  components: {
    ProjectsComponent,
  }
})
export default class Projects extends Vue {}
</script>
