<template>
  <div class>
    <div class="clearfix">
      <div class="w-1/4 block float-left"></div>
      <div class="w-3/4 block float-left">
        <!-- <h1 class="font-mono text-6xl font-bold mb-16">Code to Resolve.</h1> -->
      </div>
    </div>

    <div class="clearfix section mb-24">
      <Intro class="lg:mt-16">
        <div class="lg:pl-8">
          <span class="sm-gray block">Exciting project in mind?</span>
          <span class="sm-gray mb-5 block">Would my skillset aid you?</span>

          <span class="sm-gray block">
            <router-link to="/contact">Let's get in touch.</router-link>
          </span>
        </div>
      </Intro>

      <Intro title="Welcome">
        <p
          class="mb-6"
        >Hi I'm Takumi Watanabe, a full-stack software engineer and cloud architect based in California.</p>
        <p
          class="mb-6"
        >I create enterprise scale web application for various industries including Security, Laboratory, and Medical.</p>
        <p
          class="mb-6"
        >I love building solutions for complex problems that makes me spark creativity and multidisciplinary thoughts while helping others achieve goals.</p>
        <p class>Studied undergrad Mathematics and post-grad Computer Science, good times.</p>
      </Intro>
      <Intro title="Proficiency">
        <p class="mb-6">
          Currently I work with cloud platform service engineering for AI driven security application at
          <a
            href="https://www.cylance.com"
          >Cylance</a>
          on big data aggregation development.
        </p>
        <p
          class="mb-6"
        >As for backend development, I utilize .Net Core, Docker (EC2, ECS), Terraform, Jenkins, Nginx, AWS Kinesis, AWS Lambda, AWS S3, AWS CloudWatch, MSSQL, PostgreSQL.</p>
        <p
          class
        >For web app development, I'm keen with Node.js, Angular2, Vue, Express, Axios, GraphQL, Apollo, MongoDB, and Firebase.</p>
      </Intro>
      <Intro title="Contact">
        <p class>
          Thanks for getting to know me, it will be nice if you can also share about yourself. Feel free to send me a hello message to
          <a
            class="break-words"
          >hello@takumiwatanabe.me</a>
        </p>
      </Intro>
    </div>

    <div class="clearfix">
      <div class="buffer"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">Projects.</h1>
      </div>
    </div>

    <div class="mb-24 clearfix">
      <div class="buffer"></div>
      <Card
        title="DevUp"
        :imageUrl="require('@/assets/devup.png')"
        linkUrl="https://devup-staging.netlify.com"
        target="_blank"
      >
        <p class="text-black mb-4">Community driven project gathering site for developers 🙏</p>
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

    <div class="clearfix">
      <div class="buffer"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">Experience and Certifications.</h1>
      </div>
    </div>

    <div class="clearfix section mb-24">
      <Intro class="lg:block hidden"></Intro>
      <Intro w="3">
        <p class="sub-header">Current</p>
        <p class="mb-6">
          Building microservices at
          <a href="cylance.com" target="_blank">Cylance</a>
        </p>
        <p class="mb-6">
          Making book ranking site called
          <a
            href="https://toptrendbooks.com"
            target="_blank"
          >TopTrendBooks</a>
        </p>

        <p class="sub-header">Previous</p>
        <p class="mb-6">
          Consult enterprise PaaS/SaaS at
          <a href="https://www.technossus.com/" target="_blank">
            Technossus
            <span class="text-gray-600 block text-sm">2017-2019</span>
          </a>
        </p>
        <p class="mb-6">
          Architect lab applications for
          <a href="https://www.bio-rad.com/" target="_blank">Bio-Rad</a>
          <span class="text-gray-600 block text-sm">2017-2019</span>
        </p>
        <p class="mb-6">
          Deploy medical software at
          <a
            href="https://www.kowa-usa.com/"
            target="_blank"
          >Kowa American Corporation</a>
          <span class="text-gray-600 block text-sm">2013-2017</span>
        </p>
        <p class="mb-6">
          Design web application at
          <a>Rapid Consulting</a>
          <span class="text-gray-600 block text-sm">2012-2013</span>
        </p>
      </Intro>
      <Intro w="3">
        <p class="sub-header">Certifications</p>
        <p class="mb-6">
          <a
            href="https://www.microsoft.com/en-us/learning/azure-solutions-architect.aspx"
            target="_blank"
          >Microsoft Certified Azure: Solutions Architect Exprt</a>
          <span class="text-gray-600 block text-sm">Credential ID H144-7459</span>
        </p>
        <p class="mb-6">
          <a
            href="https://www.microsoft.com/en-us/learning/azure-administrator.aspx"
            target="_blank"
          >Microsoft Certified Azure: Administrator Associate</a>
          <span class="text-gray-600 block text-sm">Credential ID H048-9937</span>
        </p>
        <p class="mb-6">
          <a
            href="https://www.microsoft.com/en-us/learning/azure-developer.aspx"
            target="_blank"
          >Microsoft Certified Azure: Developer Associate</a>
          <span class="text-gray-600 block text-sm">Credential ID H037-1939</span>
        </p>
        <p class="mb-6">
          <a
            href="https://www.microsoft.com/en-us/learning/mcse-cloud-platform-infrastructure.aspx"
            target="_blank"
          >Microsoft Certified Solutions Expert (MCSE) - Cloud Platform and Infrastructure</a>
          <span class="text-gray-600 block text-sm">Credential ID H013-8312</span>
        </p>
        <p class="mb-6">
          <a
            href="https://www.microsoft.com/en-us/learning/mcsa-cloud-platform-certification.aspx"
            target="_blank"
          >Microsoft Certified Solutions Associate (MCSA) - Cloud Platform</a>
          <span class="text-gray-600 block text-sm">Credential ID H013-7715</span>
        </p>
        <p class="mb-6">
          <a
            href="https://www.microsoft.com/en-us/learning/microsoft-certified-professional.aspx"
            target="_blank"
          >Microsoft Certified Professional</a>
          <span class="text-gray-600 block text-sm">Credential ID H011-9072</span>
        </p>
      </Intro>
    </div>

    <Contact />

    <div class="mb-20 clearfix">
      <!-- <p class="">Contact</p> -->
      <p class>email: hello@takumiwatanabe.com</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Card from "../components/Card.vue";
import Intro from "../components/Intro.vue";
import Contact from "../components/Contact.vue";

@Component({
  components: {
    Card,
    Intro,
    Contact
  }
})
export default class Home extends Vue {}
</script>

<style lang="postcss">
.sm-gray {
  @apply text-gray-600 text-xs;
}
.header {
  @apply font-mono text-3xl font-bold mb-16 tracking-tight;
  font-family: Interface,Avenir Next,sans-serif;
}
@screen lg {
  .header {
    @apply text-5xl;
  }
}
.sub-header {
  @apply text-xl mb-6 text-gray-700 font-semibold;
}
.section {
  @apply pb-5 rounded-lg;
  box-shadow: 0 24px 24px rgba(0, 0, 0, 0.03);
  background-color: hsla(0, 0%, 100%, 0.3);
}


.buffer {
  @apply block;
}

@screen lg {
  .buffer {
    @apply hidden w-1/4 float-left h-1;
  }
}

</style>
