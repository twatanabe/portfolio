<template>
  <div class="flex justify-center">
    <div class="max-w-90 px-12 content-center">
      <!-- <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-6xl font-bold mb-16"></h1>
        </div>
      </div> -->

      <div class="mb-24 clearfix">
        <Intro class="h-1"></Intro>
        <Intro title="">
          <p class="mb-6">
            Hi 👋 I'm Takumi Watanabe, a full-stack software engineer and cloud architect based in California.</p>
          <p class="mb-6">
            I create enterprise scale web application for various industries including Security, Laboratory, and Medical.</p>
          <p class="mb-6">
            I love building solutions for complex problems that makes me spark creativity and multidisciplinary thoughts while helping others achieve goals.</p>
          <p class="">
            Studied undergrad Mathematics 💯 and post-grad Computer Science, good times.</p>
        </Intro>
        <Intro title="Experience">
          <p class="mb-6">
            Currently I work with cloud platform service engineering for AI driven security application at
            <a href="https://www.cylance.com">Cylance</a>
            on big data aggregation development.
          </p>
          <p class="mb-6">As for backend development, I utilize .Net Core, Docker (EC2, ECS), Terraform, Jenkins, Nginx, AWS Kinesis, AWS Lambda, AWS S3, AWS CloudWatch, MSSQL, PostgreSQL.
            </p>
          <p class="">
            For web app development, I'm keen with Node.js, Angular2, Vue, Express, Axios, GraphQL, Apollo, MongoDB, and Firebase.</p>
        </Intro>
        <Intro title="Contact">
          <p class="">
            Thanks for getting to know me, it will be nice if you can also share about yourself. Feel free to send me a hello message to <a>hello@takumiwatanabe.com</a>
          </p>
        </Intro>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Projects extends Vue {}
</script>
