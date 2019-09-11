import { Article } from "../models/article";

export class ContentfulAPI {
  contentful = require("contentful");
  client: any;
  clientMgmt: any;

  spaceId: string = process.env.CTF_SPACE_ID;
  accessToken: string = process.env.CTF_CDA_ACCESS_TOKEN;
  mgmtAccessToken: string = process.env.CTF_MGMT_ACCESS_TOKEN;
  contentTypeId: string = "blogPost";

  constructor() {
    const config = {
      space: process.env.CTF_SPACE_ID,
      accessToken: process.env.CTF_CDA_ACCESS_TOKEN

    };

    this.client = this.contentful.createClient(config);
  }

  async getArticles() {
    let articles = new Array<Article>();

    const query = { content_type: "blogPost", order: "-fields.publishDate" };

    const response = await this.client.getEntries(query);
    response.items.forEach(entry => {
      articles.push({
        title: entry.fields.title,
        slug: entry.fields.slug,
        heroImage: entry.fields.heroImage,
        description: entry.fields.description,
        body: entry.fields.body,
        author: entry.fields.author,
        publishDate: entry.fields.publishDate,
        tags: entry.fields.tags
      });
    });

    return articles;
  }

  async getArticle(articleSlug: string) {
    let article = new Article();

    const query = {
      content_type: "blogPost",
      "fields.slug[in]": articleSlug
    };

    const response = await this.client.getEntries(query);
    const entry = response.items[0];
    article = {
      title: entry.fields.title,
      slug: entry.fields.slug,
      heroImage: entry.fields.heroImage,
      description: entry.fields.description,
      body: entry.fields.body,
      author: "",
      publishDate: entry.fields.publishDate,
      tags: []
    };

    return article;
  }
}
