import React, { useState } from "react";

export const CustomButton = ({ color, children, height, onClick, width }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "black",
        fill: color,
        height,
        width,
        margin: "0px",
      }}
    >
        <h3
            style={{
            textAlign: "center",
            fontSize: "80px",
            }}
        >
            {children}
        </h3>
    </div>
  );
};
