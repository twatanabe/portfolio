<template>
  <div>
    <div class="clearfix">
      <div class="buffer"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">Skillsets.</h1>
      </div>
    </div>

    <div class="section clearfix flex flex-wrap">
      <div class="w-1/4 h-1 lg:block hidden"></div>
      <div class="skill-box">
        <p class="sub-header">Frontend</p>
        <ul>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Tachyons</li>
        </ul>
      </div>
      <div class="skill-box">
        <p class="sub-header">JavaScript</p>
        <ul>
          <li>ES6</li>
          <li>Angular2</li>
          <li>React</li>
          <li>Vue</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <div class="skill-box">
        <p class="sub-header">Framework</p>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Nuxt.js</li>
          <li>Gatsby.js</li>
          <li>Gridsome.js</li>
          <li>Redux</li>
          <li>Vuex</li>
        </ul>
      </div>
      <div class="skill-box">
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
      </div>

      <div class="w-1/4 h-1 lg:block hidden"></div>
      <div class="skill-box">
        <p class="sub-header">Infrastructure</p>
        <ul>
          <li>Linux</li>
          <li>DigitalOcean</li>
          <li>Firebase</li>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>ZEIT Now</li>
        </ul>
      </div>
      <div class="skill-box">
        <p class="sub-header">Microservice</p>
        <ul>
          <li>Docker</li>
          <li>.Net Core</li>
          <li>AWS</li>
          <li>Azure</li>
          <li>ELK Stack</li>
        </ul>
      </div>
      <div class="skill-box">
        <p class="sub-header">Tools</p>
        <ul>
          <li>Postman</li>
          <li>Visual Studio Code</li>
          <li>Vim</li>
          <li>Bash</li>
        </ul>
      </div>
      <div class="skill-box">
        <p class="sub-header">Learning</p>
        <ul>
          <li>React Native</li>
          <li>Golang</li>
          <li>Python</li>
          <li>Laravel</li>
        </ul>
      </div>
    </div>

    <ContactComponent />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Intro from "~/components/Intro.vue";
import ContactComponent from "~/components/ContactComponent.vue";

@Component({
  components: {
    Intro,
    ContactComponent
  }
})
export default class Consult extends Vue {}
</script>

<style lang="postcss">
li {
  @apply text-gray-600;
}

.skill-box {
  @apply w-1/2 pb-4 px-4 pt-6;
}

@screen sm {
  .skill-box {
    @apply w-1/4;
  }
}

@screen md {
  .skill-box {
    @apply w-1/5;
  }
}

@screen lg {
  .skill-box {
    @apply w-1/6;
  }
}
</style>
