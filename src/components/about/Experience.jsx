import React from "react";

const experienceContent = [
  {
    year: "2023 - Present",
    position: "Software Engineer (Freelance)",
    companyName: "Upwork",
    details:
      "Building full-stack web apps using React/Next.js, Node.js/Express, and MySQL. Focus on clean UI, performant APIs, and reliable deployments.",
  },
  {
    year: "2020 - 2021",
    position: "Graphic Designer",
    companyName: "BASIS",
    details:
      "Produced brand assets, social graphics, and UI mockups; collaborated with teams to align visuals with product and marketing goals.",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
