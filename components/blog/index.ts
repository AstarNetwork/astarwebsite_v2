import gql from "graphql-tag";
import MarkdownIt from "markdown-it";
// @ts-ignore
import plugin from "markdown-it-named-headings";
import { useRuntimeConfig } from "#imports";

export async function getPosts(
  filters: string = "",
  pagination: string = "page: 1, pageSize: 100"
) {
  const { locale } = useI18n();
  const md = new MarkdownIt().use(plugin);
  const config = useRuntimeConfig();

  const query = gql`
    query PostsByLocal {
      posts(
          filters: { ${filters} }
          pagination: { ${pagination} }
          locale: "${locale.value}"
          sort: "publishedAt:DESC"
      ) {
        data {
          id
          attributes {
            publishedAt
            title
            slug
            body
            summary
            toc
            tags
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data }: any = await useAsyncQuery({ query, clientId: "community" });
  const posts = data.value.posts.data.map(
    (item: {
      id: string;
      attributes: {
        slug: string;
        body: string;
        publishedAt: string | number | Date;
        image: { data: { attributes: { url: string } } };
      };
    }) => {
      const lowercaseSlug = item.attributes.slug.toLowerCase();
      const date = new Date(item.attributes.publishedAt);
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      const imageName = item.attributes?.image?.data?.attributes?.url;
      const imagePath = imageName
        ? `${config.strapi.url}${imageName}`
        : "/images/blog/placeholder.webp";
      return {
        id: item.id,
        ...item.attributes,
        image: imagePath,
        publishedAt: formattedDate,
        slug: lowercaseSlug,
        body: item.attributes.body ? md.render(item.attributes.body) : "",
      };
    }
  );

  return posts;
}
