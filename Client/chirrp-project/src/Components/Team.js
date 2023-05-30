import React, { useEffect, useState } from "react";
import Button from "./Button";
import "../CSS/Team.css";
function Team() {
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const gridElement = document.querySelector(".dropdown");
    if (dropdown) {
      gridElement.style.maxHeight = 0 + "px";
    } else {
      gridElement.style.maxHeight = gridElement.scrollHeight + "px";
    }
    window.addEventListener("resize", () => {});
  }, [dropdown]);

  return (
    <>
      <div className="team-container">
        <h1>Chirpp Team</h1>
        <section className="team1-sec">
          <div className="team-card">
            <div className="team-grid">
              <div className="image-sec">
                <img src="/Media/HarishBhat.jpeg" alt="" />
              </div>
              <div className="text-sec">
                <p>
                  <span>Harish Bhat</span>
                  Formed in October 2021 by a team of enthusiastic faculty
                  members, the Centre for Open-Source Software and Hardware
                  (COSH) at NITK Surathkal has a broad multidisciplinary
                  objective of serving society through research, education, and
                  development of open-source technologies, and is the first of
                  its kind in India. Formed in October 2021 by a team of
                  enthusiastic faculty
                  <br />
                  members, the Centre for Open-Source Software and Hardware
                  (COSH) at NITK Surathkal has a broad multidisciplinary
                  objective of serving society through research, education, and
                  development of and is the first of its kind in India.
                  <br />
                </p>
              </div>
              <div className="dropdown">
                <p>
                  <span>Harish Bhat</span>
                  Formed in October 2021 by a team of enthusiastic faculty
                  members, the Centre for Open-Source Software and Hardware
                  (COSH) at NITK Surathkal has a broad multidisciplinary
                  objective of serving society through research, education, and
                  development of open-source technologies, and is the first of
                  its kind in India. Formed in October 2021 by a team of
                  enthusiastic faculty
                  <br />
                  members, the Centre for Open-Source Software and Hardware
                  (COSH) at NITK Surathkal has a broad multidisciplinary
                  objective of serving society through research, education, and
                  development of and is the first of its kind in India.
                  <br />
                  members, the Centre for Open-Source Software and Hardware
                  (COSH) at NITK Surathkal has a broad multidisciplinary
                  objective of serving society through research, education, and
                  development of and is the first of its kind in India.
                </p>
              </div>
            </div>
          </div>
          <Button
            title="Read more"
            videoBtn={false}
            isDropdown={true}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        </section>
        <section className="team2-sec"></section>
        <section className="students-sec"></section>
      </div>
    </>
  );
}

export default Team;
