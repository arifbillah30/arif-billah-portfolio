import React from "react";

const experienceContent = [
  {
    year: "01/2023 - Present",
    position: "Freelance Full-Stack Web Developer",
    companyName: "Software Engineer - Dhaka, Bangladesh",
    details:
      "Developed full-stack web applications for international clients using React.js, Next.js, Node.js, Express.js, PHP, and MySQL. Built responsive user interfaces, REST APIs, dashboards, and custom web features based on client requirements. Managed client communication, requirement gathering, and project delivery in a remote freelance environment. Deployed applications using Vercel, AWS EC2, and cPanel, ensuring performance and reliability.",
  },
  {
    year: "01/02/2025 - 30/08/2025",
    position: "University Research Assistant",
    companyName: "United International University - Dhaka, Bangladesh",
    details:
      "Conducted multidisciplinary research in machine learning, digital image processing, computational genomics, and green computing. Developed YOLO-based deep learning models for indoor plant health classification, achieving up to 96.8% accuracy. Co-authored research projects in water quality prediction and AI energy efficiency in LLMs/VLMs. Gained experience working with Python, Scikit-learn, XGBoost, Pandas, NumPy, and data visualization tools.",
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
