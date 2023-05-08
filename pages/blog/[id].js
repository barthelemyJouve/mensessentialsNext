import { articleContent } from "@/utils/articleContent";

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const articleContentIds = articleContent.articles.map((article) => ({
    params: {
      id: article.link,
    },
  }));
  return {
    paths: articleContentIds,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: context.params },
  };
}

export default function Post({ post }) {
  // Render post...
  const articlePageContent = articleContent.articles.filter((content) => {
    console.log(content.link, post.link);
    return content.link === post.id;
  });
  return <h1>{articlePageContent[0].title}</h1>;
}
