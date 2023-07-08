import React, { useEffect } from "react";
import "../CSS/TeamNodes.css";

function TeamNodes(coOrdinaters) {
  useEffect(() => {
    const node = document.querySelectorAll(".node-image");
    const popUpPage = document.querySelectorAll(".node-info");

    const showPopUp = (index) => {
      popUpPage[index].classList.add("show");
    };
    const hidePopUp = (index) => {
      popUpPage[index].classList.remove("show");
    };

    node.forEach((node, index) => {
      node.addEventListener("mouseenter", () => {
        showPopUp(index);
      });
      node.addEventListener("mouseleave", () => {
        hidePopUp(index);
      });
    });
    // node.addEventListener("mouseenter", showPopUp);
    // node.addEventListener("mouseleave", hidePopUp);
  });
  return (
    <>
      <div className="node">
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hr-br"></div>
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hr-br"></div>
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hr-br"></div>
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor web development</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hr-br"></div>
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hr-br"></div>
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="hr-br"></div>
        <div className="node-image">
          <img src="/Media/bird-1.jpeg" alt="" />
          <div className="node-info">
            <h2>Gowtham MA</h2>
            <p>content editor</p>
            <div className="node-icons">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
              <button>
                <i className="fab fa-instagram"></i>
              </button>
              <button>
                <i className="fab fa-twitter"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamNodes;
