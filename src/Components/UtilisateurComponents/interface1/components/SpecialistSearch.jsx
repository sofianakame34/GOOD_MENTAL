/**
 * This code was generated by Builder.io.
 */
import React from "react";

const SpecialistSearch = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

  return (
    <section className="specialist-search">
      <h2 className="section-title">Chercher un spécialiste par nom</h2>
      <div className="alphabet-grid">
        {alphabet.map((letter, index) => (
          <a key={index} href={`#search-${letter}`} className="alphabet-link">
            {letter}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SpecialistSearch;
