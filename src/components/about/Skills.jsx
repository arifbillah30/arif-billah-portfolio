import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML5" },
  { skillClass: "p85", skillPercent: "85", skillName: "CSS" },
  { skillClass: "p90", skillPercent: "90", skillName: "JavaScript" },
  { skillClass: "p85", skillPercent: "85", skillName: "React" },
  { skillClass: "p80", skillPercent: "80", skillName: "Next.js" },
  { skillClass: "p80", skillPercent: "80", skillName: "Node.js" },
  { skillClass: "p78", skillPercent: "78", skillName: "ExpressJS" },
  { skillClass: "p70", skillPercent: "70", skillName: "PHP" },
  { skillClass: "p80", skillPercent: "80", skillName: "MySQL" },
  { skillClass: "p65", skillPercent: "65", skillName: "Python" },
  { skillClass: "p60", skillPercent: "60", skillName: "Java" },
  { skillClass: "p50", skillPercent: "50", skillName: "JavaFX" },
  { skillClass: "p65", skillPercent: "65", skillName: "Amazon EC2" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
