import Meta from "@/components/Meta";
import Header from "@/components/Header";
import React from "react";
import Article from "@/components/Article";
import Link from "next/link";

const blog = () => {
  return (
    <div className="blog-page">
      <Meta />
      <Header id={2} />
      <main className="blog-page-main">
        <h2 className="scroll-container-title">Featured Articles</h2>
        <div className="scroll-container">
          <Article id={1}></Article>
          <Article id={2}></Article>
          <Article id={3}></Article>
          <Article id={4}></Article>
          <Article id={5}></Article>
          <Article id={6}></Article>
        </div>
      </main>
    </div>
  );
};

export default blog;
