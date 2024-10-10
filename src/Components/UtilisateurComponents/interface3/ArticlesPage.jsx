import "./CSS3.css";
import React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import ArticleCard from "./ArticleCard";
import ExpertCard from "./ExpertCard";
import ProfessionalArticleCard from "./ProfessionalArticleCard";
import Pagination from "./Pagination";
import ArticleThemes from "./ArticleThemes";
import Footer from "./Footer";

const latestArticles = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/be15bcae273c589b86124702d879242aaa83d72b85f8e33349b5c18909f11ca8?placeholderIfAbsent=true&apiKey=4af6d38b4e1f414ca48eef301541d7ae",
    category: "Aptitudes sociales",
    title:
      "Masking : masquer nos symptômes pour que nous puissions nous intégrer",
    author: "Psychologue.net",
    date: "02 OCT 2024",
  },
  // ... add more articles
];

const experts = [
  {
    rank: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/37a17184d15571e9c9d62dd6085425fecac7f973efc5616774a48c17bea101c4?placeholderIfAbsent=true&apiKey=4af6d38b4e1f414ca48eef301541d7ae",
    name: "Thomas Villa",
    title: "Siret 82219049200014",
    articles: 61,
  },
  // ... add more experts
];

const professionalArticles = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b891e0312220dc4e0d4aeebeee2ad2eeea03d680a85022d11ca9aa8148705e3b?placeholderIfAbsent=true&apiKey=4af6d38b4e1f414ca48eef301541d7ae",
    category: "Confiance en soi",
    title:
      "Revenir à l'essentiel : qu'est ce qui est le plus important dans la vie ?",
    author: "Patricia Léger",
    date: "03 OCT 2024",
  },
  // ... add more professional articles
];

const ArticlesPage = () => {
  return (
    <div className="articles-page">
      <a href="#main-content" className="skip-link">
        Passer au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Breadcrumb />
        <div className="content-wrapper">
          <div className="main-content">
            <section className="latest-articles">
              <h1>Les derniers articles</h1>
              <div className="articles-grid">
                {latestArticles.map((article, index) => (
                  <ArticleCard key={index} {...article} />
                ))}
              </div>
            </section>
            <section className="professional-articles">
              <h2>Articles des professionnels</h2>
              <div className="pro-articles-grid">
                {professionalArticles.map((article, index) => (
                  <ProfessionalArticleCard key={index} {...article} />
                ))}
              </div>
              <a href="#" className="view-all-pro-articles">
                Voir tous les articles des psy
              </a>
            </section>
            <ArticleThemes />
          </div>
          <aside className="experts-sidebar">
            <h2>Experts les plus actifs du comité</h2>
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
            <a href="#" className="view-all-experts">
              Voir tous nos experts
            </a>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
