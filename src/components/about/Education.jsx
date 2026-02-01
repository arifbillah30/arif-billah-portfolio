import React from "react";

const educationContent = [
  {
    year: "2019 - 2025",
    degree: "BSC in Computer Science and Engineering",
    institute: "United International University - Dhaka, Bangladesh",
    details:
      "EQF level 6. Website: https://www.uiu.ac.bd/",
  },
  {
    year: "2015 - 2017",
    degree: "Alim (Higher Secondary Certificate Equivalent)",
    institute: "Darunnazat Siddikia Kamil Madrasah - Dhaka, Bangladesh",
    details: "Field of study: Science | EQF level 4. Website: https://dskm.ac.bd/",
  },
  {
    year: "2013 - 2015",
    degree: "Dakhil (Secondary School Certificate Equivalent)",
    institute: "Manikdi Islamia Alim Madrasah - Dhaka, Bangladesh",
    details: "Field of study: Science | EQF level 3. Website: https://mism.edu.bd/",
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
