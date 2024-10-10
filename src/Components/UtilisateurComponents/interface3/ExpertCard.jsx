/**
 * This code was generated by Builder.io.
 */
import React from "react";

const ExpertCard = ({ rank, image, name, title, articles }) => {
  return (
    <div className="expert-card">
      <span className="expert-rank">{rank}</span>
      <img src={image} alt={`Photo de ${name}`} className="expert-image" />
      <div className="expert-info">
        <h4 className="expert-name">{name}</h4>
        <p className="expert-title">{title}</p>
        <p className="expert-articles">
          {articles} <span>articles</span>
        </p>
      </div>
    </div>
  );
};

export default ExpertCard;
