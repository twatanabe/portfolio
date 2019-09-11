<template>
  <div class="section bg">
    <div class="buffer"></div>
    <ul class="article-list">
      <li v-for="(article, index) in articles" :key="index">
        <ArticlePreview :article="article"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Article } from "../models/article";
import ArticlePreview from "../components/Article/ArticlePreview.vue";
import { NuxtContext } from 'vue/types/options';
import { ContentfulAPI } from "../api/contentfulAPI";
import { Meta } from "../decoratos";

@Component({
  components: {
    ArticlePreview
  },
  // async asyncData(context: NuxtContext<any>) {
  //   const articles = await context.app.contentfulAPIService.getArticles();
  //   return { articles: articles };
  // },
  // metaInfo() {
  //   return {
  //     title: 'Blog',
  //     meta: [
  //       { hid: "description", name: "description", content: "We weekly introduce 10 awesome books based on our data mining engine." },
  //     ]
  //   }
  // }
})
export default class Blog extends Vue {
  articles: Array<Article> = new Array<Article>();
  contentfulApi = new ContentfulAPI();

  async mounted() {
    this.articles = await this.contentfulApi.getArticles();
  }

  @Meta
  metaInfo() {
    return {
      title: 'Blog',
      meta: [
        { hid: "description", name: "description", content: "We weekly introduce 10 awesome books based on our data mining engine." },
      ]
    }
  }
}
</script>

<style scoped>
@import '../assets/css/blog.css';

.container {
  max-width: 1200px !important;
}

.fa-icon {
  margin-left: 0.25em;
  margin-right: 0.25em;
}
.simpleicon svg {
  height: 1.5em;
  width: 1.5em;
}
.nav-logo {
  margin-right: 1em;
}

body {
  margin: 0;
}

p {
  margin-bottom: 1rem;
}
.section {
  /* padding: 1.5rem; */
  padding: 1.5rem 0rem 1.5rem 0;
}
main .section {
  padding: 0rem 1.5rem;
}
main .section:first-child {
  padding: 2rem 1.5rem;
}
main .section:last-child {
  padding: 0rem 1.5rem 2rem 1.5rem;
}

.footer {
  border-top: 1px solid #ddd;
  padding-bottom: 3rem;
}

.article-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4vmin;
}

.list-inline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-inline li {
  display: inline-block;
}
</style>
