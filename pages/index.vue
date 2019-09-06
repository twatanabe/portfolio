<template>
  <div class="flex justify-center">
    <div class="max-w-90 px-12 content-center">
      <div class="mt-16 clearfix h-1 mb-32">
        <Header />
      </div>

      <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-6xl font-bold mb-16">Code to Resolve.</h1>
        </div>
      </div>

      <div class="mb-24 clearfix">
        <Intro class="h-1"></Intro>
        <Intro title="Welcome">
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

      <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-5xl font-bold mb-16">Projects.</h1>
        </div>
      </div>

      <div class="mb-24 clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <Card title="TopTrendBooks" :imageUrl="require('@/assets/toptrendbooks.png')" linkUrl="https://toptrendbooks.com" target="_blank">
          <p class="text-black mb-4">Rank over 15,000 books everyday based on Reddit 📚</p>
          <p>Visit Site →</p>
        </Card>
        <Card title="DevUp" :imageUrl="require('@/assets/devup.png')" linkUrl="https://devup-staging.netlify.com" target="_blank">
          <p class="text-black mb-4">Community driven project gathering site for developers 🙏</p>
          <p>Visit Site →</p>
        </Card>
        <!-- <div class="w-1/4 block float-left h-1"></div>
        <Card title="TopTrendBooks" :imageUrl="require('@/assets/toptrendbooks.png')" linkUrl="https://toptrendbooks.com" target="_blank">
          <p class="text-black">Rank over 15,000 books everyday based on Reddit 📚</p>
        </Card> -->
      </div>

      <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-5xl font-bold mb-16">Profession.</h1>
        </div>
      </div>

      <div class="mb-32 clearfix">
        <Intro class="h-1"></Intro>
        <Intro title="Career" w="3">
          <p class="text-3xl mb-6 text-gray-700 font-semibold">Current</p>
          <p class="mb-6">Building microservices at <a href="cylance.com" target="_blank">Cylance</a></p>
          <p class="mb-6">Making book ranking site called <a href="https://toptrendbooks.com" target="_blank">TopTrendBooks</a></p>

          <p class="text-3xl mb-6 text-gray-700 font-semibold">Previous</p>
          <p class="mb-6">Consult enterprise PaaS/SaaS at <a href="https://www.technossus.com/" target="_blank">
            Technossus
            <span class="text-gray-600 block text-sm">2017-2019</span>
          </a></p>
          <p class="mb-6">Architect lab applications for <a href="https://www.bio-rad.com/" target="_blank">Bio-Rad</a>
            <span class="text-gray-600 block text-sm">2017-2019</span>
          </p>
          <p class="mb-6">Deploy medical software at <a href="https://www.kowa-usa.com/" target="_blank">Kowa American Corporation</a>
            <span class="text-gray-600 block text-sm">2013-2017</span>
          </p>
          <p class="mb-6">Design web application at <a>Rapid Consulting</a>
            <span class="text-gray-600 block text-sm">2012-2013</span>
          </p>
        </Intro>
        <Intro title="Certifications" w="3">
          <p class="mb-6">
            <a href="https://www.microsoft.com/en-us/learning/azure-solutions-architect.aspx" target="_blank">
            Microsoft Certified Azure: Solutions Architect Exprt
            </a>
            <span class="text-gray-600 block text-sm">Credential ID H144-7459</span>
            </p>
          <p class="mb-6">
            <a href="https://www.microsoft.com/en-us/learning/azure-administrator.aspx" target="_blank">
            Microsoft Certified Azure: Administrator Associate
            </a>
            <span class="text-gray-600 block text-sm">Credential ID H048-9937</span>
            </p>
          <p class="mb-6">
            <a href="https://www.microsoft.com/en-us/learning/azure-developer.aspx" target="_blank">
            Microsoft Certified Azure: Developer Associate
            </a>
            <span class="text-gray-600 block text-sm">Credential ID H037-1939</span>
            </p>
          <p class="mb-6">
            <a href="https://www.microsoft.com/en-us/learning/mcse-cloud-platform-infrastructure.aspx" target="_blank">
            Microsoft Certified Solutions Expert (MCSE) - Cloud Platform and Infrastructure
            </a>
            <span class="text-gray-600 block text-sm">Credential ID H013-8312</span>
            </p>
          <p class="mb-6">
            <a href="https://www.microsoft.com/en-us/learning/mcsa-cloud-platform-certification.aspx" target="_blank">
            Microsoft Certified Solutions Associate (MCSA) - Cloud Platform
            </a>
            <span class="text-gray-600 block text-sm">Credential ID H013-7715</span>
            </p>
          <p class="mb-6">
            <a href="https://www.microsoft.com/en-us/learning/microsoft-certified-professional.aspx" target="_blank">
            Microsoft Certified Professional
            </a>
            <span class="text-gray-600 block text-sm">Credential ID H011-9072</span>
            </p>
        </Intro>
      </div>


      <div class="clearfix">
        <div class="w-1/4 block float-left h-1"></div>
        <div class="w-3/4 block float-left">
          <h1 class="font-mono text-5xl font-bold mb-16">Consult.</h1>
        </div>
      </div>

      <div class="mb-32 clearfix consult">
        <div class="w-1/4 float-left">
          <span class="sm-gray mb-5 block">Base rate $100 per hour</span>

          <span class="sm-gray block">Web Application Development</span>
          <ul class="ml-5 mb-5">
            <li class="sm-gray">Angular2 / React / Vue</li>
            <li class="sm-gray">Redux / Vuex</li>
            <li class="sm-gray">SPA / SSR</li>
            <li class="sm-gray">Landing Page</li>
          </ul>

          <span class="sm-gray block">Back-end Development</span>
          <ul class="ml-5 mb-5">
            <li class="sm-gray">Node.js / Express.js</li>
            <li class="sm-gray">Axios / GraphQL / Apollo</li>
            <li class="sm-gray">API Data Aggregation</li>
          </ul>

          <span class="sm-gray block">Data Access Layer Development</span>
          <ul class="ml-5">
            <li class="sm-gray">MongoDB / PostgreSQL</li>
            <li class="sm-gray">Firebase</li>
            <li class="sm-gray">AWS Kinesis</li>
          </ul>
        </div>

        <div class="w-1/4 float-left">
          <label class="block mb-2">Name</label>
          <input class="h-10 form-input px-5 mb-4" placeholder="Name"/>
          <label class="block mb-2">Email</label>
          <input class="h-10 form-input px-5 mb-4" placeholder="Email"/>
          <label class="block mb-2">Operation</label>
          <input class="h-10 form-input px-5 mb-4" placeholder="Institution / Personal"/>
          <label class="block mb-2">Duration</label>
          <select class="h-10 form-input px-5 mb-4">
            <option value="0">2 Weeks</option>
            <option value="1">1-2 Months</option>
            <option value="2" selected="selected">3-6 Months</option>
            <option value="3">> 6 Months</option>
            <option value="4">Undecided</option>
          </select>
        </div>
        <div class="w-2/4 float-left">
          <label class="block mb-2">Project Detail</label>
          <textarea class="project-detail w-full px-5 py-3 mb-10"
          placeholder="Tell me about yourself and what you know about the project. What skill sets you are looking for and expected time to complete the project." />

          <button class="btn btn-gray p-4 text-xl">Submit</button>
        </div>
      </div>


      <div class="mb-20 clearfix">
        <!-- <p class="">Contact</p> -->
        <p class="">email: hello@takumiwatanabe.com</p>

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

<style lang="postcss">
.form-input {
  width: 270px;
}
.project-detail {
  height: 300px;
}
.sm-gray {
  @apply text-gray-600 text-xs;
}
.consult li {
  @apply list-disc;
}
.btn {
  @apply font-bold py-2 px-4 rounded tracking-widest uppercase;
}
.btn-gray {
  @apply bg-gray-600 text-white;
}
.btn-gray:hover {
  @apply bg-gray-800;
}
</style>
