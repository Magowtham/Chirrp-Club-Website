import React, { useState } from "react";
import "../CSS/TemplateInfo.css";
import Navbar from "./Navbar";
function TemplateInfo({
  bannerHeading,
  bannerSubHeading,
  bannerParagraph,
  bannerImage,
}) {
  return (
    <>
      <div
        className="templateinfo-container"
        style={{
          backgroundImage: `url("${bannerImage}")`,
        }}
      >
        <Navbar isSubPage={true} />
        <div className="heading-sec">
          <h1>
            {bannerHeading}
            <br />
            {bannerSubHeading}
          </h1>
          <p>{bannerParagraph}</p>
        </div>
      </div>
    </>
  );
}

export default TemplateInfo;
