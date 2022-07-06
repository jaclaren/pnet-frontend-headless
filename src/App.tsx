import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";

function TopGamesFull() {
  return <div className="topgames">Top games</div>;
}

function ReviewSuccesses() {
  return <div className="reviewsuccesses">Review successes</div>;
}

function PreviouslyUpdatedGames() {
  return <div className="pugames">Previously updated games</div>;
}

function Footer() {
  return <div className="footer">Footer</div>;
}

function FrontPage() {
  return (
    <div className="frontpage">
      <Navigation />
      <TopGamesFull />
      <ReviewSuccesses />
      <PreviouslyUpdatedGames />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <FrontPage />
    </div>
  );
}

export default App;
