import React from "react";
import TemplateInfo from "./TemplateInfo";
import "../CSS/MoreAboutSection.css";
function MoreAboutSection() {
  return (
    <>
      <TemplateInfo
        bannerHeading="About"
        bannerSubHeading="Chirrp Club"
        bannerParagraph="  A centre dedicated to open-source software and hardware at the
              National Institute of Technology Karnataka, Surathkal, Mangalore,
              India."
        bannerImage="https://wallpaperset.com/w/full/8/3/6/93556.jpg"
      />
      <div className="moreabout-text-sec">
        <p>
          Formed in October 2021 by a team of enthusiastic faculty members, the
          Centre for Open-Source Software and Hardware (COSH) at NITK Surathkal
          has a broad multidisciplinary objective of serving society through
          research, education, and development of open-source technologies, and
          is the first of its kind in India. COSH is open to all enthusiasts of
          open-source software and hardware. In particular, COSH encourages the
          student community to adopt open-source and trains them to synchronize
          to the needs of the industry while also amalgamating teaching and
          research. There is no boundary to the scope of open-source, both in
          academia and industry.
        </p>
        <h2>Vision</h2>
        <p>
          To become a globally recognized organization for the adoption and
          development of open-source software and hardware technologies for the
          benefit of the students, faculty, and industry, and to serve society.
        </p>
        <h2>Mission</h2>
        <p>
          To foster the adoption of open-source software and hardware for
          multi-disciplinary research, education, and product development.
        </p>
        <ul>
          <li>
            To advance multidisciplinary research, development, and education
            using open-source tools, technologies, and applications.
          </li>
          <li>
            To guide the student, staff, and faculty community towards a deeper
            understanding and appreciation of open-source technologies and
            applications.
          </li>
          <li>
            Promote participation in and organize, such as providing training on
            open-source software and hardware technologies, that benefit the
            community and advance open-source adoption.
          </li>
          <li>
            Develop courses and related material on open-source software and
            hardware technologies.
          </li>
          <li>
            Execute R&D projects in collaboration with academia, industry, and
            open-source experts.
          </li>
          <li>
            Build cost-effective, reliable, and robust software and hardware
            products indigenously by leveraging open-source technologies.
          </li>
          <li>
            Build a vibrant ecosystem on open-source technologies and foster a
            strong community that can make a positive social impact.
          </li>
        </ul>
        <h2>Stakeholders</h2>
        <p>The stakeholders of COSH NITK are:</p>
        <ul className="number-list">
          <li>
            <b>Faculty, Staff, and Students</b>
          </li>
          <p>
            The faculty, staff, and students can learn how to leverage
            open-source software and hardware for academic and research
            purposes, and also contribute to the open-source communities. This
            process creates an opportunity for everyone to become experts and
            leaders (maintainers) in open-source tools and technologies.
          </p>
          <li>
            <b>
              Academic Institutions and Universities, and Research Organizations
            </b>
          </li>
          <p>
            Academic institutions and universities can know about various
            open-source alternatives to manage and auto-grade course
            assignments, programming exercises, and observations from hardware
            experiments. They can indigenously develop the right set of tools
            required for fulfilling local requirements. Research Organizations
            can collaborate with COSH NITK to develop innovative new solutions
            based on open-source tools and technologies and leverage the
            expertise of the students, staff, and faculty. Besides, COSH NITK
            can help provide initial feedback on the new technologies being
            developed by research organizations and help improve before the
            technologies are made open to all.
          </p>
          <li>
            <b>
              Industries, Government Organizations, and Open-source
              organizations
            </b>
          </li>
          <p>
            COSH NITK can serve as a hub connecting industries, government
            organizations, and open-source organizations, thus creating a
            network of subject matter experts, engineers, developers, and
            potential users of open-source tools and technologies. Besides, COSH
            NITK can assist in the design and development of solutions based on
            open source technologies and help in the widespread adoption of
            these solutions.
          </p>
        </ul>
        <h2>Core Committee</h2>
        <p>
          COSH NITK is led by Shyam S. Kamath, Professor in the Department of
          Mathematical and Computational Sciences with the help of Ramesh Kini
          M., Associate Professor in the Department of Electronics and
          Communication Engineering, and Mohit P. Tahiliani, Assistant Professor
          in the Department of Computer Science and Engineering.
        </p>
      </div>
    </>
  );
}

export default MoreAboutSection;
