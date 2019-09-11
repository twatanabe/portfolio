<template>
  <ContactComponent />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ContactComponent from "~/components/ContactComponent.vue";

@Component({
  components: {
    ContactComponent
  }
})
export default class Contact extends Vue {}
</script>
