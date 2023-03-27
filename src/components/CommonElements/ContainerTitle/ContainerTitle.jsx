import React from "react";
import "./ContainerTitle.css";

const ContainerTitle = ({ title }) => {
  return (
    <div className="container-title">
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default ContainerTitle;
