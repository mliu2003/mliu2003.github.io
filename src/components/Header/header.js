import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton, Banner } from "../components";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <CustomButton
        onClick={() => {
          navigate("/");
        }}
        height="200px"
        width="500px"
        children="Home"
      />
      <CustomButton
        onClick={() => {
          navigate("/projects");
        }}
        height="200px"
        width="500px"
        children="Projects"
      />
    </div>
  );
};

export default Header;
