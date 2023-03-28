import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton, Banner } from "../components";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const height = "200px"
  return (
    <div className="banner">
      <CustomButton
        onClick={() => {
          navigate("/");
        }}
        height={height}
        width="25%"
        children="Home"
      />
      <CustomButton
        onClick={() => {
          navigate("/projects");
        }}
        height={height}
        width="25%"
        children="Projects"
      />
      <CustomButton
        onClick={() => {
          navigate("/about");
        }}
        height={height}
        width="25%"
        children="About Me"
      />
      <CustomButton
        onClick={() => {
          navigate("/contact");
        }}
        height={height}
        width="25%"
        children="Contact"
      />
    </div>
  );
};

export default Header;
