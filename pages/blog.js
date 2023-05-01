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
      <div className="container-test"></div>
      <main>
        <Article id={1}></Article>

        <Link href="/home"></Link>
        <Link href="/home"></Link>
        <Link href="/home"></Link>
        <Link href="/home"></Link>
        <Link href="/home"></Link>
      </main>
    </div>
  );
};

export default blog;
