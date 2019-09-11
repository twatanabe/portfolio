<template>
  <div class="">
    <div class="clearfix">
      <div class="buffer"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">Projects.</h1>
      </div>
    </div>

    <div class="clearfix section">
      <div class="buffer sm-gray">Project update in progress</div>
      <Card
        title="DevUp"
        :imageUrl="require('@/assets/devup.png')"
        linkUrl="https://devup-staging.netlify.com"
        target="_blank"
      >
        <p class="text-black mb-4">Community driven project gathering site for developers.</p>
      </Card>
      <Card
        title="TopTrendBooks"
        :imageUrl="require('@/assets/toptrendbooks.png')"
        linkUrl="https://toptrendbooks.com"
        target="_blank"
      >
        <p class="text-black mb-4">Rank over 15,000 books everyday based on Reddit 📚</p>
      </Card>
      <div class="w-1/4 float-left h-1 lg:block hidden"></div>
      <Card
        title="Reverse Proxy Docker Monitorstats"
        :imageUrl="require('@/assets/grafana2.png')"
        linkUrl="https://grafana.takumilab.net"
        target="_blank"
      >
        <p class="text-black mb-4"></p>
      </Card>
      <!-- <div class="w-1/4 block float-left h-1"></div>
        <Card title="TopTrendBooks" :imageUrl="require('@/assets/toptrendbooks.png')" linkUrl="https://toptrendbooks.com" target="_blank">
          <p class="text-black">Rank over 15,000 books everyday based on Reddit 📚</p>
      </Card>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "./Card.vue";

@Component({
  components: {
    Card
  }
})
export default class ProjectsComponent extends Vue {
}
</script>

<style lang="postcss">
</style>
