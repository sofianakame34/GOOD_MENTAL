/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./FeatureList.module.css";

const features = [
  {
    id: 1,
    text: "Apparaissez dans les premières positions du listing selon votre localité",
  },
  {
    id: 2,
    text: "Découvrez et gérez ce que pensent de vous vos patients",
  },
  {
    id: 3,
    text: "Organisez des téléconsultations avec plusieurs thèmes aborder",
  },
];

function FeatureList() {
  return (
    <div className={styles.featureList}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b36b199a3a8ff15baddf69e753f661c27d5bd59c7b1c7434c9292dc1370fbb70?placeholderIfAbsent=true&apiKey=4af6d38b4e1f414ca48eef301541d7ae"
        alt="Feature illustration"
        className={styles.featureImage}
      />
      <h2 className={styles.title}>
        Vous n'avez pas encore de compte chez Good Mental ?
      </h2>
      <p className={styles.subtitle}>
        Rejoignez-nous en suivant le bien-être mental de vos patients.
      </p>
      <ul className={styles.list}>
        {features.map((feature) => (
          <li key={feature.id} className={styles.listItem}>
            <span className={styles.checkmark}></span>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className={styles.registerButton}>Inscrivez votre cabinet</button>
    </div>
  );
}

export default FeatureList;
