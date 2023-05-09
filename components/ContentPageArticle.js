import React from "react";
import Meta from "./Meta";
import { articlesContent } from "@/utils/content/articlesContent";

const ContentPageArticle = ({ id }) => {
  const article = articlesContent.articles.find((article) => article.id === id);

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
};

export default ContentPageArticle;
