import React from "react";
import { articleContent } from "@/utils/articleContent";

const RecentBlog = ({ id }) => {
  const article = articleContent.articles.find((article) => article.id === id);
  return (
    <div className="recent-blog">
      <div className="recent-article-image-container">
        <img src={article.image} alt={article.title} />
      </div>
      <h2>{article.title}</h2>
      <a href={"/blog/" + article.link}>Read the article</a>
    </div>
  );
};

export default RecentBlog;
