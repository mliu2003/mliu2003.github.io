import React, { useState } from 'react';

export const CustomButton = ({ color, children, height, onClick, width }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: "black",
        fill: color,
        height,
        width,
        margin: "15px",
      }}
    >
      <h3>
        {children}
      </h3>
    </div>
  );
};

export const Banner = ({ color, height}) => {
    return (
        <div style={{
            backgroundColor: color,
            height,
            width: "100%",
            position: "absolute",
        }}></div>
    )
}