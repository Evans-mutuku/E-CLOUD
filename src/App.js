import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Header from "./components/Header";
import PostJob from "./components/PostJob/PostJob";
import HomePage from "./components/HomePage";
import Footer from "./components/StaticPages/Footer";
import UploadJob from "./components/PostJob/UploadJob";
import AllJobs from "./components/AllJobs";
import Devs from "./components/Developer/Devs";
import CreateProfile from "./components/Developer/CreateProfile";
import About from "./components/StaticPages/About";
import Contact from "./components/StaticPages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/developers" element={<Devs />} />
        <Route path="/CreateProfile" element={<CreateProfile />} />
        <Route path="/uploadJob" element={<UploadJob />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
