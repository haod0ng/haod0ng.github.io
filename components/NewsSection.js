import React from "react";
import NewsMd from "@/data/home/News.mdx";

export default function NewsSection() {
  return (
    <section className="content-section" aria-labelledby="news-heading">
      <h2 id="news-heading" className="section-heading">News</h2>
      <NewsMd />
    </section>
  );
}
