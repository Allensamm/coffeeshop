import React from "react";
import Contact from "./Contact";
import Links from "./Links";
import PhoneEmailContact from "./PhoneEmailContact";
const Footer = () => {
  return (
    <div
      style={{ padding: "0 14%" }}
      className="md:flex flex-wrap justify-between  bg-[#291600]"
    >
      <Contact />
      <PhoneEmailContact />
    </div>
  );
};

export default Footer;
