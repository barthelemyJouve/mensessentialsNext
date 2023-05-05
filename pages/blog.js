import Meta from "@/components/Meta";
import Header from "@/components/Header";
import React from "react";
import Article from "@/components/Article";
import Link from "next/link";
import RecentBlog from "@/components/RecentBlog";

const blog = () => {
  return (
    <div className="blog-page">
      <Meta />
      <Header id={2} />
      <main>
        <section className="blog-page-main">
          <h2 className="scroll-container-title">Featured Articles</h2>
          <div className="scroll-container">
            <Article id={1}></Article>
            <Article id={2}></Article>
            <Article id={3}></Article>
            <Article id={4}></Article>
            <Article id={5}></Article>
            <Article id={6}></Article>
            <Article id={7}></Article>
            <Article id={8}></Article>
            <Article id={9}></Article>
            <Article id={10}></Article>
          </div>
          <span id="right-button-scroll">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </section>
        <section className="blog-recent-articles">
          <h2>Recent blog posts</h2>
          <div className="recent-blog-posts">
            <RecentBlog id={2}></RecentBlog>
            <RecentBlog id={9}></RecentBlog>
            <RecentBlog id={8}></RecentBlog>
            <RecentBlog id={7}></RecentBlog>
            <RecentBlog id={6}></RecentBlog>
            <RecentBlog id={1}></RecentBlog>
            <RecentBlog id={4}></RecentBlog>
            <RecentBlog id={3}></RecentBlog>
            <RecentBlog id={10}></RecentBlog>
          </div>
        </section>
      </main>
    </div>
  );
};

export default blog;
