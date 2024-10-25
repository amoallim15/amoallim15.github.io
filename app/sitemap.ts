import { getBlogPosts } from "app/blog/utils";
import { BASE_URL } from "./assets/constants";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  return [...routes, ...blogs];
}
