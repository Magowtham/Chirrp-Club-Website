import "./App.css";
import { useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoreGallerySection from "./Components/MoreGallerySection";
import Navbutton from "./Components/Button";
import Home from "./Pages/Home";
import MoreAboutSection from "./Components/MoreAboutSection";
import MoreVideoSection from "./Components/MoreVideoSection";
import BirdsCollection from "./Components/BirdsCollection";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/moreAbout" Component={MoreAboutSection} />
          <Route path="/photoGallery" Component={MoreGallerySection} />
          <Route path="/videoGallery" Component={MoreVideoSection} />
          <Route path="/birds" Component={BirdsCollection} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
