import "./App.css";

import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Homepages from "./components/Homepages";
import Footer from "./components/Footer";
import Popular from "./components/Popular";
import Ppost from "./components/Ppost";
import Life from "./components/Life";
import Music from "./components/Music";
import Discover from "./components/Discover";
import Side from "./components/Side";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending" element={<Ppost />} />
        <Route path="/lifestyle" element={<Life />} />
        <Route path="/music" element={<Music />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/more" element={<Side />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
