import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import state from "./state.js";
import Header from "./components/Header/header.js";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import "./styles.css";

const Main = () => {
  return (
      <div>
    <Provider store={state}>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
};

export default Main;
