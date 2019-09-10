<template>
  <div>
    <div class="clearfix">
      <div class="w-1/4 block float-left h-1"></div>
      <div class="w-3/4 block float-left">
        <h1 class="font-mono text-6xl font-bold mb-16">Knowledge Base.</h1>
      </div>
    </div>

    <div class="mb-24 clearfix">
      <Intro></Intro>
      <div class="section clearfix">
        <Intro w="6">
          <p class="sub-header">Frontend</p>
          <ul>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Tachyons</li>
          </ul>
        </Intro>
        <Intro w="6">
          <p class="sub-header">JavaScript</p>
          <ul>
            <li>ES6</li>
            <li>Angular2</li>
            <li>React</li>
            <li>Vue</li>
            <li>TypeScript</li>
          </ul>
        </Intro>
        <Intro w="6">
          <p class="sub-header">JS Framework</p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Nuxt.js</li>
            <li>Gatsby.js</li>
            <li>Gridsome.js</li>
            <li>Redux</li>
            <li>Vuex</li>
          </ul>
        </Intro>
        <Intro w="6">
          <p class="sub-header">Server Side</p>
          <ul>
            <li>RestfulAPI / Axios</li>
            <li>GraphQL / Apollo</li>
            <li>Firebase</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>MySQL / MariaDB</li>
            <li>PostgreSQL</li>
          </ul>
        </Intro>
        <Intro></Intro>
        <Intro w="6">
          <p class="sub-header">Infrastructure</p>
          <ul>
            <li>Linux</li>
            <li>DigitalOcean</li>
            <li>Firebase</li>
            <li>Netlify</li>
            <li>Heroku</li>
            <li>ZEIT Now</li>
          </ul>
        </Intro>
        <Intro w="6">
          <p class="sub-header">Microservice</p>
          <ul>
            <li>Docker</li>
            <li>.Net Core</li>
            <li>AWS</li>
            <li>Azure</li>
            <li>ELK Stack</li>
          </ul>
        </Intro>
        <Intro w="6">
          <p class="sub-header">Tools</p>
          <ul>
            <li>Postman</li>
            <li>Visual Studio Code</li>
            <li>Vim</li>
            <li>Bash</li>
          </ul>
        </Intro>
        <Intro w="6">
          <p class="sub-header">Learning</p>
          <ul>
            <li>React Native</li>
            <li>Golang</li>
            <li>Python</li>
            <li>Laravel</li>
          </ul>
        </Intro>
      </div>
    </div>

    <Contact />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Intro from "../components/Intro.vue";
import Contact from "../components/Contact.vue";

@Component({
  components: {
    Intro,
    Contact
  }
})
export default class Consult extends Vue {}
</script>

<style lang="postcss">
.sub-header {
  @apply text-xl mb-6 text-gray-700 font-semibold;
}

li {
  @apply text-gray-600;
}

</style>
