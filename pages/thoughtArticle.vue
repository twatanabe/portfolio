<template>
  <div>

    <div class="clearfix">
      <div class="buffer"></div>
      <div class="w-3/4 block float-left">
        <h1 class="header">{{article.title}}</h1>
      </div>
    </div>

    <div class="clearfix section">
      <div class="buffer"></div>
      <div class="primary lg:w-3/4 float-left">
        <div class="hero" v-if="article.title != ''">
          <div class="heroImage">
            <Fluid class="topImage" :alt="article.title" :src="article.heroImage.fields.file.url" />
            <!-- <img
          :alt="alt"
          :src="article.heroImage.fields.file.url"
          style="width: 100%; height: 300px; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 0.5s ease 0s;"
            >-->
          </div>
        </div>
        <div class="article">
          <p style="display: block">{{convertToDate(article.publishDate)}}</p>
          <hr class="header-border"/>

          <div v-if="markdown.length != 0" v-html="markdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Article } from "../models/article";
import { Route } from "vue-router";
import Fluid from "~/components/Article/Fluid.vue";
import marked from "marked";
import { DateHelper } from "~/utility/dateHelper";
import { Meta } from "~/decoratos";
import { Constant } from "~/utility/constant";
import { NuxtContext } from "vue/types/options";
import { ContentfulAPI } from "../api/contentfulAPI";

@Component({
  components: {
    Fluid
  }
})
export default class ThoughtArticle extends Vue {
  article: Article = new Article();
  articleSlug: string = "";
  markdown: string = "";
  sitePrefix = `${Constant.SiteURL}/thought/`;
  contentfulApi = new ContentfulAPI();

  constructor() {
    super();
  }

  @Meta
  metaInfo() {
    return {
      title: `${this.article.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.article.title}`
        },
        { hid: "og-title", property: "og:title", content: this.article.title },
        { hid: "og-type", property: "og:type", content: "article" },
        {
          hid: "og-url",
          property: "og:url",
          content: `${Constant.SiteURL}/thought/${this.articleSlug}`
        },
        {
          hid: "og-image",
          property: "og:image",
          content: `${this.article.heroImage.url}`
        },
        { property: "og:image:width", content: "0" },
        { property: "og:image:height", content: "0" }
      ]
    };
  }

  async mounted() {
    this.articleSlug = this.$route.path.slice(1).split("/")[1];
    this.article = await this.contentfulApi.getArticle(this.articleSlug);

    this.markdown = marked(this.article.body);
  }

  convertToDate(strDate: string) {
    return DateHelper.convertToDate(strDate);
  }
}
</script>

<style scoped>
.article >>> p {
  margin: 1rem 0;
}

.article >>> h1 {
  font-size: 1.5rem;
}
.article >>> h2 a {
  font-size: 1.5rem !important;
  font-weight: bold !important;
  text-decoration: none !important;
}
.article >>> .header-border {
  border-color: gray;
}
.article {
  text-align: left;
  padding: 1.5rem 0;
}
.article >>> ul {
  list-style: disc inside;
  margin-bottom: 1rem;
}
.article >>> ul li {
  margin-bottom: 1rem;
  text-align: left;
}
.article >>> ul li a {
  margin-bottom: 1rem;
}
.article >>> ol li {
  margin-bottom: 1rem;
  text-align: left;
}
.article >>> a {
  color: #4a4a4a;
}
.article >>> a img {
  max-width: 300px;
  /* width: 150px; */
  padding-bottom: 10px;
}
.topImage >>> img {
  /* padding: 10px 0 5px 0; */
  /* width: 40% !important; */
  margin-bottom: -5px;
}
.article >>> img {
  width: 100%;
}
</style>

