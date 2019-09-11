<template>
  <div>
    <div class="clearfix">
      <div class="buffer"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">Thoughts.</h1>
      </div>
    </div>
    <div class="wrap">
      <div class="buffer"></div>
      <ul class="article-list">
        <li v-for="(article, index) in articles" :key="index">
          <ArticlePreview :article="article" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Article } from "~/models/article";
import ArticlePreview from "~/components/Article/ArticlePreview.vue";
import { ContentfulAPI } from "~/api/contentfulAPI";
import { Meta } from "~/decoratos";

@Component({
  components: {
    ArticlePreview
  }
})
export default class Thoughts extends Vue {
  articles: Array<Article> = new Array<Article>();
  contentfulApi = new ContentfulAPI();

  async mounted() {
    this.articles = await this.contentfulApi.getArticles();
  }

  @Meta
  metaInfo() {
    return {
      title: "Thoughts",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "thoughts"
        }
      ]
    };
  }
}
</script>

<style scoped lang="postcss">
.article-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 1fr));
  grid-gap: 4vmin;
}

.wrap {
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  min-height: 1000px;
}

@screen lg {
  .wrap{
    padding: 1.5rem 1.5rem 1.5rem 0.5rem;
  }
}

/* .fa-icon {
  margin-left: 0.25em;
  margin-right: 0.25em;
}
.simpleicon svg {
  height: 1.5em;
  width: 1.5em;
} */
/* .nav-logo {
  margin-right: 1em;
} */

/* body {
  margin: 0;
} */

/* p {
  margin-bottom: 1rem;
} */
/* main .wrap {
  padding: 0rem 1.5rem;
}
main .wrap:first-child {
  padding: 2rem 1.5rem;
}
main .wrap:last-child {
  padding: 0rem 1.5rem 2rem 1.5rem;
} */

/* .footer {
  border-top: 1px solid #ddd;
  padding-bottom: 3rem;
} */

/* .list-inline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-inline li {
  display: inline-block;
} */
</style>
