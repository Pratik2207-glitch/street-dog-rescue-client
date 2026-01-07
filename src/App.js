import React, { useState } from "react";
import ReportForm from "./ReportForm";
import "./App.css";

import profilePic from "./assets/pratik.jpg";

import leftVideo from "./assets/dog-left.mp4";
import centerVideo from "./assets/dog-center.mp4";
import rightVideo from "./assets/dog-right.mp4";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* ===== Creator Box (Pinned) ===== */}
      <div className="creator-box">
        <img
          src={profilePic}
          alt="Pratik Kumar"
          className="creator-img"
        />
        <div>
          <strong>Pratik Kumar</strong><br />
          <span>kumarpratikpandey87@gmail.com</span>
        </div>
      </div>
      

      {/* ===== Hero Section ===== */}
      <section className="hero">
        <h1>🐶 Street Dog & Abandoned Dog Rescue</h1>
        <p>
          Report injured, sick, or abandoned street dogs to help save lives
        </p>
      </section>

      {/* ===== Highlight Section ===== */}
      <section className="highlight">
        <div className="highlight-text">
          <h2>Be Their Voice 🐾</h2>
          <p>Your single report can save a life.</p>
        </div>
        <div className="dog-emoji">🐕‍🦺</div>
      </section>

      {/* ===== Background Videos ===== */}
      {/* === BACKGROUND VIDEOS + FORM === */}
<div className="video-layout">

  <video className="bg-video left" src={leftVideo} autoPlay loop muted playsInline />
  <video className="bg-video center" src={centerVideo} autoPlay loop muted playsInline />
  <video className="bg-video right" src={rightVideo} autoPlay loop muted playsInline />

  {/* FORM MUST BE INSIDE */}
  <div className="form-wrapper">
    <ReportForm />
  </div>

</div>


      {/* ===== Help Section ===== */}
      <section className="help">
        <h3>🐾 What You Can Do If You See an Injured Dog</h3>
        <div className="help-grid">
          <div>✔ Stay calm and ensure your safety first.</div>
          <div>✔ Offer clean water if the dog is conscious.</div>
          <div>✔ Do not force food or medicines.</div>
          <div>✔ Keep the dog warm and away from traffic.</div>
          <div>✔ Contact local NGOs or animal helplines.</div>
          <div>✔ Use this platform to report immediately.</div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer>Made with ❤️ for street dogs</footer>

    </div>
  );
}

export default App;
