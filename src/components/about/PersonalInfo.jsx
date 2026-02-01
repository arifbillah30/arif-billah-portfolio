import React from "react";

const personalInfoContent = [
 { meta: "first name", metaInfo: "Arif" },
  { meta: "last name", metaInfo: "Billah" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Bangladeshi" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Dhaka, Bangladesh" },
  { meta: "phone", metaInfo: "+8801793636121" },
  { meta: "Email", metaInfo: "arifbillah8888@gmail.com" },
  { meta: "Github", metaInfo: "arifbillah30" },
  { meta: "languages", metaInfo: "English, Bangla" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
