import React from "react";
import { articlesContent } from "@/utils/content/articlesContent";

const RecentBlog = ({ id }) => {
  const article = articlesContent.articles.find((article) => article.id === id);
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
