import "./styles/globals.css"
import React from "react";
import Layout from "./Layout";
import HeroSection from "./HeroSection";
import SignupForm from "./SignupForm";
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <div className="hero-container">
          <HeroSection />
          <SignupForm />
        </div>
        <CallToAction />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default HomePage;
