import React, { useState } from 'react';

export const CustomButton = ({ color, children, height, onClick, width }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        height,
        width,
        margin: "15px",
      }}
    >
      <h3>
        {children}
      </h3>
    </button>
  );
};
