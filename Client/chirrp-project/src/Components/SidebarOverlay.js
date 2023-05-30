import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const SidebarOverlay = ({ children, isClicked }) => {
  const sidebarRoot = document.getElementById("sidebar-root");

  useEffect(() => {
    // Function to disable scrolling on the main content when the sidebar is open
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5);";
    };

    // Function to enable scrolling on the main content when the sidebar is closed
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };
    if (isClicked) {
      enableScroll();
    } else {
      disableScroll();
    }

    // Call the disableScroll function when the sidebar is opened

    return () => {
      // Call the enableScroll function when the sidebar is closed
      enableScroll();
    };
  }, [isClicked]);

  return ReactDOM.createPortal(children, sidebarRoot);
};

export default SidebarOverlay;
