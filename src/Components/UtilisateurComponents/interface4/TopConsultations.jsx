/**
 * This code was generated by Builder.io.
 */
import React from "react";
import QuestionCard from "./QuestionCard";

const topQuestions = [
  {
    date: "#1 · 27 SEPT. 2024",
    title: "Que dois-je faire si je déteste les psy qui me suivent?",
    content:
      "Bonjour, je suis suivie par un psychologue et un psychiatre depuis 8 mois une fois par semaine en alternance. Au début je trouvais mon psychologue un peu bête",
    continuation: "mais gentil et mon psychiatre un peu dist...",
    bestAnswer: {
      date: "3 OCT. 2024",
      content:
        "Bonjour, Je comprends à quel point votre situation est frustrante et difficile. Il est essentiel de reconnaître que la relation thérapeutique doit être aidante et vous permettre d'avancer, pas de vou...",
      author: {
        name: "Laurent Stéphanie",
        location: "Psy sur La Rochelle",
      },
    },
  },
  {
    date: "#2 · 30 SEPT. 2024",
    title:
      "Colère contre mes parents. Bonjour, Je croyais en avoir terminé avec cette colère qu...",
    content:
      "Bonjour, Je croyais en avoir terminé avec cette colère qui m'a tenue toute mon enfance et adolescence mais depuis le décès soudain de mon père il y a bientôt un",
    continuation: "an, elle est revenue plus puissante...",
    bestAnswer: {
      date: "4 OCT. 2024",
      content:
        "Votre colère actuelle est le signe que les blessures profondes de votre enfance ne sont pas résolues et que la mort de votre père les a ravivées. Lorsque la relation avec un parent est marquée par le ...",
      author: {
        name: "Lorena Salthu",
        location: "Psy sur Paris (Ville)",
      },
    },
  },
  {
    date: "#3 · 5 OCT. 2024",
    title:
      "Deçue et en colere contre ma therapeute. Bonjour, j'ai entrepris depuis environ 2 ans une...",
    content:
      "Bonjour, j'ai entrepris depuis environ 2 ans une thérapie pour traiter des problèmes de confiance en moi, estime, rumination et peur du lendemain. Cela s'est assez",
    continuation: "bien passé dans l'ensemble. J'...",
    bestAnswer: {
      date: "AUJOURD'HUI, 7 OCT. 2024",
      content:
        "Bonjour Manelle, il arrive qu'un.e praticien.ne réfère ses patient.es à des collègues qui ont des spécialités complémentaires pour traiter une problématique spécifique, comme par exemple l'EMDR dans l...",
      author: {
        name: "Sandrine Bowen",
        location: "Psy sur Aire-sur-l'Adour",
      },
    },
  },
];

const TopConsultations = () => {
  return (
    <section className="top-consultations">
      <h2 className="section-title">Top Consultations</h2>
      {topQuestions.map((question, index) => (
        <QuestionCard key={index} {...question} />
      ))}
    </section>
  );
};

export default TopConsultations;
