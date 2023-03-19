import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
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
