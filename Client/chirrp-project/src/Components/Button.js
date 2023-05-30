import React from "react";
import "../CSS/Button.css";
import { useNavigate } from "react-router-dom";

function Button({
  title,
  videoBtn,
  routTo,
  videoUrl,
  isDropdown,
  dropdown,
  setDropdown,
}) {
  const btnClick = () => {
    if (videoBtn) {
      window.location.href = videoUrl;
    } else if (isDropdown) {
      setDropdown(!dropdown);
    } else {
      window.location.href = `/${routTo}`;
    }
  };

  return (
    <>
      <button
        className={videoBtn ? `video-btn` : `page-btn`}
        onClick={btnClick}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
