import React from "react";

const experienceContent = [
  {
    year: "01/2026 - Present",
    position: "Freelance Full-Stack Web Developer",
    companyName: "Remote — Dhaka, Bangladesh",
    details:
      "Developed full-stack web applications for international clients using React.js, Next.js, Node.js, Express.js, PHP, and MySQL. Built responsive UIs, REST APIs, dashboards, and custom features based on requirements. Managed client communication, requirement gathering, and delivery. Deployed applications using Vercel, AWS EC2, and cPanel, ensuring performance and reliability.",
  },
  {
    year: "02/2025 - 08/2025",
    position: "Undergraduate Research Assistant",
    companyName: "United International University — Dhaka, Bangladesh",
    details:
      "Conducted applied research in machine learning and digital image processing. Built YOLO-based models for indoor plant health classification (up to 96.8% accuracy). Contributed to projects on water quality prediction and AI energy efficiency in LLMs/VLMs. Worked with Python, scikit-learn, XGBoost, pandas, NumPy, and data visualization tools.",
  },
  {
    year: "10/2023 - 09/2024",
    position: "Software Developer Intern (Internship)",
    companyName: "Arthor Limited — Dhaka, Bangladesh",
    details:
      "Supported backend development tasks including API development, database operations, and debugging. Prepared technical documentation and assisted with analysis tasks. Collaborated with the development team to deliver assigned modules on time.",
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
