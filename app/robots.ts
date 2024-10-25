import { BASE_URL } from "./assets/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*"
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`
  };
}
