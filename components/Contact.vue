<template>
  <div>
    <div class="clearfix">
      <div class="w-1/4 float-left h-1 lg:block hidden"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">Contact.</h1>
      </div>
    </div>

    <div class="mb-32 clearfix consult">
      <div class="md:w-1/4 w-full float-left mb-16">
        <div class="mini-block">
          <span class="sm-gray mb-5 block">Base rate $100 per hour</span>

          <span class="sm-gray block">Web Application Development</span>
          <ul class="ml-5 mb-5">
            <li class="sm-gray">Angular2 / React / Vue</li>
            <li class="sm-gray">Redux / Vuex</li>
            <li class="sm-gray">SPA / SSR</li>
            <li class="sm-gray">Landing Page</li>
          </ul>
        </div>

        <div class="mini-block">
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
      </div>

      <div class="md:w-1/4 md:float-left">
        <div class="md:pr-8">
          <label class="block mb-2">Name</label>
          <input class="form-input" placeholder="Name" />
          <label class="block mb-2">Email</label>
          <input class="form-input" placeholder="Email" />
          <label class="block mb-2">Operation</label>
          <input class="form-input" placeholder="Institution / Personal" />
          <label class="block mb-2">Duration</label>

          <select class="form-input">
            <option value="0">2 Weeks</option>
            <option value="1">1-2 Months</option>
            <option value="2" selected="selected">3-6 Months</option>
            <option value="3">> 6 Months</option>
            <option value="4">Undecided</option>
          </select>
        </div>
      </div>
      <div class="md:w-2/4 md:float-left">
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
  @apply h-10 pl-5 w-full mb-4;
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


.mini-block {
  @apply w-2/4 float-left;
}

@screen md {
  .mini-block {
    @apply w-full pr-8;
  }
}

</style>
