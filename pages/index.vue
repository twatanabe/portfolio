<template>
  <div class="flex justify-center">
    <div class="max-w-90 px-12 content-center">
      <div class="my-12 clearfix h-1 mb-20">
        <Header />
      </div>

      <div class="mb-12 clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-6xl font-bold mb-16">Awesome</h1>
        </div>
      </div>

      <div class="mb-32 clearfix">
        <Intro class="h-1"></Intro>
        <Intro title="Welcome">
          <p class="mb-6">
            Hi I'm Takumi Watanabe, a full-stack architect and cloud software engineer base in California.</p>
          <p class="mb-6">
            I create enterprise scale web application for various industries including Security, Laboratory, and Medical.</p>
          <p class="">
            I love building solutions to solve complex problems that makes me spark creativity and multidisciplinary thoughts while helping others achieve answers.</p>
        </Intro>
        <Intro title="Experience">
          <p class="mb-6">
            Currently I work with cloud platform service engineering for AI driven security application at
            <a href="https://www.cylance.com">Cylance</a>
            on big data aggregation development.
          </p>
          <p class="mb-6">As for backend development, I utilize .Net Core, Docker (EC2, ECS), Terraform, AWS Kinesis, AWS Lambda, AWS S3, AWS CloudWatch, MySQL, PostgreSQL.
            </p>
          <p class="">
            For web app development, I enjoy Node.js, Angular2, Vue, Express, Axios, GraphQL, MongoDB, and Firebase.</p>
        </Intro>
        <Intro title="Contact">
          <p class="">
            Thanks for reading this far, will be nice if we can get know each other further. Feel free to send me a hello message to <a>hello@takumi.com</a>
          </p>
        </Intro>
      </div>

      <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-5xl font-bold mb-16">Projects</h1>
        </div>
      </div>

      <div class="mb-32 clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <Card title="TopTrendBooks" imageUrl="" linkUrl="">
        </Card>
        <Card title="TopTrendGamings" imageUrl="" linkUrl="">
        </Card>
      </div>

      <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-5xl font-bold mb-16">Certifications</h1>
        </div>
      </div>

      <div class="mb-32 clearfix">
        <div class="">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Header from "../components/Header.vue";
import Box from "../components/Box.vue";
import Card from "../components/Card.vue";
import Intro from "../components/Intro.vue";

@Component({
  components: {
    Header,
    Box,
    Card,
    Intro
  }
})
export default class Home extends Vue {}
</script>

<style>
</style>
