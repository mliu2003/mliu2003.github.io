import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import state from "./state.js";
import Header from "./components/Header/header.js";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import "./styles.css";

const Main = () => {
  return (
    <div className="defaultPage">
      <Provider store={state}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default Main;
