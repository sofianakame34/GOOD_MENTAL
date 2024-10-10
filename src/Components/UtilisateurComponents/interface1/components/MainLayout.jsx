import "./main.css"
import React from "react";
import Hero from "./Hero";
import RecommendedQuestionnaires from "./RecommendedQuestionnaires";
import TopConsultations from "./TopConsultations";
import PsychologyNews from "./PsychologyNews";
import SpecialistSearch from "./SpecialistSearch";
import Footer from "./Footer";
import NavBar from "../../../NavBar";

const MainLayout = () => {
  return (
    <div className="main-layout">

      <NavBar />
      <main>
        <Hero />
        <RecommendedQuestionnaires />
        <TopConsultations />
        <PsychologyNews />
        <SpecialistSearch />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
