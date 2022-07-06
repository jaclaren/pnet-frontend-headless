import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

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

export function FrontPage() {
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

export function DefaultPage() {
  return (
    <div className="frontpage">
      Defaultpage
    </div>
  );
}
function App() {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
}

export default App;
