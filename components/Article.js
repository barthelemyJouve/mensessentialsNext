import React from "react";
import { articlesContent } from "@/utils/content/articlesContent";

const Article = ({ id }) => {
  const article = articlesContent.articles.find((article) => article.id === id);

  return (
    <div className="article-presentation">
      <h2>{article.title}</h2>

      <img src={article.image} alt={article.title} />

      <p>{article.description}</p>

      <a href={"./blog/" + article.link}>Read More</a>
    </div>
  );
};

export default Article;
