/**
 * This code was generated by Builder.io.
 */
import React from "react";

const NewsArticle = ({ image, category, title }) => {
  return (
    <article className="news-article">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <span className="article-category">{category}</span>
        <h3 className="article-title">{title}</h3>
      </div>
    </article>
  );
};

export default NewsArticle;
