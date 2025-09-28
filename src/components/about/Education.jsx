import React from "react";

const educationContent = [
  {
    year: "2025",
    degree: "B.SC. IN CSE",
    institute: "UNITED INTERNATIONAL UNIVERSITY",
    details:
      "Completed Bachelor of Science in Computer Science & Engineering.",
  },
  {
    year: "2017",
    degree: "HSC",
    institute: "DSKM",
    details: "Completed Higher Secondary Certificate.",
  },
  {
    year: "2015",
    degree: "SSC",
    institute: "MAISIMA",
    details: "Completed Secondary School Certificate.",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
