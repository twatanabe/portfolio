<template>
  <div>
    <div class="clearfix">
      <div class="w-1/4 block float-left h-1"></div>
      <div class="w-3/4 block float-left">
        <h1 class="font-mono text-5xl font-bold mb-16">Contact.</h1>
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
          <li class="sm-gray">Node.js / Express.js / .Net Core</li>
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
        <input class="h-10 form-input px-5 mb-4" placeholder="Name" />
        <label class="block mb-2">Email</label>
        <input class="h-10 form-input px-5 mb-4" placeholder="Email" />
        <label class="block mb-2">Operation</label>
        <input class="h-10 form-input px-5 mb-4" placeholder="Institution / Personal" />
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
        <label class="block mb-2">Project Details</label>
        <textarea
          class="project-detail w-full px-5 py-3 mb-10"
          placeholder="Tell me about yourself and what you know about the project. What skill sets you are looking for and expected time to complete the project."
        />

        <button class="btn btn-gray p-4 text-xl">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Contact extends Vue {}
</script>

<style scoped lang="postcss">
.form-input {
  width: 270px;
}
.project-detail {
  height: 300px;
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
.sub-header {
  @apply text-xl mb-6 text-gray-700 font-semibold;
}
</style>
