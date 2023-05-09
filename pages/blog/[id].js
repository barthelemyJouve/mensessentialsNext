import { articlesContent } from "@/utils/content/articlesContent";
import Meta from "@/components/Meta";
// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const articleContentIds = articlesContent.articles.map((article) => ({
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
    props: { articleFilteredWithUrl: context.params },
  };
}

export default function Article({ articleFilteredWithUrl }) {
  // Render post...
  const articlePageContent = articlesContent.articles.filter(
    (article) => article.link === articleFilteredWithUrl.id
  );
  const article = articlePageContent[0];
  return (
    <div className="article-page">
      <Meta />
      <div className="header-article-page">
        <h1>{article.title}</h1>
        <div className="image-article">
          <img src={article.image} alt={article.title} />
          <div className="article-page-link">
            <a href={"./blog" + article.title}>Shop Now</a>
          </div>
        </div>
      </div>
      <div className="main-article-page">
        <p>{article.content}</p>
        <div className="article-page-link">
          <a href={"./blog" + article.link}>Order Now</a>
        </div>
      </div>
    </div>
  );
}
